import { useState } from "react";
import { TextInput, View, Text } from "react-native";

const Tasks = ({ label }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 12,
          paddingHorizontal: 12,
          height: 50,
        }}
      >
        {/* Blue square part of the input container */}
        <View
          style={{
            height: 24,
            width: 24,
            backgroundColor: "#55b6fc",
            opacity: 0.4,
            marginRight: 8,
            borderRadius: 5,
            gap: 20,
          }}
        ></View>
        <Text
          style={{
            marginRight: 12,
            fontSize: 16,
            color: "#333",
            maxWidth: "80%",
          }}
        >
          {label}
        </Text>

        {/* TextInput fills the rest of the same container */}
        <TextInput style={{ flex: 1, backgroundColor: "transparent" }} />
        <View
          style={{
            height: 12,
            width: 12,
            borderWidth: 2,
            marginRight: 8,
            borderRadius: 5,
            borderColor: "#55b6fc",
          }}
        ></View>
      </View>
    </View>
  );
};

export default Tasks;
