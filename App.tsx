import React, { useEffect, useState } from "react";
import { StatusBar, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
import Counter from "./src/Counter";
import FlatListDemo from "./src/FlatListDemo";
import Home from "./src/Home";
import FlatListHome from "./src/FlatListHome";
import CounterHome from "./src/CounterHome";
import LoginScreen from "./src/LoginScreen";
import ProfileUpdate from "./src/ProfileUpdate";
import Profile from "./src/Profile";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHome from "./src/AppHome";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerStack from "./src/DrawerStack";
import SignUp from "./src/SignUp";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
	let isLogged =false;
	const [page,setPage] = useState('');
	// async function storeData(){
	// 	try{
	// 		await AsyncStorage.setItem("username","riz");
	// 		await AsyncStorage.setItem("password","123");
	// 	}catch(error){
	// 		console.log(error);
	// 	}
	// }

	async function getData(){
		try{
			// await AsyncStorage.setItem('lists',JSON.stringify([]));
			// await AsyncStorage.removeItem('lists');
			let data = await AsyncStorage.getItem("isLoggedIn");
			isLogged = JSON.parse(data);
			console.log("in app loggin: ",isLogged);
			if(isLogged){
				setPage("Home 1");
			}
			else{
				setPage("Login");
			}
		}catch(error){
			console.log(error);
		}
	}


	useEffect(()=>{
		// storeData();
		getData();
	},[]);

  	return(
		<SafeAreaView style={{flex:1}}>
			<StatusBar hidden />
				<NavigationContainer>
					<Stack.Navigator screenOptions={{headerShown : false}} initialRouteName={page}>
						{/* <Stack.Screen name="Home 1" component={AppHome}/>
						<Stack.Screen name="Login" component={LoginScreen}/> */}
						<Stack.Screen name="Home 1" component={AppHome}/>
						<Stack.Screen name="SignUp" component={SignUp} />
						<Stack.Screen name="Login" component={LoginScreen}/>
						<Stack.Screen name="DrawerStack" component={DrawerStack}/>
						
					</Stack.Navigator>
				</NavigationContainer>
		</SafeAreaView>
  	)
}

 export default App;