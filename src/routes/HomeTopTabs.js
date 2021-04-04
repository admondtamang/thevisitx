import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Trending from "../screens/Trending";
import User from "../screens/User";
import HomeNav from "../screens/Home/Navigation/HomeNav";
import colors from "../utils/colors";
const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: { fontSize: 12, color: "#0D0C22", textTransform: "lowercase" },
                tabStyle: { width: 100, shadowColor: "NavigationDarkTheme" },
                scrollEnabled: true,
                upperCaseLabel: false,
                labelStyle: {
                    fontWeight: "700",
                },
                indicatorStyle: {
                    borderColor: colors.primary,
                    color: colors.primary,
                    // backgroundColor: colors.secondary,
                    // padding: 23,
                    borderRadius: 10,
                },
                contentContainerStyle: {
                    shadowColor: "white",
                    borderTopColor: "black",
                },
                style: {
                    shadowColor: "white",
                },
            }}
        >
            <Tab.Screen name="Latest" component={HomeNav} />
            <Tab.Screen name="Trending" component={Trending} />
            <Tab.Screen name="Tech" component={User} />
        </Tab.Navigator>
    );
}
