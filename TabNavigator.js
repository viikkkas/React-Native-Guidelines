import React from "react";
import { Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./app/components/Screen";

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweets"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
      }}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
