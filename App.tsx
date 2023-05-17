import React from "react";
import { View } from "react-native";
import Counter from "./src/Counter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlatListDemo from "./src/FlatListDemo";
import Home from "./src/Home";
import FlatListHome from "./src/FlatListHome";
import CounterHome from "./src/CounterHome";

const Stack = createNativeStackNavigator();

const App = () => {
  	return(
		<View style={{flex:1}}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen 
							name="Home"
							component={Home}
						/>
						<Stack.Screen 
							name="CounterHome"
							component={CounterHome}
						/>
						<Stack.Screen 
							name="ListHome"
							component={FlatListHome}
						/>
						<Stack.Screen 
							name="Counter"
							component={Counter}
						/>
						<Stack.Screen 
							name="TodoList"
							component={FlatListDemo}
						/>
					</Stack.Navigator>
				</NavigationContainer>
		</View>
  	)
}

 export default App;