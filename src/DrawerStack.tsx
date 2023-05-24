import { View, Text } from 'react-native'
import React,{useEffect} from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from "./Home";
import FlatListHome from "./FlatListHome";
import CounterHome from "./CounterHome";
import LoginScreen from "./LoginScreen";
import ProfileUpdate from "./ProfileUpdate";
import Profile from "./Profile";
import FlatListDemo from './FlatListDemo';
import Counter from './Counter';
import AppHome from './AppHome';
import DetailsScreen from './DetailsScreen';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CounterScreenStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{headerShown : false}}
        >
            <Stack.Screen 
                name='Counter Home'
                component={CounterHome}
            />
            <Stack.Screen
                name="Counter App"
                component={Counter}
            />
        </Stack.Navigator>
    );
};

const ListScreenStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{headerShown : false}}
        >
            <Stack.Screen 
                name='List Home'
                component={FlatListHome}
            />
            <Stack.Screen
                name="TodoList App"
                component={FlatListDemo}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
            />
        </Stack.Navigator>
    );
};

const ProfileUpdateScreenStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{headerShown : false}}
        >
            <Stack.Screen 
                name='Profile Update'
                component={ProfileUpdate}
            />
        </Stack.Navigator>
    );
};

const ProfileScreenStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{headerShown : false}}
        >
            <Stack.Screen 
                name='Profile Page'
                component={Profile}
            />
            <Stack.Screen 
                name='Profile Update'
                component={ProfileUpdate}
            />
        </Stack.Navigator>
    );
};

const LogoutScreenStack = ({navigation}) => {
    return(
        <Stack.Navigator
            screenOptions={{headerShown : false}}
        >
            <Stack.Screen name='Home 1' component={AppHome} />
            <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>
    )
};

const DrawerStack = ({navigation}:{navigation:any}) => {
    let isLogged = false;
	async function handleLogout(){
		await AsyncStorage.setItem("isLoggedIn",JSON.stringify(false));
		navigation.navigate('Home 1');
        // navigation.closeDrawer();
	}

	async function getData(){
		try{
			let data = await AsyncStorage.getItem("isLoggedIn");
			isLogged = JSON.parse(data);
			console.log("islogged in drawer stack: ",isLogged);
		}catch(error){
			console.log(error);
		}
		
	}

	useEffect(()=>{
		getData();
	},[]);

	return (
            <Drawer.Navigator
                drawerContent={props => {
                    return (
                        <DrawerContentScrollView {...props}>
                        <DrawerItemList {...props} />
                            <>
                                <DrawerItem
                                    label={({color}) => (
                                        <Text style={{color}}>Logout</Text>
                                    )}
                                    onPress={handleLogout}
                                />
                            </>	
                        </DrawerContentScrollView>
                    );
                }}
            >

                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Counter" component={CounterScreenStack}/>
                <Drawer.Screen name="List" component={ListScreenStack}/>
                {/* <Drawer.Screen name="Update Profile" component={ProfileUpdateScreenStack}/> */}
                <Drawer.Screen name="Profile" component={ProfileScreenStack}/>
                
            </Drawer.Navigator>
	)
}

export default DrawerStack