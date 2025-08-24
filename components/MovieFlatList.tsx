import { FlatList, View } from "react-native";
import MovieCard from "./MovieCard";

interface props {
  movies: Movie[];
  initialNumToRender?: number;
  seperatorWidth?: number;
  horizontal?: boolean;
}

const MovieFlatList = ({
  movies,
  initialNumToRender = 3,
  seperatorWidth = 15,
  horizontal = true,
}: props) => {
  return horizontal ? (
    <FlatList
      data={movies}
      renderItem={({ index, item }) => (
        <MovieCard
          showCounter={true}
          index={index}
          movie={item}
          showBlurRating={true}
          horizontal={true}
        ></MovieCard>
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      initialNumToRender={initialNumToRender}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: seperatorWidth }} />}
    />
  ) : (
    <FlatList
      data={movies}
      renderItem={({ index, item }) => (
        <MovieCard
          showNormalRating={true}
          index={index}
          movie={item}
          horizontal={false}
        ></MovieCard>
      )}
      keyExtractor={(item) => item.id.toString()}
      className="mt-2 "
      initialNumToRender={initialNumToRender}
      showsHorizontalScrollIndicator={false}
      numColumns={3}
      scrollEnabled={false}
      columnWrapperClassName="gap-x-6  mb-6"
    />
  );
};

export default MovieFlatList;
