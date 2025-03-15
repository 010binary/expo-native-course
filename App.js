import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoal, setenteredGoal] = useState("");
  const [courseGoals, setcourseGoals] = useState([]);

  const goalInputHandler = (text) => {
    setenteredGoal(text);
  };

  const addGoalHandler = () => {
    setcourseGoals((currentGoals) => [...currentGoals, enteredGoal]);

    console.log(courseGoals);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your Course goals"
          onChangeText={goalInputHandler}
        />
        <Button title="add Goals" onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        {courseGoals.map((goal) => (
          <View style={styles.goal} key={goal}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
    paddingTop: 50,
  },
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
  listContainer: {
    marginTop: 20,
    borderTopColor: "gray",
    borderTopWidth: 1,
    paddingTop: 20,
    justifyContent: "center",
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
