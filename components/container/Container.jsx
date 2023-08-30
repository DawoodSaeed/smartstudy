import { View, StyleSheet } from "react-native";
import React from "react";

// File Imports;
import COLORS from "../../constants/colors";

const container = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.yellow,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
});
export default container;
