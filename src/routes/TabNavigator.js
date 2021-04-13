import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import User from "../screens/User";
import Home from "../screens/Home/Home";
import Trending from "../screens/Trending";
import { MaterialIcons } from "@expo/vector-icons";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "#000",
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Trending"
                component={Trending}
                options={{
                    tabBarLabel: "Trending",
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="trending-up" size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="search" size={size} color={color} />,
                }}
            />

            <Tab.Screen
                name="User"
                component={User}
                options={{
                    tabBarLabel: "User",
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="supervised-user-circle" color={color} size={size} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
