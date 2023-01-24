/** @format */

import Header from "@components/Header/Header";
import TextView from "@components/TextView/TextView";
import { SHOW_FILES_SCREEN_KEY } from "@navigation/Routes";
import { Colors } from "@resources/Colors";
import { CommonStyles } from "@resources/CommonStyles";
import { Strings } from "@resources/Strings";
import {
  FunctionReturnAnyWithParams,
  UploadFilesProps,
} from "@resources/Types";
import {
  getPreferences,
  PREF_FILE_PATH_ARR,
  setPreferences,
} from "@utils/AsyncStorageHelper";
import { heightPercentageToDP as hp } from "@utils/ResponsiveScreen";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Alert,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import DocumentPicker from "react-native-document-picker";
import ImagePicker from "react-native-image-crop-picker";

const {
  flexOne,
  marginHorizontalTwo,
  borderRadiusThreeHalf,
  textAlignCenter,
  borderWidthOne,
  alignItemsCenter,
  justifyContentCenter,
  paddingHorizontalTwo,
  justifyContentSpaceEvenly,
} = CommonStyles;

const {
  UPLOAD_FILES,
  UPLOAD_IMAGE_FILES,
  UPLOAD_PDF_FILES,
  CAMERA_OR_GALLERY,
  CAMERA,
  GALLERY,
  UPLOAD_IMAGE,
  OOPS,
  TRY_ON_DEVICE,
} = Strings;

const { primaryColor } = Colors;

const UploadFilesScreen = (props: UploadFilesProps) => {
  const { navigation } = props;

  const fileArr: { current: any } = useRef([]);
  const isListDataPresent: { current: boolean } = useRef(false);
  const [refresh, setRefresh] = useState(false);

  const getPrefVal = useCallback(async () => {
    const filePathList = await getPreferences(PREF_FILE_PATH_ARR);
    fileArr.current = JSON.parse(filePathList!);
    isListDataPresent.current =
      Array.isArray(fileArr.current) && fileArr.current.length > 0;

    setRefresh(!refresh);
  }, []);

  useEffect(() => {
    getPrefVal();
  }, []);

  const navigateToShowFiles = useCallback(() => {
    setTimeout(() => {
      navigation.navigate(SHOW_FILES_SCREEN_KEY);
    }, 100);
  }, [navigation]);

  const onUploadFromGallery = useCallback(
    (imageList: any) => {
      ImagePicker.openPicker({
        multiple: true,
        compressImageQuality: 0.1,
      })
        .then((images) => {
          images.forEach((item) => {
            let fileName: any = "";
            if (Platform.OS === "ios") {
              fileName = item.filename;
            } else {
              fileName = item.path.split("/").slice(-1)[0];
            }
            const newObj = { filename: fileName, path: item.path };
            imageList.push(newObj);
          });
          setPreferences(PREF_FILE_PATH_ARR, JSON.stringify(imageList));
          if (!isListDataPresent.current) {
            getPrefVal();
          }
          navigateToShowFiles();
        })
        .catch((e) => {});
    },
    [navigateToShowFiles]
  );

  const onUploadFromCamera = useCallback(
    async (imageList: any) => {
      ImagePicker.openCamera({
        width: 300,
        height: Platform.OS === "ios" ? 400 : 300,
      })
        .then((camImage) => {
          let fileName: string | undefined = "";
          if (Platform.OS === "ios") {
            fileName = camImage.filename;
          } else {
            fileName = camImage.path.split("/").slice(-1)[0];
          }
          const newObj = { filename: fileName, path: camImage.path };
          imageList.push(newObj);
          setPreferences(PREF_FILE_PATH_ARR, JSON.stringify(imageList));
          if (!isListDataPresent.current) {
            getPrefVal();
          }
          navigateToShowFiles();
        })
        .catch((e) => {});
    },
    [navigateToShowFiles]
  );

  const uploadImagePress = useCallback(async () => {
    const existingList = isListDataPresent.current ? fileArr.current : [];
    Alert.alert(UPLOAD_IMAGE, CAMERA_OR_GALLERY, [
      {
        text: CAMERA,
        onPress: () =>
          __DEV__ && Platform.OS === "ios"
            ? Alert.alert(OOPS, TRY_ON_DEVICE)
            : onUploadFromCamera(existingList),
      },
      {
        text: GALLERY,
        onPress: () => onUploadFromGallery(existingList),
      },
    ]);
  }, [onUploadFromCamera, onUploadFromGallery]);

  const uploadPDFPress = useCallback(async () => {
    const existingList = isListDataPresent.current ? fileArr.current : [];
    const res = await DocumentPicker.pickMultiple({
      type: [DocumentPicker.types.pdf],
    });
    res.forEach((item) => {
      const { name, uri } = item;
      const newObj = { filename: name, path: uri };
      existingList.push(newObj);
    });
    setPreferences(PREF_FILE_PATH_ARR, JSON.stringify(existingList));
    if (!isListDataPresent.current) {
      getPrefVal();
    }
    navigateToShowFiles();
  }, [navigateToShowFiles]);

  const renderUploadFilesView = useCallback(
    (textBody: string, onPress: FunctionReturnAnyWithParams) => {
      return (
        <View
          style={[
            borderRadiusThreeHalf,
            borderWidthOne,
            {
              height: hp(20),
              width: hp(20),
              borderColor: primaryColor,
            },
          ]}
        >
          <TouchableOpacity
            onPress={onPress}
            style={[[justifyContentCenter, flexOne]]}
          >
            <TextView
              title
              medium
              color={primaryColor}
              style={[textAlignCenter, paddingHorizontalTwo]}
            >
              {textBody}
            </TextView>
          </TouchableOpacity>
        </View>
      );
    },
    []
  );

  return (
    <SafeAreaView style={[marginHorizontalTwo, flexOne]}>
      <Header navigation={navigation} title={UPLOAD_FILES} />
      <View style={[alignItemsCenter, flexOne, justifyContentSpaceEvenly]}>
        {renderUploadFilesView(UPLOAD_IMAGE_FILES, uploadImagePress)}
        {renderUploadFilesView(UPLOAD_PDF_FILES, uploadPDFPress)}
      </View>
    </SafeAreaView>
  );
};

export default UploadFilesScreen;
