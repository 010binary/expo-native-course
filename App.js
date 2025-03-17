import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalList from "./components/GoalList";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setcourseGoals] = useState([]);

	const addGoalHandler = (enteredGoalText) => {
		setcourseGoals((currentGoals) => [
			...currentGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
	};

	const deleteGoalHandler = (id) => {
		setcourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== id);
		});
	};
	return (
		<View style={styles.appContainer}>
			{/* this is the Goal Input handler */}
			<GoalInput onAddGoal={addGoalHandler} />

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
