/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import EntryPoint from "./src";
import { NavigationContainer } from "@react-navigation/native";
import { RealmProvider } from "@realm/react";
import { User } from './src/entities/user/model/user.model.ts';

const realmModels = [
  User
];

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <RealmProvider schema={realmModels}>
        <EntryPoint/>
      </RealmProvider>
    </NavigationContainer>
  );
}

export default App;
