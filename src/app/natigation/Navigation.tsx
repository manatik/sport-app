import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../pages/HomeScreen.tsx";
import HistoryScreen from "../../pages/HistoryScreen.tsx";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="History" component={HistoryScreen}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default Navigation;