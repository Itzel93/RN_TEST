import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import Button from "../components/Button";
import Header from "../components/Header/Header";
import HeaderGroup from "../components/Header/HeaderGroup";
import Icon from "../components/Icons";
import RemoteImage from "../components/RemoteImage";
import Spacer from "../components/Spacer";
import Typography from "../components/Typography";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { useDispatch, useSelector } from "react-redux";
import { onClickFavorite } from "../action/favorite";

const ImageDetailScreen = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { width } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();

  const [downloading, setDownloading] = useState(false);

  const favoriteList = useSelector((state) => state.favorite.favoriteList);
  const clicked =
    favoriteList.filter((item) => item === route.params.url).length > 0;

  const dispatch = useDispatch();

  const onPressFavorite = () => {
    dispatch(onClickFavorite(route.params.url));
  };

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const onPressDownload = useCallback(async () => {
    setDownloading(true);
    const downloadResumable = FileSystem.createDownloadResumable(
      route.params.url,
      `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`
    );

    try {
      const { uri } = await downloadResumable.downloadAsync(); //다운받은 이미지 링크

      const permissionResult = await MediaLibrary.getPermissionsAsync(true); //갤러리에 접근할 수 있는지 권한 확인 denied = 거부, undetermined = 묻지 않은 상태, granted = 승인
      console.log("permissionResult", permissionResult);

      if (permissionResult.status === "denied") {
        //거부한 상태면 아무것도 해줄 수 없음
        setDownloading(false);
        return;
      }

      if (permissionResult.status === "undetermined") {
        //물어보지 않은 상태면
        const requestResult = await MediaLibrary.requestPermissionsAsync(); //묻고

        if (requestResult.status === "denied") {
          //물어봤는데 거부했으면 다시 아무것도 해줄 수 없음
          setDownloading(false);
          return;
        }
      }

      const uriString = uri.toString();
      const asset = await MediaLibrary.createAssetAsync(uriString); //저장할 수 있는 상태로 만듬
      const album = await MediaLibrary.createAlbumAsync(
        "MyFirstImage",
        asset,
        true
      );
      setDownloading(false);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <HeaderGroup>
          <Header.Icon iconName="chevron-back" onPress={onPressBack} />
          <Header.Title title="Image detail" />
        </HeaderGroup>
        <Header.Icon
          onPress={onPressFavorite}
          iconName="heart"
          color={clicked ? "tomato" : "lightgray"}
        />
      </Header>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <RemoteImage
          url={route.params.url}
          width={width}
          height={width * 1.5}
        />
      </View>

      <Button onPress={onPressDownload}>
        <View
          style={{
            width: width,
            backgroundColor: "#000",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: bottom,
          }}
        >
          {downloading ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 57,
              }}
            >
              <ActivityIndicator />
            </View>
          ) : (
            <View
              style={{ flexDirection: "row", height: 57, alignItems: "center" }}
            >
              <Icon name="download-outline" size={25} color="#fff" />
              <Typography fontSize={15} color="#fff">
                다운로드
              </Typography>
            </View>
          )}
        </View>
      </Button>
    </View>
  );
};

export default ImageDetailScreen;
