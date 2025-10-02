<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Traductor de Números</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Traductor de Números a Letras</ion-card-title>
          <ion-card-subtitle>Números del 1 al 1000</ion-card-subtitle>
        </ion-card-header>
        
        <ion-card-content>
          <ion-item>
            <ion-label position="stacked">Ingresa un número (1-1000)</ion-label>
            <ion-input 
              v-model="inputNumber" 
              type="number" 
              min="1"
              max="1000"
              placeholder="Ej: 123"
              @ionInput="validateNumber"
            ></ion-input>
          </ion-item>
          
          <ion-button 
            expand="block" 
            @click="translateNumber" 
            :disabled="!isValidNumber"
            class="ion-margin-top"
          >
            Traducir a Letras
          </ion-button>
          
          <div v-if="translatedText" class="result-section">
            <ion-text color="primary">
              <h3>En letras:</h3>
              <h2>{{ translatedText }}</h2>
            </ion-text>
          </div>
          
          <div v-if="errorMessage" class="error-section">
            <ion-text color="danger">
              <p>{{ errorMessage }}</p>
            </ion-text>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
    <ion-footer class="custom-footer">
      <ion-toolbar>
        <ion-grid>
          <ion-row class="ion-justify-content-center ion-align-items-center">
            <ion-col size="12" class="ion-text-center">
              <ion-text color="medium">
                <p class="footer-main-text">
                  © 2025 - Patryck Yandell Jimenez Ogando
                </p>
                <p class="footer-secondary-text">
                  Matrícula: 2023-1953 | Tarea 3 - Desarrollo de Aplicaciones Móviles
                </p>
                <p class="footer-tertiary-text">
                  Ionic + Vue + TypeScript
                </p>
              </ion-text>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButtons, 
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText
} from '@ionic/vue';

const inputNumber = ref<string>('');
const translatedText = ref<string>('');
const errorMessage = ref<string>('');

const isValidNumber = computed(() => {
  const num = parseInt(inputNumber.value);
  return !isNaN(num) && num >= 1 && num <= 1000;
});

const validateNumber = () => {
  const num = parseInt(inputNumber.value);
  if (isNaN(num)) {
    errorMessage.value = 'Por favor ingresa un número válido';
  } else if (num < 1 || num > 1000) {
    errorMessage.value = 'El número debe estar entre 1 y 1000';
  } else {
    errorMessage.value = '';
  }
};

const translateNumber = () => {
  if (!isValidNumber.value) return;
  
  const num = parseInt(inputNumber.value);
  translatedText.value = numberToWords(num);
};

const numberToWords = (num: number): string => {
  const units = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const teens = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  const tens = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const hundreds = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
  
  if (num === 0) return 'cero';
  if (num === 100) return 'cien';
  if (num === 1000) return 'mil';
  
  let words = '';
  
  // Centenas
  const hundred = Math.floor(num / 100);
  if (hundred > 0) {
    words += hundreds[hundred];
    const remainder = num % 100;
    if (remainder > 0) words += ' ';
  }
  
  // Decenas y unidades
  const remainder = num % 100;
  if (remainder > 0) {
    if (remainder < 10) {
      words += units[remainder];
    } else if (remainder < 20) {
      words += teens[remainder - 10];
    } else {
      const ten = Math.floor(remainder / 10);
      const unit = remainder % 10;
      words += tens[ten];
      if (unit > 0) {
        words += ' y ' + units[unit];
      }
    }
  }
  
  return words;
};
</script>

<style scoped>
.result-section, .error-section {
  margin-top: 20px;
  text-align: center;
  padding: 15px;
  border-radius: 10px;
}

.result-section {
  background-color: var(--ion-color-light);
}

.error-section {
  background-color: var(--ion-color-danger-tint);
}
</style>