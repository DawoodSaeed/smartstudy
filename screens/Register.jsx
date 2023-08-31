// Basic Imports;
import { Image, Pressable, StyleSheet, View } from "react-native";

// File Imports;
import { Container } from "../components/container/Index";
import BoldText from "../components/text/BoldText";
import MediumText from "../components/text/MediumText";
import CustomTextInput from "../components/textinput/CustomTextInput";
import PrimaryButton from "../components/button/PrimaryButton";

// Expo Imports;
const Register = () => {
  return (
    <Container>
      <Image
        source={require("../assets/femaleStudent.jpg")}
        style={styles.studentImage}
      />

      <View style={styles.textContainer}>
        <BoldText style={{ textAlign: "center" }}>Signup now!</BoldText>
        <MediumText style={{ textAlign: "center" }}>
          Join our community and start your journey today.
        </MediumText>
      </View>

      <View style={{ width: "100%" }}>
        <CustomTextInput
          placeholder="First Name"
          iconName="user"
          size={19}
          color="#919191"
          user={true}
        />

        <CustomTextInput
          placeholder="Last Name"
          iconName="user"
          size={19}
          color="#919191"
          user={true}
        />

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

      <View style={{ width: "100%", alignItems: "flex-end", marginTop: 20 }}>
        <PrimaryButton style={{ width: "100%" }}>SIGN UP</PrimaryButton>
      </View>

      <View style={{ marginVertical: 10 }}>
        <MediumText>Have an Account? Login</MediumText>
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

export default Register;
