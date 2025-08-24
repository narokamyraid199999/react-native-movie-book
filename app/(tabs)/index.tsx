import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1 bg-primary">
        <Image source={images.bg} className="absolute w-full z-0" />
        <ScrollView
          className="flex-1 px-5"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 10,
          }}
        >
          <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
          {moviesLoading ? (
            <ActivityIndicator
              color="#0000ff"
              size="large"
              className="mt-10 self-center"
            />
          ) : moviesError ? (
            <Text className="text-white text-lg">
              Error {moviesError?.message}
            </Text>
          ) : (
            <View className="mt-5">
              <SearchBar
                onPress={() => router.push("/search")}
                fromHome={true}
                placeholder="Search for a movie"
              />
              <View className="mt-5">
                <Text className="text-white text-lg mb-3 font-bold">
                  Popular Movies
                </Text>
                <FlatList
                  data={movies}
                  renderItem={({ index, item }) => (
                    <MovieCard
                      showCounter={true}
                      index={index}
                      movie={item}
                    ></MovieCard>
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  className="mt-2 pb-32"
                  horizontal={true}
                  initialNumToRender={3}
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                />
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
