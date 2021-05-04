import React from "react";

import {
  IonHeader,
  IonButton,
  IonPage,
  IonToolbar,
  IonBackButton,
  IonTitle,
  IonList,
  IonItem,
  IonInput,
  IonContent,
  IonLabel,
  IonItemGroup,
  IonIcon,
} from "@ionic/react";
import { add, remove } from "ionicons/icons";

const NewContact: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButton fill="outline" className="ion-float-left ion-margin">
          <IonBackButton defaultHref="/" />
        </IonButton>
        <IonTitle className="ion-text-center ion-padding">New Contact</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <form action="" className="ion-margin">
        <IonList slot="center">
          <IonItem>
            <IonLabel position="floating">First Name </IonLabel>
            <IonInput type="text" required></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Last Name </IonLabel>
            <IonInput type="text" required></IonInput>
          </IonItem>
          
          <IonItemGroup>
            <IonItem>
              <IonLabel position="floating">email </IonLabel>
              <IonButton slot="start" size="small" color="danger" className="ion-float-left ion-margin-top"  >
                <IonIcon slot="icon-only" icon={remove} color="light" />
              </IonButton>
              <IonInput required type="email"></IonInput>
            </IonItem>
            <IonItem>
              <IonButton fill="clear">
                <IonIcon icon={add} slot="icon-only" />
                Add Email
              </IonButton>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">phone </IonLabel>
              <IonButton slot="start" size="small" color="danger" className="ion-float-left ion-margin-top"  >
                <IonIcon slot="icon-only" icon={remove} color="light" />
              </IonButton>
              <IonInput required type="email"></IonInput>
            </IonItem>
            <IonItem>
              <IonButton fill="clear">
                <IonIcon icon={add} slot="icon-only" />
                Add phone
              </IonButton>
            </IonItem>
          </IonItemGroup>
        </IonList>

        <IonButton className="ion-margin-top"> Done</IonButton>
      </form>
    </IonContent>
  </IonPage>
);

export default NewContact;
