import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

const GoalList = (props) => {
  console.log(props);
  return (
    <View style={styles.listContainer}>
      <View style={styles.goal}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </View>
  );
};

GoalList.propTypes = {
  text: PropTypes.string,
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
    borderTopColor: "gray",
    borderTopWidth: 1,
    paddingBottom: 100,
    height: "80%",
  },
  goalContainter: {
    height: "80%",
  },
  goal: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "purple",
    borderRadius: 5,
  },
  goalText: {
    color: "white",
    textTransform: "uppercase",
  },
});

export default GoalList;
