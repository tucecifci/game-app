import StartGameScreen from "@/app/screens/StartGameScreen";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  return (
    <LinearGradient
      colors={["#4e0329", "#ddb52f"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("@/assets/images/background.png")}
        style={styles.rootContainer}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
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
