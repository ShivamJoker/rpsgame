import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

const rock = require("./signs/rock.png");
const scissors = require("./signs/scissors.png");
const paper = require("./signs/paper.png");

const randomRPS = () => {
  const signs = [rock, scissors, paper];
  const rand = Math.floor(Math.random() * 3);
  return signs[rand];
};

const bgColors = ['#1abc9c', '#3498db', '#9b59b6'];

const PlayScreen = () => {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    if (counter === 0) return;
    const timer = setTimeout(() => {
      setCounter(counter - 1);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [counter]);

  return (
    <View style={StyleSheet.compose(styles.container, {backgroundColor: bgColors[counter - 1]})}>
      {counter > 0 ? (
        <Text style={styles.header}>{counter}</Text>
      ) : (
        <>
          <Image style={styles.img} source={randomRPS()} />
          <View style={styles.button}>
            <Button onPress={() => setCounter(3)} title="Play Again" />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 150,
    color: "#fff"
  },
  img: {
    width: 200,
    height: 200,
  },
  button: {
    position: "absolute",
    bottom: 35,
  },
});

export default PlayScreen;
