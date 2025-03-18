import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalList from "./components/GoalList";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
	const [courseGoals, setcourseGoals] = useState([]);
	const [isModelVisible, setIsModelVisible] = useState(false);

	const closeModal = () => {
		setIsModelVisible(false);
	};

	const addGoalHandler = (enteredGoalText) => {
		setcourseGoals((currentGoals) => [
			...currentGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
		closeModal();
	};

	const deleteGoalHandler = (id) => {
		setcourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== id);
		});
	};

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<View>
					<Button
						title="Add New Goal"
						onPress={() => setIsModelVisible(true)}
					/>
				</View>

				{/* this is the Goal Input handler */}
				<GoalInput
					visible={isModelVisible}
					onAddGoal={addGoalHandler}
					onClose={closeModal}
				/>
				<View style={styles.listContainer}>
					<FlatList
						data={courseGoals}
						renderItem={(itemData) => (
							<GoalList
								onDelete={deleteGoalHandler}
								text={itemData.item.text}
								id={itemData.item.id}
							/>
						)}
						keyExtractor={(item) => item.id}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		padding: 20,
		paddingTop: 50,
	},
	listContainer: {
		marginTop: 20,
		borderTopColor: "gray",
		borderTopWidth: 1,
		height: "90%",
	},
});
