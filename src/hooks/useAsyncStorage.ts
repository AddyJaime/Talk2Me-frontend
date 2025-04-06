import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAsyncStorageType } from 'types';

const useAsyncStorage = (): useAsyncStorageType => {

	const deleteItem = async (key: string): Promise<void> => {
		try {
			await AsyncStorage.removeItem(key);
		} catch (error) {
			console.log('Error to log out', error);
		}
	};

	const getItem = async (key: string): Promise<string | null> => {
		try {
			return await AsyncStorage.getItem(key);
		} catch (error: any) {
			throw error
		}
	}
	return {
		getItem,
		deleteItem
	}

};


export default useAsyncStorage;
