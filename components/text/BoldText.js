import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BoldText = ({ children }) => {
  return <Text style={styles.textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "OpenSans-Bold",
    lineHeight: 36,
    fontSize: 30,
  },
});

export default BoldText;
