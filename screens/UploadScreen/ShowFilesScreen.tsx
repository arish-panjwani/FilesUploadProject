/** @format */

import Header from "@components/Header/Header";
import TextView from "@components/TextView/TextView";
import { IMAGE_FULL_SCREEN_KEY } from "@navigation/Routes";
import { Colors } from "@resources/Colors";
import { CommonStyles } from "@resources/CommonStyles";
import { Strings } from "@resources/Strings";
import { UploadFilesProps } from "@resources/Types";
import { getPreferences, PREF_FILE_PATH_ARR } from "@utils/AsyncStorageHelper";
import { heightPercentageToDP as hp } from "@utils/ResponsiveScreen";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  Linking,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";

// import * as OpenAnything from 'react-native-openanything';

const { errorColor } = Colors;

const {
  flexOne,
  marginHorizontalTwo,
  marginHorizontalSeven,
  textAlignVerticalCenter,
  paddingVerticalOne,
  marginVerticalOne,
  marginTopThree,
  textAlignCenter,
  borderWidthPointTwo,
  alignItemsCenter,
  justifyContentCenter,
  marginHorizontalOne,
  alignSelfCenter,
  paddingHorizontalOne,
} = CommonStyles;

const { MY_FILES, OOPS, NO_DATA_FOUND, PDF } = Strings;

const ShowFilesScreen = (props: UploadFilesProps) => {
  const { navigation } = props;

  const imageArr: any = useRef([]);
  const [refresh, setRefresh] = useState(false);

  const getPrefVal = useCallback(async () => {
    const ImagePathList = await getPreferences(PREF_FILE_PATH_ARR);
    imageArr.current = JSON.parse(ImagePathList!);
    setRefresh(!refresh);
  }, []);

  useEffect(() => {
    getPrefVal();
  }, [getPrefVal]);

  const onPDFItemClick = useCallback((path: any) => {
    Linking.openURL(String(path)).catch((err) => {
      console.log(err);
    });
  }, []);

  const renderItemFile = useCallback(
    (item: any, index: string | number) => {
      const fileTypePdf = item?.filename.split(".")[1] === PDF;
      const fileName = item?.filename.split(".")[0];

      return (
        <TouchableOpacity
          key={String(index)}
          style={[
            marginHorizontalOne,
            alignItemsCenter,
            borderWidthPointTwo,
            marginVerticalOne,
          ]}
          onPress={
            fileTypePdf
              ? () => {
                  onPDFItemClick(item.path);
                }
              : () =>
                  navigation.navigate(IMAGE_FULL_SCREEN_KEY, {
                    imageName: fileName,
                    imagePath: item.path,
                  })
          }
        >
          {fileTypePdf ? (
            <>
              <View
                style={[
                  { height: hp(16), width: hp(13) },
                  flexOne,
                  justifyContentCenter,
                ]}
              >
                <TextView
                  body
                  medium
                  style={[
                    alignItemsCenter,
                    alignSelfCenter,
                    flexOne,
                    textAlignCenter,
                    textAlignVerticalCenter,
                    { height: hp(13), width: hp(13) },
                  ]}
                  color={errorColor}
                >
                  {PDF.toUpperCase()}
                </TextView>
                <TextView style={alignSelfCenter} small>
                  {fileName}
                </TextView>
              </View>
            </>
          ) : (
            <View
              style={[
                {
                  height: Platform.OS === "ios" ? hp(16) : undefined,
                  width: hp(13),
                },
                flexOne,
                justifyContentCenter,
              ]}
            >
              <Image
                source={{
                  uri: item.path,
                  width: hp(13),
                  height: hp(13),
                }}
              />
              <TextView style={alignSelfCenter} small>
                {fileName}
              </TextView>
            </View>
          )}
        </TouchableOpacity>
      );
    },
    [navigation, onPDFItemClick]
  );

  const renderNoData = useCallback(() => {
    return (
      <View style={[alignItemsCenter, flexOne, justifyContentCenter]}>
        <TextView subHeading medium style={textAlignCenter}>
          {OOPS}
        </TextView>
        <TextView largeTitle style={[textAlignCenter, marginTopThree]}>
          {NO_DATA_FOUND}
        </TextView>
      </View>
    );
  }, []);

  const renderFileList = useCallback(() => {
    return (
      <View style={[flexOne, paddingVerticalOne, alignItemsCenter]}>
        <FlatList
          data={imageArr.current}
          renderItem={({ item, index }) => renderItemFile(item, index)}
          numColumns={3}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    );
  }, [renderItemFile]);

  return (
    <SafeAreaView style={[marginHorizontalTwo, flexOne]}>
      <View style={flexOne}>
        <Header navigation={navigation} title={MY_FILES} />
        {imageArr.current?.length > 0 ? renderFileList() : renderNoData()}
      </View>
    </SafeAreaView>
  );
};

export default ShowFilesScreen;
