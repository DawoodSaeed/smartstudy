import { View, Text, StyleSheet, Image } from "react-native";

// File Imports;
import COLORS from "../constants/colors";
import { BoldText, MediumText } from "../components/text/Index";
import { Container } from "../components/container/Index";

// /Expo Imports;
import { LinearGradient } from "expo-linear-gradient";
const Welcome = () => {
  return (
    <Container>
      <Image
        source={require("../assets/studentReading.png")}
        style={styles.studentImage}
      />

      <View>
        <BoldText>Build Your Accademic Execellence</BoldText>

        <MediumText>
          Ignite Your Curiosity, and Ace the PEP Exam with Study Smart{" "}
        </MediumText>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  studentImage: {
    height: 320,
    width: 320,
  },
});

export default Welcome;
