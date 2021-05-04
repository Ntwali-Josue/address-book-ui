import React from 'react';

import {IonHeader,IonButton, IonPage, IonToolbar, IonIcon, IonBackButton, } from '@ionic/react';


const NewContact: React.FC = () => (

    <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonButton fill="outline">
            <IonBackButton defaultHref="/" />
            </IonButton>
            </IonToolbar>
        </IonHeader>
    </IonPage>
);

export default NewContact;