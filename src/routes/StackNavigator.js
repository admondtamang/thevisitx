import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "./TabNavigator";
import ArticleDetail from "../screens/ArticleDetail";

export default function StackNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="TabNavigator">
            <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
        </Stack.Navigator>
    );
}
