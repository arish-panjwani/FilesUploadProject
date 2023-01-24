import TextView from "@components/TextView/TextView";
import {
  LOGIN_SCREEN_KEY,
  PROFILE_DETAILS_KEY,
  SHOW_FILES_SCREEN_KEY,
  UPLOAD_FILES_SCREEN_KEY,
} from "@navigation/Routes";
import { Colors } from "@resources/Colors";
import { CommonStyles } from "@resources/CommonStyles";
import { Strings } from "@resources/Strings";
import { DashboardProps, FunctionReturnAnyWithParams } from "@resources/Types";
import { PREF_FILE_PATH_ARR, setPreferences } from "@utils/AsyncStorageHelper";
import React, { useCallback } from "react";
import { Alert, SafeAreaView, TouchableOpacity, View } from "react-native";

const {
  flexOne,
  marginHorizontalTen,
  marginTopFour,
  paddingVerticalOne,
  borderRadiusThreeHalf,
  alignSelfCenter,
  marginTopThree,
  marginBottomSix,
  textAlignCenter,
  alignItemsCenter,
} = CommonStyles;

const {
  DASHBOARD,
  LOGOUT,
  LOGIN_SUCCESS,
  WHAT_TO_DO,
  SHOW_PROFILE_DETAILS,
  UPLOAD_NEW_FILES,
  SHOW_MY_FILES,
  DELETE_ALL_FILES,
  DELETE_ALL_FILES_CONFIRM,
  YES,
  NO,
  DELETE_SUCCESSFUL,
} = Strings;

const { white, textColor, primaryColor, errorColor } = Colors;

const Dashboard = (props: DashboardProps) => {
  const { navigation, route } = props;
  const { params } = route;

  const onLogoutPress: FunctionReturnAnyWithParams = useCallback(() => {
    navigation.navigate(LOGIN_SCREEN_KEY);
  }, [navigation]);

  const navigateTo = useCallback((key: any, param: any) => {
    navigation.navigate(key, param);
  }, []);

  const onDeleteAllPress = useCallback(() => {
    Alert.alert(DELETE_ALL_FILES_CONFIRM, "", [
      {
        text: YES,
        onPress: () => {
          setPreferences(PREF_FILE_PATH_ARR, JSON.stringify([]));
          Alert.alert(DELETE_SUCCESSFUL);
        },
      },
      {
        text: NO,
      },
    ]);
  }, []);

  const commonButtonView = useCallback(
    (
      title: string,
      key?: string,
      param?: object,
      onPress?: FunctionReturnAnyWithParams,
      bgColor?: string
    ) => {
      const isNavigateButton = key !== undefined;
      return (
        <TouchableOpacity
          onPress={() =>
            isNavigateButton ? navigateTo(key, param) : onDeleteAllPress()
          }
          style={[
            { backgroundColor: bgColor || primaryColor },
            alignItemsCenter,
            borderRadiusThreeHalf,
            marginHorizontalTen,
            paddingVerticalOne,
            marginTopFour,
          ]}
        >
          <TextView color={white} title>
            {title}
          </TextView>
        </TouchableOpacity>
      );
    },
    [navigation]
  );

  const featuresView = useCallback(() => {
    return (
      <View style={marginTopFour}>
        <TextView
          color={textColor}
          body
          style={[alignSelfCenter, textAlignCenter, marginTopFour]}
        >
          {LOGIN_SUCCESS}
        </TextView>
        <TextView
          title
          medium
          style={[alignSelfCenter, textAlignCenter, marginTopFour]}
        >
          {WHAT_TO_DO}
        </TextView>
        {commonButtonView(SHOW_PROFILE_DETAILS, PROFILE_DETAILS_KEY, params)}
        {commonButtonView(SHOW_MY_FILES, SHOW_FILES_SCREEN_KEY)}
        {commonButtonView(UPLOAD_NEW_FILES, UPLOAD_FILES_SCREEN_KEY)}
        {commonButtonView(
          DELETE_ALL_FILES,
          undefined,
          undefined,
          onDeleteAllPress,
          errorColor
        )}
      </View>
    );
  }, [commonButtonView, params]);

  return (
    <>
      <SafeAreaView style={[flexOne]}>
        <TextView medium subHeading style={[marginTopThree, alignSelfCenter]}>
          {DASHBOARD}
        </TextView>
        {featuresView()}
      </SafeAreaView>
      <TouchableOpacity onPress={onLogoutPress}>
        <TextView
          color={errorColor}
          title
          bold
          style={[marginBottomSix, alignSelfCenter]}
        >
          {LOGOUT}
        </TextView>
      </TouchableOpacity>
    </>
  );
};

export default Dashboard;
