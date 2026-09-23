import ProfileEditor from "@/components/ProfileEditor";
import ProfilePreview from "@/components/ProfilePreview";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const [name, setName] = useState<string>("Ada Lovelace");
  const [bio, setBio] = useState<string>("Pioneer of computing.");
  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: "lightblue" }}>
      {/* Editor Card */}
      <View style={styles.container}>
        {/* Child receives read-only values and change callbacks via props */}
        <ProfileEditor
          name={name}
          bio={bio}
          onChangeName={setName}
          onChangeBio={setBio}
        />
      </View>

      {/* Preview of the profile */}
      <View style={{ marginTop: 20 }}>
        {/* Child receives read-only values via props */}
        <ProfilePreview name={name} bio={bio} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
});
