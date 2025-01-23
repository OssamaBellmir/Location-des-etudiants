import * as React from "react";
import { View, Text } from "react-native";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

function HomeScreenPere() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center  bg-background">
      <Text className="text-2xl font-bold mt-12">Home Pere</Text>
      <DashBotNavigation />
    </View>
  );
}

export default HomeScreenPere;
