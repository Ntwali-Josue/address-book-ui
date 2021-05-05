import React, { useState } from "react";

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
  IonAlert,
  IonLoading
} from "@ionic/react";
import { add } from "ionicons/icons";
import { RouteComponentProps } from "react-router";

const NewContact: React.FC<RouteComponentProps> = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState([""]);
  const [email, setEmail] = useState([""]);


  const onPhoneChange = (val: string, i: number) => {
    if (val.length > 0) {
      setPhone(
        phone.map((value, index) => {
          if (index === i) {
            return val;
          } else {
            return value;
          }
        })
      );
    }
  };

  const onEmailChange = (val: string, i: number) => {
    if (val.length > 0) {
      setEmail(
        email.map((value, index) => {
          if (index === i) {
            return val;
          } else {
            return value;
          }
        })
      );
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton fill="outline" className="ion-float-left ion-margin">
            <IonBackButton defaultHref="/" />
          </IonButton>
          <IonTitle className="ion-text-center ion-padding">
            New Contact
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form action="" className="ion-margin">
          <IonList slot="center">
            <IonItem>
              <IonLabel position="floating">First Name </IonLabel>
              <IonInput
                type="text"
                required
                value={firstName}
                onIonChange={(e) =>
                  setFirstName((e.target as HTMLInputElement).value)
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Last Name </IonLabel>
              <IonInput
                type="text"
                required
                value={lastName}
                onIonChange={(e) =>
                  setLastName((e.target as HTMLInputElement).value)
                }
              ></IonInput>
            </IonItem>
            <IonItemGroup>
              {email.map((email, index) => (
                <IonItem key={`email${index}`}>
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput
                    required
                    type="email"
                    pattern="email"
                    value={email}
                    onIonChange={(e) =>
                      onEmailChange((e.target as HTMLInputElement).value, index)
                    }
                  ></IonInput>
                </IonItem>
              ))}
              <IonItem>
                <IonButton
                  fill="clear"
                  onClick={(e) => setEmail([...email, ""])}
                >
                  <IonIcon icon={add} slot="icon-only" />
                  Add Email
                </IonButton>
              </IonItem>

            {phone.map((phone, index) => (
              <IonItem key={`phone${index}`}>
                <IonLabel position="floating">Phone </IonLabel>
                <IonInput required type="number" onClick={ (e) => onPhoneChange((e.target as HTMLInputElement).value, index)}></IonInput>
              </IonItem>
            ))}
              <IonItem>
                <IonButton fill="clear" onClick={(e) => setPhone([...phone, ""])}>
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
};

export default NewContact;
