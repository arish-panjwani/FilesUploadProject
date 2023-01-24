import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '@utils/ResponsiveScreen';
import {StyleSheet} from 'react-native';

export const CommonStyles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  flexOnePointFive: {
    flex: 1.5,
  },
  flexTwo: {
    flex: 2,
  },
  flexTwoPointTwo: {flex: 2.2},
  flexTwoHalf: {
    flex: 2.5,
  },
  flexThree: {
    flex: 3,
  },
  flexFour: {
    flex: 3,
  },
  flexEight: {
    flex: 8,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  flexDirectionColumn: {
    flexDirection: 'column',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyContentSpaceAround: {
    justifyContent: 'space-around',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentFlexEnd: {
    justifyContent: 'flex-end',
  },
  justifyContentFlexStart: {
    justifyContent: 'flex-start',
  },
  justifyContentSpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignVerticalCenter: {
    textAlignVertical: 'center',
  },
  heightHundredPercent: {
    height: '100%',
  },
  widthHundredPercent: {
    width: '100%',
  },
  paddingBottomPointFive: {
    paddingBottom: hp(0.5),
  },
  paddingBottomOne: {
    paddingBottom: hp(1),
  },
  paddingBottomTwo: {
    paddingBottom: hp(2),
  },
  paddingBottomFive: {
    paddingBottom: hp(5),
  },
  paddingBottomTen: {
    paddingBottom: hp(10),
  },
  marginRightFive: {
    marginRight: wp(5),
  },
  marginRightSeven: {
    marginRight: wp(7),
  },
  marginHorizontalZero: {
    marginHorizontal: 0,
  },
  marginHorizontalPointFive: {
    marginHorizontal: wp(0.5),
  },
  marginHorizontalOne: {
    marginHorizontal: wp(1),
  },
  marginHorizontalOneHalf: {
    marginHorizontal: wp(1.5),
  },
  marginHorizontalTwo: {
    marginHorizontal: wp(2),
  },
  marginHorizontalThree: {
    marginHorizontal: wp(3),
  },
  marginHorizontalFour: {
    marginHorizontal: wp(4),
  },
  marginHorizontalFive: {
    marginHorizontal: wp(5),
  },
  marginHorizontalSeven: {
    marginHorizontal: wp(7),
  },
  marginHorizontalTen: {
    marginHorizontal: wp(10),
  },
  marginVerticalThree: {
    marginVertical: hp(3),
  },
  marginVerticalFour: {
    marginVertical: hp(4),
  },
  marginOne: {
    margin: hp(1),
  },
  paddingZero: {
    padding: 0,
  },
  paddingOne: {
    padding: wp(1),
  },
  paddingPointFive: {
    padding: wp(0.5),
  },
  paddingTwo: {
    padding: wp(2),
  },
  paddingTwoHalf: {
    padding: wp(2.5),
  },
  paddingThree: {
    padding: wp(3),
  },
  paddingFour: {
    padding: wp(4),
  },
  paddingVerticalHalf: {
    paddingVertical: hp(0.5),
  },
  paddingVerticalOne: {
    paddingVertical: hp(1),
  },
  paddingVerticalOnePointFive: {
    paddingVertical: hp(1.5),
  },
  paddingVerticalTwo: {
    paddingVertical: hp(2),
  },
  paddingVerticalThree: {
    paddingVertical: hp(3),
  },
  paddingTopZero: {
    paddingTop: 0,
  },
  paddingTopHalf: {
    paddingTop: hp(0.5),
  },
  paddingTopPointTwo: {paddingTop: hp(0.2)},
  paddingTopOne: {
    paddingTop: hp(1),
  },
  paddingTopOnePointFive: {
    paddingTop: hp(1.5),
  },
  paddingTopTwo: {
    paddingTop: hp(2),
  },
  paddingTopThree: {
    paddingTop: hp(3),
  },
  paddingLeftZero: {
    paddingLeft: 0,
  },
  paddingLeftOne: {
    paddingLeft: wp(1),
  },
  paddingLeftOnePointFive: {
    paddingLeft: wp(1.5),
  },
  paddingLeftTwo: {
    paddingLeft: wp(2),
  },
  paddingLeftFive: {
    paddingLeft: wp(5),
  },
  paddingHorizontalOne: {
    paddingHorizontal: wp(1),
  },
  paddingHorizontalOnePointFive: {
    paddingHorizontal: wp(1.5),
  },
  paddingHorizontalTwo: {
    paddingHorizontal: wp(2),
  },
  paddingHorizontalThree: {
    paddingHorizontal: wp(3),
  },
  paddingHorizontalFour: {
    paddingHorizontal: wp(4),
  },
  paddingHorizontalFive: {
    paddingHorizontal: wp(5),
  },
  paddingHorizontalSeven: {
    paddingHorizontal: wp(7),
  },
  paddingHorizontalEight: {
    paddingHorizontal: wp(8),
  },
  paddingHorizontalTen: {
    paddingHorizontal: wp(10),
  },
  widthEighty: {
    width: wp(80),
  },
  paddingRightOne: {
    paddingRight: wp(1),
  },
  paddingRightOnePointFive: {
    paddingRight: wp(1.5),
  },
  paddingRightTwo: {
    paddingRight: wp(2),
  },
  paddingRightThree: {
    paddingRight: wp(3),
  },
  paddingRightFour: {
    paddingRight: wp(4),
  },
  marginBottomHalf: {
    marginBottom: hp(0.5),
  },
  marginBottomOne: {
    marginBottom: hp(1),
  },
  marginBottomOneHalf: {
    marginBottom: hp(1.5),
  },
  marginBottomTwo: {
    marginBottom: hp(2),
  },
  marginBottomTwoPointFive: {
    marginBottom: hp(2.5),
  },
  marginBottomThree: {
    marginBottom: hp(3),
  },
  marginBottomFour: {
    marginBottom: hp(4),
  },
  marginBottomSix: {
    marginBottom: hp(6),
  },
  marginBottomSeven: {
    marginBottom: hp(7),
  },
  marginBottomEight: {
    marginBottom: hp(8),
  },
  marginTopZero: {
    marginTop: hp(0),
  },
  marginTopHalf: {
    marginTop: hp(0.5),
  },
  marginTopOne: {
    marginTop: hp(1),
  },
  marginTopOneHaf: {
    marginTop: hp(1.5),
  },
  marginTopTwo: {
    marginTop: hp(2),
  },
  marginTopThree: {
    marginTop: hp(3),
  },
  marginTopFour: {
    marginTop: hp(4),
  },
  marginTopFive: {
    marginTop: hp(5),
  },
  marginTopSix: {
    marginTop: hp(6),
  },
  marginTopSeven: {
    marginTop: hp(7),
  },
  marginTopFifteen: {marginTop: hp(15)},
  marginTopSeventeen: {marginTop: hp(17)},
  borderRadiusOne: {
    borderRadius: wp(1),
  },
  borderRadiusOneHalf: {
    borderRadius: wp(1.5),
  },
  borderRadiusTwo: {
    borderRadius: wp(2),
  },
  borderRadiusThree: {
    borderRadius: wp(3),
  },
  borderRadiusThreeHalf: {
    borderRadius: wp(3.5),
  },
  borderRadiusSix: {
    borderRadius: wp(6),
  },
  borderWidthPointThree: {borderWidth: wp(0.3)},
  borderWidthPointFive: {borderWidth: wp(0.5)},
  borderWidthOne: {borderWidth: wp(1)},
  borderWidthPointTwo: {borderWidth: wp(0.2)},
  rowCenterStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginLeftZero: {
    marginLeft: 0,
  },
  marginBottomZero: {
    marginBottom: 0,
  },
  marginLeftHalf: {
    marginLeft: wp(0.5),
  },
  marginLeftOne: {
    marginLeft: wp(1),
  },
  marginLeftOnePointFive: {
    marginLeft: wp(1.5),
  },
  marginVerticalHalf: {
    marginVertical: hp(0.5),
  },
  marginVerticalOne: {
    marginVertical: hp(1),
  },
  marginVerticalOneHalf: {
    marginVertical: hp(1.5),
  },
  marginVerticalTwo: {
    marginVertical: hp(2),
  },
  marginLeftTwo: {
    marginLeft: wp(2),
  },
  marginLeftThree: {
    marginLeft: wp(3),
  },
  marginLeftFour: {
    marginLeft: wp(4),
  },
  marginLeftFive: {
    marginLeft: wp(5),
  },
  marginLeftSeven: {
    marginLeft: wp(7),
  },
  marginLeftEight: {
    marginLeft: wp(8),
  },
  marginRightOne: {
    marginRight: wp(1),
  },
  marginRightPointFive: {
    marginRight: wp(0.5),
  },
  marginRightTwo: {
    marginRight: wp(2),
  },
  marginRightThree: {
    marginRight: wp(3),
  },
  positionAbsolute: {
    position: 'absolute',
  },
  overflowHidden: {
    overflow: 'hidden',
  },
  overflowVisible: {
    overflow: 'visible',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  textUnderlineOnly: {
    textDecorationLine: 'underline',
    marginVertical: hp(1),
    marginLeft: wp(1),
  },
  no_master_data_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
  },
  loaderEmptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  flexCenterStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataViewContainer: {
    height: hp(80),
    marginHorizontal: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperStyle: {
    flex: 1,
    overflow: 'visible',
  },
  qvtText: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderParentStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginTopAuto: {
    marginTop: 'auto',
  },
  borderTopRadiusTwo: {
    borderTopLeftRadius: wp(2),
    borderTopRightRadius: wp(2),
    borderTopEndRadius: wp(2),
    borderTopStartRadius: wp(2),
  },
  bottomHairlineWidth: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  widthHairline: {
    width: StyleSheet.hairlineWidth,
  },
  widthborderHairline: {
    borderWidth: StyleSheet.hairlineWidth,
  },
});
