import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import HeaderGroup from "../components/Header/HeaderGroup";
import PhotoListItem from "../components/PhotoListItem";
import Typography from "../components/Typography";

const FavoriteImageListScreen = () => {
  const navigation = useNavigation();

  const favoritList = useSelector((state) => state.favorite.favoriteList);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <HeaderGroup>
          <Header.Icon
            iconName="chevron-back"
            onPress={() => navigation.goBack()}
          />
          <Header.Title title={"MyFavorite"} />
        </HeaderGroup>
      </Header>

      <FlatList
        style={{ flex: 1 }}
        data={favoritList}
        renderItem={({ item }) => {
          return <PhotoListItem url={item} />;
        }}
      />
    </View>
  );
};

export default FavoriteImageListScreen;
