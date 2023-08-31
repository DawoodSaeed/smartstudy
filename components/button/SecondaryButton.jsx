import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

// File Imports;
import COLORS from "../../constants/colors";

const PrimaryButton = ({ children, style, onPress }) => {
  return (
    <Pressable style={[styles.btnPrimary, style]} onPress={onPress}>
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: COLORS.white,
    height: 48,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.black,
  },

  btnText: {
    textTransform: "uppercase",
    fontFamily: "OpenSans-Bold",
    fontSize: 18,
  },
});

export default PrimaryButton;
