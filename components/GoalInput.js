import React from "react";
import PropTypes from "prop-types";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
	const [enteredGoal, setenteredGoal] = useState("");

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoal);
	};

	const goalInputHandler = (text) => {
		setenteredGoal(text);
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				placeholder="Your Course goals"
				onChangeText={goalInputHandler}
				value={enteredGoal}
			/>
			<Button title="add Goals" onPress={addGoalHandler} />
		</View>
	);
};

GoalInput.propTypes = {};

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
	},
	input: {
		width: "78%",
		borderColor: "gray",
		borderWidth: 1,
		backgroundColor: "#f0f0f0",
	},
});

export default GoalInput;
