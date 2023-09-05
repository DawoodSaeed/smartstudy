// Basic Imports;
import { Image, Pressable, StyleSheet, View } from "react-native";

// File Imports;
import { Container } from "../components/container/Index";
import { BoldText, MediumText } from "../components/text/Index";
import { PrimaryButton } from "../components/button/Index";
import CustomTextInput from "../components/textinput/CustomTextInput";

// Expo Imports;
const Login = () => {
  return (
    <Container>
      <Image
        source={require("../assets/studentReading.png")}
        style={styles.studentImage}
      />

      <View style={styles.textContainer}>
        <BoldText style={{ textAlign: "center" }}>Welcome Back,</BoldText>
        <MediumText style={{ textAlign: "center" }}>
          Make it work, make it right, make it fast.
        </MediumText>
      </View>

      <View style={{ width: "100%" }}>
        <CustomTextInput
          placeholder="Email"
          iconName="email"
          size={19}
          color="#919191"
        />

        <CustomTextInput
          placeholder="Password"
          iconName="lock"
          size={19}
          color="#919191"
        />
      </View>

      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <Pressable style={{ marginVertical: 10 }}>
          <MediumText style={{ fontSize: 14, color: "#0127A2" }}>
            Forget Password ?
          </MediumText>
        </Pressable>
        <PrimaryButton style={{ width: "100%" }}>LOGIN</PrimaryButton>
      </View>

      <View style={{ marginVertical: 10 }}>
        <MediumText>Don’t have an Account? Signup</MediumText>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  studentImage: {
    width: 240,
    height: 240,
  },

  textContainer: {},
});

export default Login;
