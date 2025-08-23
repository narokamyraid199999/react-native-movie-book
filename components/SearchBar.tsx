import { icons } from "@/constants/icons";
import { Image, Text, TextInput, View } from "react-native";

interface props {
  placeholder: string;
  onPress: () => void;
  fromHome?: boolean;
}

const SearchBar = ({ onPress, fromHome, placeholder }: props) => {
  return (
    <View
      className={`flex-row items-center bg-dark-200 rounded-full px-5 ${
        fromHome ? "py-4" : "py-2"
      }`}
    >
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      {fromHome ? (
        <Text onPress={onPress} className="flex-1 text-[#ab8bff] ml-2">
          {placeholder}
        </Text>
      ) : (
        <TextInput
          placeholder={placeholder}
          onPress={onPress}
          value=""
          onChangeText={() => {}}
          placeholderTextColor="#a8b5db"
          className="flex-1 ml-2 text-white  "
        />
      )}
    </View>
  );
};

export default SearchBar;
