import AsyncStorage from "@react-native-async-storage/async-storage";

export class LocalStorage {
  async storeData(key: string, value: string) {
    try {
      await AsyncStorage.setItem(`@${key}_mContacts`, JSON.stringify(value));
    } catch (error) {
      throw error;
    }
  }

  async getData<T>(key: string): Promise<T | null | undefined> {
    try {
      const value = await AsyncStorage.getItem(`@${key}_mContacts`);
      if (value) return JSON.parse(value) as T;
      return value as T | null;
    } catch (error) {
      throw error;
    }
  }

  async removeValue(key: string) {
    try {
      await AsyncStorage.removeItem(`@${key}_mContacts`);
    } catch (error) {
      throw error;
    }
  }
}
