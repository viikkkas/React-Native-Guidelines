import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return ;
}

export default App;
