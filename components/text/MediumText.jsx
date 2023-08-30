import { Text, StyleSheet } from "react-native";
import React from "react";

const MediumText = ({ children, style }) => {
  return <Text style={[styles.textStyle, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Quicksand-Medium",
    fontSize: 18,
    lineHeight: 24,
  },
});

export default MediumText;
