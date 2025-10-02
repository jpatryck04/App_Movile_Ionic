<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Mi Experiencia</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Mi Experiencia en el Desarrollo</ion-card-title>
        </ion-card-header>
        
        <ion-card-content>
          <div class="video-container">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/F4MXTFm5Onc" 
              title="Mi experiencia desarrollando la aplicación"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            ></iframe>
          </div>
          
          <div class="description-section">
            <ion-text>
              <p>
                En este video comparto mi experiencia desarrollando esta aplicación con Ionic Vue, 
                los desafíos enfrentados y lo aprendido durante el proceso.
              </p>
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
  IonText
} from '@ionic/vue';
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  margin-bottom: 20px;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.description-section {
  text-align: center;
  padding: 15px;
}
</style>