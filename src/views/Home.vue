<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Página Inicial</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="profile-container">
        <ion-avatar class="profile-photo">
          <img src="/src/assets/images/perfil.png" alt="Foto 2x2" />
        </ion-avatar>
        
        <ion-card>
          <ion-card-header>
            <ion-card-title>Mis Datos Personales</ion-card-title>
          </ion-card-header>
          
          <ion-card-content>
            <ion-list>
              <ion-item>
                <ion-label><strong>Nombre:</strong> Patryck Yandell</ion-label>
              </ion-item>
              <ion-item>
                <ion-label><strong>Apellido:</strong> Jimenez Ogando</ion-label>
              </ion-item>
              <ion-item>
                <ion-label><strong>Matricula:</strong> 2023-1953</ion-label>
              </ion-item>
              <ion-item>
                <ion-label><strong>Correo Electrónico:</strong> Patryckyandelljimenez@gmail.com</ion-label>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>
      </div>
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
  IonList,
  IonItem,
  IonLabel,
  IonAvatar
} from '@ionic/vue';
</script>

<style scoped>
.profile-container {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.profile-photo {
  width: 150px;
  height: 150px;
  margin: 20px auto;
}

.profile-photo img {
  border: 3px solid var(--ion-color-primary);
}
</style>