// packages
import {Dimensions, PixelRatio} from 'react-native';

export let screenWidth = Dimensions.get('window').width;

export let screenHeight = Dimensions.get('window').height;

const widthPercentageToDP = (widthPercent: string | number) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = (heightPercent: string | number) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export {widthPercentageToDP, heightPercentageToDP};
