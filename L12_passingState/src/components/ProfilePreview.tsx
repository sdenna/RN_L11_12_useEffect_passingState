import { StyleSheet, Text, View } from "react-native";

type propsType = {
  name: string;
  bio: string;
};
const ProfilePreview: React.FC<propsType> = ({ name, bio }) => {
  return (
    <View>
      <Text style={styles.textStyle}>Name: {name}</Text>
      <Text style={styles.textStyle}>Bio: {bio}</Text>
    </View>
  );
};

export default ProfilePreview;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
  },
});
