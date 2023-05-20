import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Counter from "./src/Counter";
import FlatListDemo from "./src/FlatListDemo";
import Home from "./src/Home";
import FlatListHome from "./src/FlatListHome";
import CounterHome from "./src/CounterHome";
import LoginScreen from "./src/LoginScreen";
import ProfileUpdate from "./src/ProfileUpdate";
import Profile from "./src/Profile";
import StackNavigations from "./src/navigation/StackNavigations";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerNavigations from "./src/navigation/DrawerNavigations";

// const Stack = createNativeStackNavigator();

const App = () => {
  	return(
		<SafeAreaView style={{flex:1}}>
			<StatusBar hidden />
				<NavigationContainer>
					<DrawerNavigations />
				</NavigationContainer>
		</SafeAreaView>
  	)
}

 export default App;