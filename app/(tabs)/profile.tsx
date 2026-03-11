import { useFavorites } from "@/context/FavoritesContext";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MenuItem = ({
  icon,
  label,
}: {
  icon: any;
  label: string;
}) => (
  <TouchableOpacity className="flex-row items-center px-5 py-4 border-b border-dark-100">
    <View className="size-8 rounded-full bg-dark-100 items-center justify-center mr-4">
      <Image source={icon} className="size-4" tintColor="#AB8BFF" />
    </View>
    <Text className="text-white text-base flex-1">{label}</Text>
    <Image source={icons.arrow} className="size-4" tintColor="#A8B5DB" />
  </TouchableOpacity>
);

const Profile = () => {
  const { favorites } = useFavorites();

  return (
    <SafeAreaView className="bg-primary flex-1">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="items-center pt-10 pb-8 px-5">
          <View
            className="size-24 rounded-full items-center justify-center mb-4 border-2"
            style={{ borderColor: "#AB8BFF", backgroundColor: "#221f3d" }}
          >
            <Image source={icons.person} className="size-12" tintColor="#AB8BFF" />
          </View>
          <Text className="text-white text-2xl font-bold">Alex Johnson</Text>
          <Text className="text-light-200 text-sm mt-1">@alexjohnson</Text>
          <Text className="text-light-300 text-xs mt-2 text-center">
            Movie enthusiast & cinephile. Exploring the world one film at a time.
          </Text>
        </View>

        <View className="flex-row justify-around mx-5 mb-6 rounded-2xl py-5" style={{ backgroundColor: "#221f3d" }}>
          <View className="items-center">
            <Text className="text-accent text-2xl font-bold">{favorites.length}</Text>
            <Text className="text-light-200 text-xs mt-1">Saved</Text>
          </View>
          <View className="w-px bg-dark-100" />
          <View className="items-center">
            <Text className="text-accent text-2xl font-bold">128</Text>
            <Text className="text-light-200 text-xs mt-1">Watched</Text>
          </View>
          <View className="w-px bg-dark-100" />
          <View className="items-center">
            <Text className="text-accent text-2xl font-bold">47</Text>
            <Text className="text-light-200 text-xs mt-1">Rated</Text>
          </View>
        </View>

        <View className="mx-5 rounded-2xl overflow-hidden mb-4" style={{ backgroundColor: "#0F0D23" }}>
          <Text className="text-light-300 text-xs font-semibold px-5 pt-4 pb-2 uppercase tracking-widest">
            Account
          </Text>
          <MenuItem icon={icons.person} label="Edit Profile" />
          <MenuItem icon={icons.search} label="Preferences" />
        </View>

        <View className="mx-5 rounded-2xl overflow-hidden mb-4" style={{ backgroundColor: "#0F0D23" }}>
          <Text className="text-light-300 text-xs font-semibold px-5 pt-4 pb-2 uppercase tracking-widest">
            General
          </Text>
          <MenuItem icon={icons.save} label="Download List" />
          <MenuItem icon={icons.star} label="Rate the App" />
          <MenuItem icon={icons.home} label="About" />
        </View>

        <TouchableOpacity
          className="mx-5 rounded-2xl py-4 items-center mb-4"
          style={{ backgroundColor: "#221f3d" }}
        >
          <Text className="text-red-400 font-semibold text-base">Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
