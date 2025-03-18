import React from "react";
import PropTypes from "prop-types";
import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Modal,
	Image,
} from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
	const [enteredGoal, setenteredGoal] = useState("");

	const addGoalHandler = () => {
		// basic validation
		if (enteredGoal.length === 0) {
			return;
		}

		props.onAddGoal(enteredGoal);
		setenteredGoal("");
	};

	const goalInputHandler = (text) => {
		setenteredGoal(text);
	};

	return (
		<Modal animationType="slide" visible={props.visible}>
			<View style={styles.inputContainer}>
				<Image
					source={require("../assets/images/goal.png")}
					style={styles.images}
				/>
				<TextInput
					style={styles.input}
					placeholder="Your Course goals"
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>

				<View style={styles.btnCover}>
					<View style={styles.btnContainer}>
						<Button title="add Goals" onPress={addGoalHandler} />
					</View>
					<View style={styles.btnContainer}>
						<Button title="close Modal" onPress={props.onClose} color={"red"} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

GoalInput.propTypes = {
	onAddGoal: PropTypes.func.isRequired,
	visible: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	images: {
		width: 100,
		height: 100,
		alignSelf: "center",
		marginBottom: 20,
	},

	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		padding: 20,
		backgroundColor: "#113ed4",
	},
	input: {
		borderColor: "gray",
		borderWidth: 1,
		backgroundColor: "#2756f5",
		placeholderTextColor: "#fff",
		color: "#fff",
	},
	btnContainer: {
		width: "100",
		marginHorizontal: 5,
	},
	btnCover: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
	},
});

export default GoalInput;
