import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchPopularMovies } from "@/services/api";
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
export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchPopularMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mx-auto" />

        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text>Error: {moviesError.message}</Text>
        ) : (
          <View className="flex01 mt-5">
            <SearchBar
              value=""
              onChangeText={() => {}}
              onPress={() => router.push("/search")}
              placeholder="Search movies and TV shows"
            />
            <>
              <FlatList
                data={movies?.results}
                numColumns={3}
                className="mt-2 mb-4 pb-32"
                scrollEnabled={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <MovieCard {...item} index={index} />
                )}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 16,
                  marginVertical: 16,
                }}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
