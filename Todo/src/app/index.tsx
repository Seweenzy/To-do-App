import Tasks from "@/components/tasks";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
const Index = () => {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTaskItems([...taskItems, task.trim()]);
    setTask("");
  };

  const completeTask = (index: number) => {
    const itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <SafeAreaView style={Styles.container}>
      <Text>Hello, Welcome to my TO-DO App</Text>

      <View style={Styles.header}>
        <Text style={Styles.headertext}>Today's Tasks</Text>
      </View>

      <View>
        {taskItems.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => completeTask(index)}>
            <Tasks label={item} />
          </TouchableOpacity>
        ))}
        {/* <Tasks label={"Hello world"} />*/}
      </View>

      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 60,
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          marginHorizontal: 20,
        }}
      >
        <TextInput
          onChangeText={(text) => setTask(text)}
          value={task}
          placeholder="Write a task"
          style={{
            width: 300,
            borderColor: "lightgrey",
            borderWidth: 2,
            borderRadius: 20,
            height: 50,
            padding: 12,
            backgroundColor: "white",
          }}
        />

        <Pressable
          onPress={handleAddTask}
          style={({ pressed }) => ({
            width: 60,
            height: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 20,
            backgroundColor: pressed ? "lightblue" : "white",
          })}
        >
          <Text style={{ fontSize: 25 }}>+</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Index;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 30,
  },
  headertext: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
