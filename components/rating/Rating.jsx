// Basic Imports
import { View, Image, StyleSheet } from "react-native";
import React from "react";

// File Imports;
import COLORS from "../../constants/colors";
import { MediumText } from "../text/Index";
const Rating = ({ rating }) => {
  return (
    <View style={[styles.rating, styles.row]}>
      <Image source={require("../../assets/star.png")} />
      <MediumText style={styles.ratingFont}>{rating}</MediumText>
    </View>
  );
};

const styles = StyleSheet.create({
  // row
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  // rating
  rating: {
    width: 64,
    height: 24,
    borderWidth: 1,
    borderColor: COLORS.third,
    borderRadius: 15,
    backgroundColor: COLORS.third,
  },

  ratingFont: {
    fontSize: 12,
    color: COLORS.primary,
    lineHeight: 14,
    marginLeft: 5,
  },
});
export default Rating;
