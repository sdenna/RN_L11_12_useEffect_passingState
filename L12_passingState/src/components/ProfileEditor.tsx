import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type propsType = {
  name: string;
  bio: string;
  onChangeName: (next: string) => void;
  onChangeBio: (next: string) => void;
};

const ProfileEditor: React.FC<propsType> = ({
  name,
  bio,
  onChangeName,
  onChangeBio,
}) => {
  return (
    <View style={styles.container}>
      {/* Controlled input: value comes from PARENT via props */}
      <Text style={{ fontSize: 12, color: "#666" }}>Name</Text>
      <TextInput
        value={name}
        onChangeText={(text) => onChangeName(text)} // ask PARENT to update
        placeholder="Enter name"
        style={styles.textInputStyle}
      />

      {/* Controlled input: value comes from PARENT via props */}
      <Text style={{ fontSize: 12, color: "#666" }}>Bio</Text>
      <TextInput
        value={bio}
        onChangeText={(text) => onChangeBio(text)}
        placeholder="Enter bio"
        style={styles.textInputStyle}
      />
    </View>
  );
};

export default ProfileEditor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    height: 140,
    width: 250,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "teal",
    padding: 10,
  },
});
