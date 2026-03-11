import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import * as Device from "expo-device";
import { Tabs } from "expo-router";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { useEffect, useState } from "react";
import { Image, ImageBackground, Platform, Text, View } from "react-native";
function TabIcon({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
}

export default function TabsLayout() {
  const [deviceVersion, setDeviceVersion] = useState<string>("");
  const [deviceType, setDeviceType] = useState<string>("");

  useEffect(() => {
    setDeviceType(Platform.OS);
    setDeviceVersion(Device.osVersion || "");
  }, []);

  const renderTabs = () => {
    if (deviceType === "ios" && parseFloat(deviceVersion) >= 16) {
      return (
        <NativeTabs >
          <NativeTabs.Trigger name="index" hidden={false}>
            <Label>Home</Label>
            <Icon sf="house.fill" drawable="custom_android_drawable" />
          </NativeTabs.Trigger>
          <NativeTabs.Trigger name="search">
            <Icon sf="magnifyingglass" drawable="custom_search_drawable" />
            <Label>Search</Label>
          </NativeTabs.Trigger>
          <NativeTabs.Trigger name="saved">
            <Icon sf="bookmark.fill" drawable="custom_saved_drawable" />
            <Label>Saved</Label>
          </NativeTabs.Trigger>
          <NativeTabs.Trigger name="profile">
            <Icon sf="person.fill" drawable="custom_profile_drawable" />
            <Label>Profile</Label>
          </NativeTabs.Trigger>
        </NativeTabs>
      );
    } else {
      return (
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
              width: "100%",
              height: 53,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            },
            tabBarStyle: {
              backgroundColor: "#0F0D23",
              borderRadius: 50,
              marginHorizontal: 20,
              marginBottom: 36,
              height: 53,
              position: "absolute",
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "#0F0D23",
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "index",
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={icons.home} title="Home" />
              ),
            }}
          />
          <Tabs.Screen
            name="search"
            options={{
              title: "Search",
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={icons.search} title="Search" />
              ),
            }}
          />
          <Tabs.Screen
            name="saved"
            options={{
              title: "Saved",
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={icons.save} title="Save" />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon
                  focused={focused}
                  icon={icons.person}
                  title="Profile"
                />
              ),
            }}
          />
        </Tabs>
      );
    }
  };

  return renderTabs();
}
