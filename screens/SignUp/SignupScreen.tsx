/** @format */

import TextView from "@components/TextView/TextView";
import { LOGIN_SCREEN_KEY } from "@navigation/Routes";
import { Colors } from "@resources/Colors";
import { CommonStyles } from "@resources/CommonStyles";
import { Strings } from "@resources/Strings";
import {
  FunctionReturnAnyWithParams,
  SignupScreenProps,
} from "@resources/Types";
import {
  getPreferences,
  PREF_ALL_USER_CREDENTIALS,
  setPreferences,
} from "@utils/AsyncStorageHelper";
import { ResponsiveFontValue as RFValue } from "@utils/ResponsiveFonts";
import React, { useCallback, useState } from "react";
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
  flexDirectionRow,
  textUnderline,
  widthborderHairline,
  borderRadiusThree,
  borderWidthPointFive,
} = CommonStyles;

const {
  PASSWORD,
  EMAIL,
  MOBILE_NUMBER,
  SIGN_UP,
  ALREADY_A_USER,
  LOG_IN_FIRST_CAP,
  VALID_EMAIL,
  VALID_MOBILE,
  VALID_PASS,
  INVALID_EMAIL,
  INVALID_MOBILE_NUMBER,
  INVALID_PASS,
  YAY,
  ACCOUNT_OPEN_SUCCESS,
  OK,
} = Strings;

const { white, primaryColor, errorColor, primaryDisabledColor } = Colors;

const SignupScreen = (props: SignupScreenProps) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [mobileNoError, setMobileNoError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const clearErrorStates = useCallback(() => {
    setEmailError("");
    setMobileNoError("");
    setPasswordError("");
  }, []);

  const { navigation } = props;

  const isDisabled = email === "" || mobileNo === "" || password === "";

  const labelValItem: FunctionReturnAnyWithParams = useCallback(
    (
      label: string,
      value: string,
      setValue: FunctionReturnAnyWithParams,
      validDataTxt: string,
      errorMsg: string,
      secureTextEntry = false
    ): JSX.Element => {
      const isError = errorMsg !== "";
      const errorStyle = isError
        ? [{ borderColor: errorColor }, borderWidthPointFive]
        : undefined;
      return (
        <View style={[justifyContentCenter, marginTopFour]}>
          <TextView description>{`${label}:`}</TextView>
          <View
            style={[
              errorStyle,
              marginTopOne,
              widthborderHairline,
              borderRadiusThree,
            ]}
          >
            <TextInput
              onFocus={clearErrorStates}
              onChangeText={(val) => {
                val = val.trim();
                if (label !== MOBILE_NUMBER || !isNaN(Number(val))) {
                  setValue(val);
                }
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
    [clearErrorStates]
  );

  const setDataInPreference: FunctionReturnAnyWithParams =
    useCallback(async () => {
      let allUserData: any = await getPreferences(PREF_ALL_USER_CREDENTIALS);
      if (allUserData === null || allUserData === undefined) {
        allUserData = JSON.stringify([]);
      }
      const parsedAllData =
        allUserData && allUserData !== undefined && allUserData !== ""
          ? JSON.parse(allUserData)
          : [];
      let newUserData: {
        email: string;
        mobileNo: string;
        password: string;
        id?: string | number;
      } = { email, mobileNo, password };
      if (JSON.parse(allUserData)?.length >= 1) {
        newUserData.id = parsedAllData?.length;
      } else {
        newUserData.id = 0;
      }
      parsedAllData.push(newUserData);

      setPreferences(PREF_ALL_USER_CREDENTIALS, JSON.stringify(parsedAllData));
    }, [email, mobileNo, password]);

  const navigateToLogin: FunctionReturnAnyWithParams = useCallback(
    async (fromSignUp = false) => {
      if (fromSignUp) {
        await setDataInPreference();
      }
      setTimeout(() => {
        navigation.navigate(LOGIN_SCREEN_KEY);
      }, 0);
    },
    [navigation, setDataInPreference]
  );

  const validate: FunctionReturnAnyWithParams = useCallback(() => {
    let isValid = true;
    // Email Validation
    if (!(email.includes("@") && email.includes("."))) {
      isValid = false;
      setEmailError(INVALID_EMAIL);
    }
    // Mobile Number Validation
    if (mobileNo?.length !== 10) {
      isValid = false;
      setMobileNoError(INVALID_MOBILE_NUMBER);
    }
    // Password Validation
    if (password?.length < 6) {
      isValid = false;
      setPasswordError(INVALID_PASS);
    }

    return isValid;
  }, [email, mobileNo, password]);

  const onPressSignup: FunctionReturnAnyWithParams = useCallback(() => {
    clearErrorStates();
    if (validate()) {
      Alert.alert(YAY, ACCOUNT_OPEN_SUCCESS, [
        { text: OK, onPress: () => navigateToLogin(true) },
      ]);
    }
  }, [clearErrorStates, navigateToLogin, validate]);

  return (
    <SafeAreaView style={[flexOne, marginHorizontalSeven]}>
      <TextView largeTitle style={marginTopFive}>
        {SIGN_UP}
      </TextView>
      {labelValItem(EMAIL, email, setEmail, VALID_EMAIL, emailError)}
      {labelValItem(
        MOBILE_NUMBER,
        mobileNo,
        setMobileNo,
        VALID_MOBILE,
        mobileNoError
      )}
      {labelValItem(
        PASSWORD,
        password,
        setPassword,
        VALID_PASS,
        passwordError,
        true
      )}
      <TouchableOpacity
        onPress={onPressSignup}
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
          {SIGN_UP}
        </TextView>
      </TouchableOpacity>
      <View style={[flexDirectionRow, marginTopOne, alignSelfCenter]}>
        <TextView>{ALREADY_A_USER}</TextView>
        <TouchableOpacity onPress={() => navigateToLogin()}>
          <TextView
            medium
            style={textUnderline}
            color={primaryColor}
          >{` ${LOG_IN_FIRST_CAP}`}</TextView>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
