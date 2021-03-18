import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Trending from "../screens/Trending";
import User from "../screens/User";
import HomeNav from "../screens/Home/Navigation/HomeNav";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: { fontSize: 12, color: "#0D0C22" },
                tabStyle: { backgroundColor: "white", width: 100, shadowColor: "NavigationDarkTheme" },
                scrollEnabled: true,
                upperCaseLabel: false,
                labelStyle: {
                    activeTintColor: "red",
                    inactiveTintColor: "grey",
                },
                indicatorStyle: { color: "red" },
            }}
        >
            <Tab.Screen name="Home" component={HomeNav} />
            <Tab.Screen name="Trending" component={Trending} />
            <Tab.Screen name="d" component={User} />
        </Tab.Navigator>
    );
}
