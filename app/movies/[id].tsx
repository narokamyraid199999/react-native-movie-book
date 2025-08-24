import MovieDetailsBody from "@/components/MovieDetailsBody";
import MovieDetailsImage from "@/components/MovieDetailsImage";
import { fetchMovieDetails } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const {
    data: movieDetails,
    loading: movieLoading,
    error: movieError,
  } = useFetch(() => fetchMovieDetails(id.toString()));

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 ">
        {movieLoading ? (
          <ActivityIndicator
            size="large"
            className="flex-1 self-center"
            color="#AB8BFF"
          ></ActivityIndicator>
        ) : movieError ? (
          <Text className="text-white text-lg mt-2">
            Faild to load movie details {movieError?.message}
          </Text>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerClassName="pb-5"
            className="flex-1"
          >
            {/* movie backdrop section */}
            <MovieDetailsImage movieDetails={movieDetails as MovieDetails} />

            {/* <View>
              <Image
                source={{
                  uri: movieDetails?.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`
                    : "https://placehold.co/600x400/1a1a1a/ffffff.png",
                }}
                style={{
                  width: "100%",
                  height: 447,
                  borderRadius: 4,
                }}
              />
            </View> */}

            {/* movie details section */}
            <View className="flex-1">
              <MovieDetailsBody></MovieDetailsBody>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MovieDetails;
