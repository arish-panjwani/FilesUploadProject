import AsyncStorage from '@react-native-async-storage/async-storage';

export const PREF_FULL_NAME = 'prefClienttName';
export const PREF_ALL_USER_CREDENTIALS = 'prefUserCredentials';
export const PREF_FILE_PATH_ARR: any = 'prefFilePathArr';

export async function setPreferences(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {}
}

export async function getPreferences(key: string) {
  const str = await AsyncStorage.getItem(key);
  return str;
}
