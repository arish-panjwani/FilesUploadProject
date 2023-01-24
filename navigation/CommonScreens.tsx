/** @format */

import {
  DASHBOARD_SCREEN_KEY,
  IMAGE_FULL_SCREEN_KEY,
  PROFILE_DETAILS_KEY,
  SHOW_FILES_SCREEN_KEY,
  SIGNUP_SCREEN_KEY,
  UPLOAD_FILES_SCREEN_KEY,
} from "@navigation/Routes";
import Dashboard from "@screens/Dashboard/Dashboard";
import ProfileDetails from "@screens/ProfileDetails/ProfileDetails";
import SignupScreen from "@screens/SignUp/SignupScreen";
import ImageFullScreen from "@screens/UploadScreen/ImageFullScreen";
import ShowFilesScreen from "@screens/UploadScreen/ShowFilesScreen";
import UploadFilesScreen from "@screens/UploadScreen/UploadFilesScreen";
import React from "react";

const CommonScreensMap: any = {
  [SIGNUP_SCREEN_KEY]: SignupScreen,
  [DASHBOARD_SCREEN_KEY]: Dashboard,
  [PROFILE_DETAILS_KEY]: ProfileDetails,
  [SHOW_FILES_SCREEN_KEY]: ShowFilesScreen,
  [UPLOAD_FILES_SCREEN_KEY]: UploadFilesScreen,
  [IMAGE_FULL_SCREEN_KEY]: ImageFullScreen,
};

export function renderCommonScreens(Stack: any) {
  return Object.keys(CommonScreensMap)?.map((screenKey) => {
    const screen = CommonScreensMap[screenKey];
    return (
      <Stack.Screen
        key={screenKey}
        name={screenKey}
        component={screen}
        options={{
          headerShown: false,
        }}
      />
    );
  });
}
