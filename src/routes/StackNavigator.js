import React, { useEffect, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "./TabNavigator";
import ArticleDetail from "../screens/ArticleDetail";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchScreen from "../screens/SearchScreen";

export default function StackNavigator() {
    const Stack = createStackNavigator();
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    useEffect(() => {
        AsyncStorage.getItem("onboarding").then((value) => {
            if (value === null) {
                AsyncStorage.setItem("onboarding", "true");
                setIsFirstLaunch(true);
            } else setIsFirstLaunch(false);
        });
    }, []);
    return (
        <Stack.Navigator initialRouteName={isFirstLaunch ? "OnBoarding" : "TabNavigator"}>
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    );
}
