import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MediumText = ({ children }) => {
  return <Text style={styles.textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Quicksand-Medium",
    fontSize: 18,
    lineHeight: 24,
  },
});

export default MediumText;
