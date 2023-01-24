/** @format */

import TextView from "@components/TextView/TextView";
import { DASHBOARD_SCREEN_KEY, SIGNUP_SCREEN_KEY } from "@navigation/Routes";
import { Colors } from "@resources/Colors";
import { CommonStyles } from "@resources/CommonStyles";
import { Strings } from "@resources/Strings";
import {
  FunctionReturnAnyWithParams,
  LoginScreenProps,
  ObjectOrArray,
} from "@resources/Types";
import {
  getPreferences,
  PREF_ALL_USER_CREDENTIALS,
} from "@utils/AsyncStorageHelper";
import { ResponsiveFontValue as RFValue } from "@utils/ResponsiveFonts";
import React, { useCallback, useRef, useState } from "react";
import {
  Alert,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const {
  flexOne,
  alignItemsCenter,
  justifyContentCenter,
  marginHorizontalSeven,
  marginTopFive,
  marginTopFour,
  marginTopOne,
  paddingHorizontalThree,
  paddingVerticalOne,
  borderRadiusThreeHalf,
  borderRadiusTwo,
  alignSelfCenter,
  textUnderline,
  flexDirectionRow,
  widthborderHairline,
  borderRadiusThree,
} = CommonStyles;

const {
  PASSWORD,
  LOGIN,
  EMAIL,
  NEED_AN_ACC,
  SIGN_UP_FIRST_CAP,
  EMAIL_PLACEHOLDER,
  PASS_PLACEHOLDER,
  LOGIN_SUCCESS,
  INVALID_EMAIL,
  INVALID_PASS,
  YAY,
  OK,
  INVALID_CREDENTIALS,
} = Strings;

const { white, primaryColor, primaryDisabledColor, errorColor } = Colors;

export type existingUserDataType = {
  email: string;
  mobileNo: string;
  password: string;
  id: number;
};

const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const existingUserData: ObjectOrArray = useRef<ObjectOrArray>([]);

  const clearErrorStates = () => {
    setEmailError("");
    setPasswordError("");
  };

  const clearValueStates = () => {
    setEmail("");
    setPassword("");
  };

  const { navigation } = props;

  const isDisabled = email === "" || password === "";

  const labelValItem: FunctionReturnAnyWithParams = useCallback(
    (
      label: string,
      value: string,
      setValue: FunctionReturnAnyWithParams,
      validDataTxt: string,
      errorMsg: string,
      secureTextEntry = false
    ): JSX.Element => {
      return (
        <View style={[justifyContentCenter, marginTopFour]}>
          <TextView description>{`${label}:`}</TextView>
          <View style={[marginTopOne, borderRadiusThree, widthborderHairline]}>
            <TextInput
              onFocus={clearErrorStates}
              onChangeText={(val) => {
                val = val.trim();
                setValue(val);
              }}
              placeholder={validDataTxt}
              autoCapitalize={"none"}
              style={[
                paddingHorizontalThree,
                paddingVerticalOne,
                borderRadiusTwo,
                { fontSize: RFValue(19) },
              ]}
              value={value}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {errorMsg && errorMsg !== "" && (
            <View>
              <TextView color={errorColor} note>
                {errorMsg}
              </TextView>
            </View>
          )}
        </View>
      );
    },
    []
  );

  const navigateTo: FunctionReturnAnyWithParams = useCallback(
    (key, params = undefined) => {
      setTimeout(() => {
        clearValueStates();
        clearErrorStates();
        navigation.navigate(key, params);
      }, 0);
    },
    [navigation]
  );

  const validate: FunctionReturnAnyWithParams = useCallback(() => {
    let isValid = true;
    // Email Validation
    if (!(email.includes("@") && email.includes("."))) {
      isValid = false;
      setEmailError(INVALID_EMAIL);
    }
    // Password Validation
    if (password.length < 6) {
      isValid = false;
      setPasswordError(INVALID_PASS);
    }

    return isValid;
  }, [email, password]);

  const getDataInPreference: FunctionReturnAnyWithParams =
    useCallback(async () => {
      const allUserData: string | null = await getPreferences(
        PREF_ALL_USER_CREDENTIALS
      );
      const parsedAllData =
        allUserData && allUserData !== undefined && allUserData !== ""
          ? JSON.parse(allUserData)
          : [];

      existingUserData.current = parsedAllData.find(
        (item: {
          email: string;
          mobileNo: string;
          password: string;
        }): boolean => item.email === email
      );

      // Check if data exists
      if (existingUserData?.current !== undefined) {
        // Check if data is correct
        if (existingUserData?.current?.password === password) {
          return true;
        }
      }
      return false;
    }, [email, password]);

  const onLoginPress: FunctionReturnAnyWithParams = useCallback(async () => {
    clearErrorStates();
    if (validate()) {
      if (await getDataInPreference()) {
        Alert.alert(YAY, LOGIN_SUCCESS, [
          {
            text: OK,
            onPress: () =>
              navigateTo(DASHBOARD_SCREEN_KEY, existingUserData.current),
          },
        ]);
      } else {
        setPasswordError(INVALID_CREDENTIALS);
      }
    }
  }, [getDataInPreference, navigateTo, validate]);

  return (
    <SafeAreaView style={[flexOne, marginHorizontalSeven]}>
      <TextView largeTitle style={marginTopFive}>
        {LOGIN}
      </TextView>
      {labelValItem(EMAIL, email, setEmail, EMAIL_PLACEHOLDER, emailError)}
      {labelValItem(
        PASSWORD,
        password,
        setPassword,
        PASS_PLACEHOLDER,
        passwordError,
        true
      )}
      <TouchableOpacity
        onPress={onLoginPress}
        disabled={isDisabled}
        style={[
          { backgroundColor: isDisabled ? primaryDisabledColor : primaryColor },
          alignItemsCenter,
          borderRadiusThreeHalf,
          paddingVerticalOne,
          marginTopFour,
          marginHorizontalSeven,
        ]}
      >
        <TextView color={white} title>
          {LOGIN}
        </TextView>
      </TouchableOpacity>
      <View style={[flexDirectionRow, marginTopOne, alignSelfCenter]}>
        <TextView>{NEED_AN_ACC}</TextView>
        <TouchableOpacity
          onPress={() => {
            navigateTo(SIGNUP_SCREEN_KEY);
          }}
        >
          <TextView
            medium
            style={textUnderline}
            color={primaryColor}
          >{` ${SIGN_UP_FIRST_CAP}`}</TextView>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
