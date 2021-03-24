import React from "react";
import { View, Text, Button } from "react-native";
import Constants from "expo-constants"; //So we can read app.json extra
import * as Google from "expo-google-app-auth"; //google auth libraries
import firebase from "firebase"; //basic firebase
import Firebase from "../../helpers/firebase"; //This is the initialized Firebase, you can find it in my GitHub

export default function User() {
    const handleGoogleSignin = async () => {
        try {
            //await GoogleSignIn.askForPlayServicesAsync();
            const result = await Google.logInAsync({
                //return an object with result token and user
                // iosClientId: Constants.manifest.extra.IOS_KEY, //From app.json
                androidClientId: Constants.manifest.extra.ANDROIUD_KEY, //From app.json
            });
            if (result.type === "success") {
                console.log(result);
                setIsLoading(true);
                const credential = firebase.auth.GoogleAuthProvider.credential(
                    //Set the tokens to Firebase
                    result.idToken,
                    result.accessToken
                );
                Firebase.auth()
                    .signInWithCredential(credential) //Login to Firebase
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                //CANCEL
            }
        } catch ({ message }) {
            alert("login: Error:" + message);
        }
    };
    return (
        <View>
            <Text>User</Text>
            <Button title="google auth" onPress={handleGoogleSignin} />
        </View>
    );
}
