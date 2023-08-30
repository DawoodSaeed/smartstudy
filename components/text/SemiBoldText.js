import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SemiBoldText = ({ children }) => {
  return <Text style={styles.textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 25,
  },
});

export default SemiBoldText;
