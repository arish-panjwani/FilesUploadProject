import {Dimensions, Platform, StatusBar} from 'react-native';

const {height, width} = Dimensions.get('window');
const standardLength = width > height ? width : height;
const offset =
  width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

const deviceHeight =
  Platform.OS === 'android' ? standardLength - offset! : standardLength;

// guideline height for standard 5" device screen is 680
export function ResponsiveFontValue(
  fontSize: number,
  standardScreenHeight = 750,
) {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}
