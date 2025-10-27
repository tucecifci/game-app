import PrimaryButton from "@/app/ui/PrimaryButton";
import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import Colors from "../constants/Colors";
import Title from "@/app/ui/Title";
import Card from "@/app/ui/Card";
import IntroductionText from "@/app/ui/IntroductionText";

const StartGameScreen = ({
  onPickNumber,
}: {
  onPickNumber: (number: number) => void;
}) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");
  function numberInputHandler(enteredText: string) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Please enter a valid number", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.rootScreen}>
      <Title>Guess My Number</Title>
      <Card>
        <IntroductionText style={styles.instructionText}>Enter a number</IntroductionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
});
