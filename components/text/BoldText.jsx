import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BoldText = ({ children, style }) => {
  return <Text style={[styles.textStyle, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "OpenSans-Bold",
    lineHeight: 36,
    fontSize: 30,
  },
});

export default BoldText;
