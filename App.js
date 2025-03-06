import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const addTextHandler = (text) => {
    console.log(text);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your Course goals"
          onChangeText={addTextHandler}
        />
        <Button title="add Goals" />
      </View>
      <View style={styles.listContainer}>
        <Text>List of Goals</Text>
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
    alignItems: "center",
  },
});
