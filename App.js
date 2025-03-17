import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalList from "./components/GoalList";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setcourseGoals] = useState([]);

	const addGoalHandler = () => {
		setcourseGoals((currentGoals) => [
			...currentGoals,
			{ text: enteredGoal, id: Math.random().toString() },
		]);
	};
	return (
		<View style={styles.appContainer}>
			{/* this is the Goal Input handler */}
			<GoalInput onAddGoal={addGoalHandler} />
			<FlatList
				data={courseGoals}
				renderItem={(itemData) => <GoalList text={itemData.item.text} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		padding: 20,
		paddingTop: 50,
	},
});
