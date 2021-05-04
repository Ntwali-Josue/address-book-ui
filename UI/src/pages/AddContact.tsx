import React from "react";

import {
  IonHeader,
  IonButton,
  IonPage,
  IonToolbar,
  IonBackButton,
  IonTitle,
} from "@ionic/react";

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
  </IonPage>
);

export default NewContact;
