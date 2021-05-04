import React from "react";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCol,
  IonRow,
  IonSearchbar
} from "@ionic/react";

import { addOutline } from "ionicons/icons";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow>
            <IonCol>
              <IonTitle className="ion-padding">Contacts</IonTitle>
            </IonCol>
            <IonCol>
            <IonSearchbar showCancelButton="never"></IonSearchbar>
            </IonCol>
            <IonCol>
              <IonButton href="/new" fill="outline" className="ion-float-right ion-margin" >
                <IonIcon icon={addOutline} />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};

export default Home;
