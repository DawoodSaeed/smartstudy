import { View, TextInput, Text, StyleSheet } from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const CustomTextInput = ({
  placeholder,
  iconName,
  size,
  color,
  user = false,
}) => {
  return (
    <View style={styles.textInputContainer}>
      {user ? (
        <FontAwesome name={iconName} size={size} color={color} />
      ) : (
        <MaterialIcons name={iconName} size={size} color={color} />
      )}

      <TextInput placeholder={placeholder} style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 2,
    borderColor: "#919191",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  textInput: {
    color: "#919191",
    marginLeft: 10,
    fontFamily: "Quicksand-Medium",
    width: "90%",
  },
});

export default CustomTextInput;
