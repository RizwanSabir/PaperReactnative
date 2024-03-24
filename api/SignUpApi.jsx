import { View, Text } from 'react-native'
import React from 'react'

export default async function SignUpApi({auth,Email,createUserWithEmailAndPassword}) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, Email, Password);
        const user = userCredential.user;

        const userDocRef = doc(db, "users", user.uid);
        await setDoc(userDocRef, {
            Name: data.Name,
            Email: data.Email,
            Password: data.Password
        });

        console.log("Document written with ID: ", user.uid);
    } catch (error) {
        console.error("Error signing up or adding document: ", error);
    }
}