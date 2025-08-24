import { Image } from "expo-image";
import { View } from "react-native";

const MovieDetailsImage = ({
  movieDetails,
}: {
  movieDetails: MovieDetails;
}) => {
  return (
    <View>
      <Image
        source={{
          uri: movieDetails?.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`
            : "https://placehold.co/600x400/1a1a1a/ffffff.png",
        }}
        style={{
          width: "100%",
          height: 320,
          borderRadius: 4,
        }}
      />
    </View>
  );
};

export default MovieDetailsImage;
