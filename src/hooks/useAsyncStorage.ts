import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAsyncStorageType } from 'types';

const useAsyncStorage = (): useAsyncStorageType => {

	const setItem = async (key: string, value: any): Promise<void> => {
		try {

			const jsonValue = JSON.stringify(value)
			await AsyncStorage.setItem(key, jsonValue)
		} catch (error: any) {
			console.error("Error to save at asyncStogare", error)

			throw error
		}

	}

	const deleteItem = async (key: string): Promise<void> => {
		try {
			await AsyncStorage.removeItem(key);
		} catch (error) {
			console.log('Error to log out', error);
		}
	};

	const getItem = async (key: string): Promise<any | null> => {
		try {

			const value = await AsyncStorage.getItem(key);
			return value ? JSON.parse(value) : null
		} catch (error: any) {
			throw error
		}
	}
	return {
		getItem,
		deleteItem,
		setItem
	}

};


export default useAsyncStorage;
