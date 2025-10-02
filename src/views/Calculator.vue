<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Sumadora</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Calculadora de Sumas</ion-card-title>
        </ion-card-header>
        
        <ion-card-content>
          <ion-item>
            <ion-label position="stacked">Primer número</ion-label>
            <ion-input 
              v-model="number1" 
              type="number" 
              placeholder="Ingresa el primer número"
            ></ion-input>
          </ion-item>
          
          <ion-item>
            <ion-label position="stacked">Segundo número</ion-label>
            <ion-input 
              v-model="number2" 
              type="number" 
              placeholder="Ingresa el segundo número"
            ></ion-input>
          </ion-item>
          
          <ion-button 
            expand="block" 
            @click="calculateSum" 
            class="ion-margin-top"
          >
            Calcular Suma
          </ion-button>
          
          <div v-if="result !== null" class="result-section">
            <ion-text color="primary">
              <h2>Resultado: {{ result }}</h2>
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
import { ref } from 'vue';
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
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText
} from '@ionic/vue';

const number1 = ref<number>(0);
const number2 = ref<number>(0);
const result = ref<number | null>(null);

const calculateSum = () => {
  result.value = Number(number1.value) + Number(number2.value);
};
</script>

<style scoped>
.result-section {
  margin-top: 20px;
  text-align: center;
  padding: 15px;
  background-color: var(--ion-color-light);
  border-radius: 10px;
}
</style>