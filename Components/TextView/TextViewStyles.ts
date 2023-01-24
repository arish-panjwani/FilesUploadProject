import {ResponsiveFontValue as RFValue} from '@utils/ResponsiveFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fontSubHeading: {
    fontSize: RFValue(28),
  },
  fontLargeTitle: {
    fontSize: RFValue(24),
  },
  fontTitle: {
    fontSize: RFValue(20),
  },
  fontDescription: {
    fontSize: RFValue(18),
  },
  fontBody: {
    fontSize: RFValue(17),
  },
  fontNote: {
    fontSize: RFValue(14),
  },
  fontSmall: {
    fontSize: RFValue(12),
  },
  fontExtraSmall: {
    fontSize: RFValue(10),
  },
  weightLight: {
    fontWeight: '200',
  },
  weightRegular: {
    fontWeight: 'normal',
  },
  weightMedium: {
    fontWeight: '600',
  },
  weightBold: {
    fontWeight: 'bold',
  },
});
