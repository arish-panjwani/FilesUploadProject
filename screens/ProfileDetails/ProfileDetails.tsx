import Header from "@components/Header/Header";
import TextView from "@components/TextView/TextView";
import { Colors } from "@resources/Colors";
import { CommonStyles } from "@resources/CommonStyles";
import { Strings } from "@resources/Strings";
import { DashboardProps, FunctionReturnAnyWithParams } from "@resources/Types";
import React, { useCallback } from "react";
import { SafeAreaView, View } from "react-native";

const {
  flexOne,
  marginHorizontalSeven,
  marginTopFive,
  marginTopFour,
  paddingHorizontalThree,
  paddingVerticalOne,
  borderRadiusThreeHalf,
  marginTopTwo,
} = CommonStyles;

const { EMAIL, PROFILE_DETAILS, MOBILE_NUMBER } = Strings;

const { white, primaryColor } = Colors;

const ProfileDetails = (props: DashboardProps) => {
  const { route, navigation } = props;

  const renderItemDataView = useCallback(
    (label: string, value: string | number, style?: object) => {
      return (
        <View style={[style, paddingHorizontalThree, paddingVerticalOne]}>
          <TextView title bold color={primaryColor}>{`${label}: `}</TextView>
          <TextView style={marginTopTwo}>{value}</TextView>
        </View>
      );
    },
    []
  );

  const renderUserDataView: FunctionReturnAnyWithParams = useCallback(() => {
    const { params } = route;
    const { email, mobileNo } = params;

    return (
      <>
        <View
          style={[
            paddingHorizontalThree,
            paddingVerticalOne,
            marginTopFive,
            { backgroundColor: white },
            borderRadiusThreeHalf,
          ]}
        >
          {renderItemDataView(EMAIL, email)}
          {renderItemDataView(MOBILE_NUMBER, mobileNo, marginTopFour)}
        </View>
      </>
    );
  }, [route, renderItemDataView]);

  return (
    <SafeAreaView style={[marginHorizontalSeven]}>
      <Header navigation={navigation} title={PROFILE_DETAILS} />
      {renderUserDataView()}
    </SafeAreaView>
  );
};

export default ProfileDetails;
