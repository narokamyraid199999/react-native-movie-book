import { Text, View } from "react-native";

const MovieDetailsBody = () => {
  return (
    <View className="flex-1">
      {Array.from({ length: 10 }).map((_, index) => (
        <Text key={index} className="text-white text-lg mt-20">
          MovieDetailsBody
        </Text>
      ))}
    </View>
  );
};

export default MovieDetailsBody;
