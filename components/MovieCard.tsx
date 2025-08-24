import { icons } from "@/constants/icons";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function MovieCard({
  movie,
  index,
  showCounter,
  showBlurRating,
}: {
  movie: Movie;
  index: number;
  showCounter?: boolean;
  showBlurRating?: boolean;
}) {
  return (
    <Link href={`/movies/${movie.id}`} asChild>
      <TouchableOpacity className="w-[116px]">
        <View className="relative">
          <Image
            source={{
              uri: movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://placehold.co/600x400/1a1a1a/ffffff.png",
            }}
            style={{
              width: "100%",
              height: 167,
              borderRadius: 8,
            }}
            contentFit="cover"
          ></Image>
          {showCounter && (
            <Text className=" text-white absolute -bottom-1.5 -left-1.5 text-5xl font-bold">
              {index + 1}
            </Text>
          )}
          <View className="absolute top-2 right-2 rounded-md">
            <BlurView
              intensity={80}
              tint="dark"
              className="flex-row items-center justify-start gap-x-1   p-2"
            >
              <Image source={icons.star} style={{ width: 16, height: 16 }} />
              <Text className="text-white text-xs font-bold">
                {Math.round(movie.vote_average / 2)}
              </Text>
            </BlurView>
          </View>
        </View>
        <Text className="text-white text-sm font-bold mt-2" numberOfLines={1}>
          {movie.title}
        </Text>

        {showBlurRating && (
          <View className="flex-row items-center justify-start gap-x-1">
            <Image source={icons.star} style={{ width: 16, height: 16 }} />
            <Text className="text-white text-xs font-bold">
              {Math.round(movie.vote_average / 2)}
            </Text>
          </View>
        )}
        <View className=" flex-row items-center justify-between mt-1">
          <Text className="text-light-300  text-xs font-bold">
            {movie.release_date?.split("-")[0]}
          </Text>
          <Text className="text-light-300  text-xs font-medium uppercase">
            movie
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
