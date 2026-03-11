import MovieCard from "@/components/MovieCard";
import { useFavorites } from "@/context/FavoritesContext";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Saved = () => {
  const { favorites } = useFavorites();

  return (
    <SafeAreaView className="bg-primary flex-1">
      <Image source={images.bg} className="absolute w-full z-0" />
      <View className="flex-1 px-5">
        <View className="flex-row items-center justify-between mt-4 mb-2">
          <Text className="text-white text-2xl font-bold">Saved</Text>
          <Text className="text-light-200 text-sm">{favorites.length} movies</Text>
        </View>

        {favorites.length === 0 ? (
          <View className="flex-1 justify-center items-center gap-5">
            <Image source={icons.save} className="size-14" tintColor="#A8B5DB" />
            <Text className="text-light-200 text-base text-center">
              No saved movies yet.{"\n"}Tap the bookmark on any movie to save it.
            </Text>
          </View>
        ) : (
          <FlatList
            data={favorites}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <MovieCard
                id={item.id}
                title={item.title}
                poster_path={item.poster_path ?? ""}
                vote_average={item.vote_average}
                release_date={item.release_date}
                adult={item.adult}
                backdrop_path={item.backdrop_path ?? ""}
                genre_ids={[]}
                original_language={item.original_language}
                original_title={item.original_title}
                overview={item.overview ?? ""}
                popularity={item.popularity}
                video={item.video}
                vote_count={item.vote_count}
              />
            )}
            columnWrapperStyle={{
              justifyContent: "flex-start",
              gap: 16,
              marginVertical: 16,
            }}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Saved;
