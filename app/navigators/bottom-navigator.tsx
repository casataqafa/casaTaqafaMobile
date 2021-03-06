/* eslint-disable react/display-name */
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { color } from "../theme"
import { FavoritesScreen, HomeScreen, MapScreen, ProfileScreen } from "../screens"
import HomeIcon from "../../assets/svgs/home-icon"
import HeartIcon from "../../assets/svgs/heart-icon"
import MapIcon from "../../assets/svgs/map-icon"
import ProfileIcon from "../../assets/svgs/profile-icon"
import { AuthenticatedNavigatorParamList } from "./authenticated-navigator"

const Tab = createBottomTabNavigator<AuthenticatedNavigatorParamList>()
export const BottomNavigationBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: color.primary,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 1,
          borderTopWidth: 0,
          shadowColor: "grey",
          shadowOpacity: 0.9,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 1,
          },
        },
      }}
    >
      <Tab.Screen
        name={"home"}
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: color.primary,
          tabBarIcon: ({ color }) => <HomeIcon size={25} stroke={color} />,
        }}
      />
      <Tab.Screen
        name={"favorite"}
        component={FavoritesScreen}
        options={{
          tabBarActiveTintColor: color.primary,
          tabBarIcon: ({ color }) => <HeartIcon size={25} stroke={color} />,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={"map"}
        component={MapScreen}
        options={{
          tabBarActiveTintColor: color.primary,
          tabBarIcon: ({ color }) => <MapIcon size={25} stroke={color} />,
        }}
      />
      <Tab.Screen
        name={"profile"}
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: color.primary,
          tabBarIcon: ({ color }) => <ProfileIcon size={25} stroke={color} />,
        }}
      />
    </Tab.Navigator>
  )
}
