import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>MovieDetails: {id}</Text>
    </View>
  );
};

export default MovieDetails;
