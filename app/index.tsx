import StartGameScreen from "@/app/screens/StartGameScreen";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("@/assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("@/assets/fonts/OpenSans-Bold.ttf"),
  });
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds: number) {
    setGameIsOver(true);
    setRoundsNumber(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setRoundsNumber(0);
    setGameIsOver(false);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={roundsNumber}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
    <StatusBar style="auto" />
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("@/assets/images/background.png")}
        style={styles.rootContainer}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
