import React, { FC } from 'react';
import { Button, Text, View } from "react-native";
import { NavigationAction } from '@react-navigation/native'

interface Props {
  navigation: any
}

const HomeScreen: FC<Props> = ({ navigation }) => {
  const toHistory = () => {
    navigation.navigate("History")
  }

  return (
    <View>
      <Text>Home screen!!!</Text>
      <Button title="To history" onPress={toHistory} />
    </View>
  );
};

export default HomeScreen;