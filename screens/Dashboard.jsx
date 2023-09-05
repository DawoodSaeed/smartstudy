// Basic Imports;
import { Image, StyleSheet, View, Text } from "react-native";
import { useState } from "react";

// File Imports;
import { PaddingContainer } from "../components/container/Index";
import COLORS from "../constants/colors";
import { MediumText, SemiBoldText } from "../components/text/Index";
import Rating from "../components/rating/Rating";

const Dashboard = () => {
  const [rating, setRating] = useState(12);
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View style={styles.upperContainer}>
        <PaddingContainer>
          <View>
            <View style={styles.upperContainer_rowOne}>
              <View style={styles.upperContainer_rowOne_left}>
                <Image
                  source={require("../assets/profileImage.jpg")}
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 3,
                    borderRadius: 100,
                    borderColor: COLORS.third,
                  }}
                />
                <View style={{ marginLeft: 10, alignItems: "center" }}>
                  <MediumText style={styles.smallFont}>Hello,</MediumText>
                  <SemiBoldText style={styles.smallFont}>Jason</SemiBoldText>

                  <Rating rating={rating} />
                </View>
              </View>
              <View style={styles.row}>
                <View
                  style={{
                    backgroundColor: "rgba(252, 238, 33, 0.25)",
                    padding: 10,
                    borderRadius: 100,
                    shadowColor: "#fff",
                    shadowOffset: { width: 0, height: 2, elevation: 5 },
                  }}
                >
                  <Image source={require("../assets/white_star.png")} />
                </View>

                <View
                  style={{
                    backgroundColor: "rgba(252, 238, 33, 0.25)",
                    padding: 10,
                    borderRadius: 100,
                    shadowColor: "#fff",
                    shadowOffset: { width: 0, height: 2, elevation: 5 },
                    marginLeft: 10,
                  }}
                >
                  <Image source={require("../assets/bell.png")} />
                </View>
              </View>
            </View>
          </View>
        </PaddingContainer>
      </View>

      <View style={styles.downContainer}></View>
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
  // Upper Container;
  upperContainer: {
    backgroundColor: "rgba(248, 160, 8, 0.85)",
    flex: 0.4,
  },

  upperContainer_rowOne: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: "rgba(255, 255, 255, 0.6)",
  },

  upperContainer_rowOne_left: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  smallFont: {
    color: COLORS.white,
    fontSize: 16.2,
    lineHeight: 19.44,
  },

  // Down Container;
  downContainer: {
    flex: 0.6,
    backgroundColor: "#fff",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
  },
});

export default Dashboard;
