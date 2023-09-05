import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";

// File Imports;
import COLORS from "../../constants/colors";

const PaddingContainer = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    flex: 1,
    paddingHorizontal: 15,
  },
});
export default PaddingContainer;
