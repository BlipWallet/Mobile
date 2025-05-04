import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TopBar } from "../components/top-bar/top-bar-feature";
import { HomeScreen } from "../screens/HomeScreen";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import BlankScreen from "../screens/BlankScreen";

const Tab = createBottomTabNavigator();

/**
 * This is the main navigator with a bottom tab bar.
 * Each tab is a stack navigator with its own set of screens.
 *
 * More info: https://reactnavigation.org/docs/bottom-tab-navigator/
 */
export function HomeNavigator() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => <TopBar />,
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Home":
              return (
                <MaterialCommunityIcon
                  name={focused ? "wallet" : "wallet-outline"}
                  size={size}
                  color={color}
                />
              );
            case "Search":
              return (
                <MaterialCommunityIcon
                  name={focused ? "magnify" : "magnify"}
                  size={size}
                  color={color}
                />
              );
            case "Social":
              return (
                <MaterialCommunityIcon
                  name={focused ? "account-group" : "account-group-outline"}
                  size={size}
                  color={color}
                />
              );
            case "Settings":
              return (
                <MaterialCommunityIcon
                  name={focused ? "cog" : "cog-outline"}
                  size={size}
                  color={color}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={BlankScreen} />
      <Tab.Screen name="Social" component={BlankScreen} />
      <Tab.Screen name="Settings" component={BlankScreen} />
    </Tab.Navigator>
  );
}
