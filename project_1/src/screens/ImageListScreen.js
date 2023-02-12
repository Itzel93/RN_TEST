import React from "react";
import { FlatList, Text, View } from "react-native";
import Typography from "../components/Typography";
import Header from "../components/Header/Header";
import HeaderGroup from "../components/Header/HeaderGroup";
import { IMAGE_LIST } from "../constants";
import PhotoListItem from "../components/PhotoListItem";

const ImageListScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <HeaderGroup>
          <Header.Title title="IMAGE LIST" />
        </HeaderGroup>
      </Header>
      <FlatList
        style={{ flex: 1 }}
        data={IMAGE_LIST}
        renderItem={({ item }) => {
          return <PhotoListItem url={item} />;
        }}
        // renderItem={({ item }) => {
        //   return <PhotoListItem url={item} />;
        // }}
      />
    </View>
  );
};

export default ImageListScreen;
