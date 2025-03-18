import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalList = (props) => {
	return (
		<>
			<View style={styles.goal}>
				<Pressable
					android_ripple={{ color: "green" }}
					onPress={props.onDelete.bind(this, props.id)}
				>
					<Text style={styles.goalText}>{props.text}</Text>
				</Pressable>
			</View>
		</>
	);
};

GoalList.propTypes = {
	text: PropTypes.string,
};

const styles = StyleSheet.create({
	goal: {
		marginVertical: 5,
		backgroundColor: "purple",
		borderRadius: 5,
	},
	goalText: {
		color: "white",
		padding: 10,
		textTransform: "uppercase",
	},
});

export default GoalList;
