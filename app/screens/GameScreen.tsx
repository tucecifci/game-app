import Colors from "@/app/constants/Colors";
import PrimaryButton from "@/app/ui/PrimaryButton";
import Title from "@/app/ui/Title";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../game/NumberContainer";

function generateRandomBetween(min: number, max: number, exclude: number) {
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber }: { userNumber: number }) => {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  function nextGuessHandler(direction: "higher" | "lower") {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNum);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent&apos;s Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.numberContainer}>
        <Text>Higher or lower?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  numberContainer: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
