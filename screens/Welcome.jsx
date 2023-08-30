import { View, Text, StyleSheet, Image } from "react-native";

// File Imports;
import { BoldText, MediumText } from "../components/text/Index";
import { Container } from "../components/container/Index";

// /Expo Imports;
import { PrimaryButton, SecondaryButton } from "../components/button/Index";
const Welcome = () => {
  return (
    <Container>
      <Image
        source={require("../assets/studentReading.png")}
        style={styles.studentImage}
      />

      <View>
        <BoldText style={{ textAlign: "center" }}>
          Build Your Accademic Execellence
        </BoldText>

        <MediumText style={{ textAlign: "center", marginTop: 16 }}>
          Ignite Your Curiosity, and Ace the PEP Exam with Study Smart
        </MediumText>

        <View style={styles.btnContainer}>
          <SecondaryButton style={{ marginRight: 10 }}>LOGIN</SecondaryButton>
          <PrimaryButton>SIGNUP</PrimaryButton>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  studentImage: {
    height: 320,
    width: 320,
  },

  btnContainer: {
    marginTop: 64,
    flexDirection: "row",
  },
});

export default Welcome;