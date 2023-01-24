import Header from "@components/Header/Header";
import { CommonStyles } from "@resources/CommonStyles";
import { UploadFilesProps } from "@resources/Types";
import { heightPercentageToDP as hp } from "@utils/ResponsiveScreen";
import React from "react";
import { Image, SafeAreaView, View } from "react-native";

const { flexOne, marginHorizontalOne, alignItemsCenter } = CommonStyles;

const ImageFullScreen = (props: UploadFilesProps) => {
  const { navigation, route } = props || {};
  const { params } = route || {};
  const { imagePath, imageName } = params || {};

  return (
    <SafeAreaView style={[marginHorizontalOne, flexOne]}>
      <Header navigation={navigation} title={imageName} />
      <View style={alignItemsCenter}>
        <Image
          source={{
            uri: imagePath,
            width: hp(45),
            height: hp(45),
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ImageFullScreen;
