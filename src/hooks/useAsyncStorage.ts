import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAsyncStorageType } from 'types';

const useAsyncStorage = (): useAsyncStorageType => {
	// set es para guardar 
	// 	value es El dato que quieres guardar, como object
	// value aqui representa objecto pero lo voy a dejar asi
	const setItem = async (key: string, value: any): Promise<void> => {
		try {
			// asynch olo puede guardar string poreso se esta convierito s un string 
			const jsonValue = JSON.stringify(value)
			await AsyncStorage.setItem(key, jsonValue)
		} catch (error: any) {
			console.error("Error to save at asyncStogare", error)
			// ❗ "Hubo un problema, detén todo y avisa del error".
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
	// para leer por esa razon es solo key porque estas lyendo lo que hay en el asynchSotrage 
	const getItem = async (key: string): Promise<any | null> => {
		try {
			// convertirt aqui value en un objecto
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
