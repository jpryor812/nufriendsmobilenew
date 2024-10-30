import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const SearchingBubble: React.FC = () => {
  return (
    <View style={styles.BubbleContainer}>
      <Image source={require("../assets/images/magnifying_glass_emoji.png")} style={styles.MagnifyingGlass} />
      <Text style={styles.BubbleText}>Searching...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  BubbleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 30,
    padding: 8,
    paddingHorizontal: 20,
    backgroundColor: "#35D662",
    width: '54%',
  },
  MagnifyingGlass: {
    width: 32,
    height: 32,
    marginRight: 5,
  },
  BubbleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default SearchingBubble;