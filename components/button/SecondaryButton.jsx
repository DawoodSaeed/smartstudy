import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

// File Imports;
import COLORS from "../../constants/colors";

const PrimaryButton = ({ children, style }) => {
  return (
    <Pressable style={[styles.btnPrimary, style]}>
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: COLORS.yellow,
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
