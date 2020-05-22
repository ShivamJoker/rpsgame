import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PlayScreen from "./src/PlayScreen";

export default function App() {
  const [play, setPlay] = useState(false);

  return play ? (
    <PlayScreen />
  ) : (
    <View style={styles.container}>
      <Text style={styles.header}>Rock Paper Scissors</Text>
      <Text style={{ fontSize: 70 }}>✊ ✋ ✌️</Text>
      <View style={styles.button}>
        <Button onPress={()=> setPlay(true)} title="Play" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 28,
    marginBottom: 30,
  },
  button: {
    width: 240,
    marginTop: 50,
  },
});
