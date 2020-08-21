import React from "react";
import { AsyncStorage } from "react-native";

export default function App() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem("Person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem("Person");
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };
  demo();

  return null;
}
