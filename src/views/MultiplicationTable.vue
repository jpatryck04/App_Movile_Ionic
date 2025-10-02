<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Tabla de Multiplicar</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Tabla de Multiplicar</ion-card-title>
          <ion-card-subtitle>Números del 1 al 13</ion-card-subtitle>
        </ion-card-header>
        
        <ion-card-content>
          <ion-item>
            <ion-label position="stacked">Ingresa un número (1-13)</ion-label>
            <ion-input 
              v-model="baseNumber" 
              type="number" 
              min="1"
              max="13"
              placeholder="Ej: 7"
              :class="inputClass"
              @ionInput="handleInput"
            ></ion-input>
          </ion-item>
          
          <!-- Mensaje de error con efectos -->
          <div v-if="errorMessage" class="error-section" :class="{ blink: isBlinking }" :style="blinkStyle">
            <ion-text>
              <p class="error-text">{{ errorMessage }}</p>
            </ion-text>
          </div>
          
          <!-- Tabla de multiplicar -->
          <div v-if="multiplicationTable.length > 0 && !errorMessage" class="table-section">
            <ion-text color="primary">
              <h3>Tabla del {{ baseNumber }}</h3>
            </ion-text>
            
            <ion-list>
              <ion-item v-for="item in multiplicationTable" :key="item.multiplier">
                <ion-label>
                  {{ baseNumber }} × {{ item.multiplier }} = {{ item.result }}
                </ion-label>
              </ion-item>
            </ion-list>
          </div>
          
          <!-- Mensaje cuando no hay número -->
          <div v-else-if="!errorMessage" class="placeholder-section">
            <ion-text color="medium">
              <p>Ingresa un número del 1 al 13 para generar su tabla de multiplicar</p>
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
import { ref, computed, onUnmounted } from 'vue';
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
  IonText,
  IonList
} from '@ionic/vue';

const baseNumber = ref<string>('');
const errorMessage = ref<string>('');
const isBlinking = ref<boolean>(false);
const blinkInterval = ref<number | null>(null);

// Computed properties para los efectos visuales
const inputClass = computed(() => {
  return errorMessage.value ? 'input-error' : '';
});

const blinkStyle = computed(() => {
  const num = parseInt(baseNumber.value);
  if (isNaN(num) || num <= 13) return {};
  
  // La velocidad del parpadeo aumenta con el número
  const speed = Math.max(100, 1000 - (num * 50));
  return {
    '--blink-speed': `${speed}ms`
  };
});

const multiplicationTable = computed(() => {
  const num = parseInt(baseNumber.value);
  if (isNaN(num) || errorMessage.value) return [];
  
  const table = [];
  for (let i = 1; i <= 10; i++) {
    table.push({
      multiplier: i,
      result: num * i
    });
  }
  return table;
});

const startBlinking = () => {
  stopBlinking(); // Detener cualquier parpadeo anterior
  
  const num = parseInt(baseNumber.value);
  if (isNaN(num) || num <= 13) return;
  
  const speed = Math.max(100, 1000 - (num * 50));
  
  blinkInterval.value = window.setInterval(() => {
    isBlinking.value = !isBlinking.value;
  }, speed);
};

const stopBlinking = () => {
  if (blinkInterval.value !== null) {
    clearInterval(blinkInterval.value);
    blinkInterval.value = null;
  }
  isBlinking.value = false;
};

const handleInput = (event: any) => {
  const value = event.target.value;
  const num = parseInt(value);
  
  if (value === '') {
    baseNumber.value = '';
    errorMessage.value = '';
    stopBlinking();
    return;
  }
  
  if (isNaN(num)) {
    errorMessage.value = 'Por favor ingresa un número válido';
    stopBlinking();
    return;
  }
  
  if (num < 1) {
    errorMessage.value = 'El número debe ser mayor o igual a 1';
    stopBlinking();
  } else if (num > 13) {
    errorMessage.value = `¡ALERTA! No está permitido usar números mayores a 13 (ingresaste: ${num})`;
    startBlinking();
  } else {
    errorMessage.value = '';
    stopBlinking();
    baseNumber.value = value;
  }
};

// Limpiar el intervalo cuando el componente se desmonte
onUnmounted(() => {
  stopBlinking();
});
</script>

<style scoped>
.table-section, .placeholder-section, .error-section {
  margin-top: 20px;
}

.table-section h3 {
  text-align: center;
  margin-bottom: 15px;
}

.placeholder-section {
  text-align: center;
  padding: 20px;
  background-color: var(--ion-color-light);
  border-radius: 10px;
}

.error-section {
  text-align: center;
  padding: 15px;
  background-color: var(--ion-color-danger-tint);
  border: 2px solid var(--ion-color-danger);
  border-radius: 10px;
  margin-top: 15px;
  transition: all 0.3s ease;
}

/* TEXTO MEJORADO - MÁS VISIBLE */
.error-text {
  color: var(--ion-color-danger-contrast) !important;
  font-weight: 600;
  font-size: 1.1em;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* Alternativa si el color anterior no se ve bien */
.error-text-alternative {
  color: #8B0000 !important; /* Rojo oscuro */
  font-weight: bold;
  font-size: 1.1em;
  margin: 0;
}

/* Otra alternativa con blanco */
.error-text-white {
  color: white !important;
  font-weight: bold;
  font-size: 1.1em;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

/* Fondo más oscuro para mejor contraste */
.error-section {
  background: linear-gradient(135deg, var(--ion-color-danger), #c53030) !important;
  border: 3px solid var(--ion-color-danger-shade) !important;
}

/* Efecto de parpadeo */
.blink {
  animation: blink-animation var(--blink-speed, 500ms) infinite alternate;
}

@keyframes blink-animation {
  0% {
    opacity: 1;
    transform: scale(1);
    background: linear-gradient(135deg, var(--ion-color-danger), #c53030);
  }
  100% {
    opacity: 0.8;
    transform: scale(1.02);
    background: linear-gradient(135deg, #c53030, var(--ion-color-danger));
  }
}

/* Estilo para el input cuando hay error */
.input-error {
  --background: var(--ion-color-danger-tint);
  --border-color: var(--ion-color-danger);
  --color: var(--ion-color-danger);
  --placeholder-color: var(--ion-color-danger-shade);
}

/* Efecto de vibración para input con números muy altos */
.input-error:focus {
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
</style>