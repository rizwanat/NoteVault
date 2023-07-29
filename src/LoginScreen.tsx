import React,{useEffect, useState} from 'react'
import { View, StyleSheet, Text, TextInput, Pressable, Image, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

let users: any[] = [];

const LoginScreen = ({navigation}:{navigation:any}) => {
	let [username,setUsername] = useState('');
	let [pass,setPass] = useState('');

	async function getData(){
		try{
			const existingUsers = await AsyncStorage.getItem("users");
			users = JSON.parse(existingUsers);
			console.log("in login page users",users);
		}catch(error){
			console.log(error);
		}
	}
	
	function handlePress(){
		navigation.navigate('SignUp');
	}

	const handleLogin = async () => {
		
		console.log("entered creds: ",username, "  :  " ,pass);
		if(username == '' || pass == ''){
			Alert.alert('username/password cannot be empty');
		}
		else{
			try{
				if((users.find(user => user.username===username && user.pass===pass))){
					await AsyncStorage.setItem("isLoggedIn",JSON.stringify(true));
					Alert.alert('Logged in!');
					navigation.navigate('DrawerStack');
				}
				else{
					Alert.alert('Invalid username/password');
				}
				
			}
			catch(error){
				console.log(error);
			}
			
		}
	}

	useEffect(()=>{
		getData();
	},[]);

	return (
		<View style={styles.container}>
				<View style={{
					display: "flex",
					flexDirection : "column",
					
				}}>
					<Text style={styles.login}>Login</Text>
					<Image 
						style = {styles.image}
						source={require('./assets/user.png')}
					/>
					<TextInput 
						style={styles.input} 
						placeholder="Username" 
						placeholderTextColor='skyblue'
						onChangeText={(user)=>{setUsername(user)}}
					/>
					<TextInput 
						style={styles.input} 
						placeholder="Password" 
						placeholderTextColor='skyblue'
						onChangeText={(password) => {setPass(password)}}
						/>
				</View>
				<Text style={{
						fontSize : 16,
						fontWeight : '300',
						color : 'skyblue',
                        paddingBottom : 15,
					}} onPress={handlePress}>Already have account? Login</Text>
				<Pressable 
					style={styles.loginButton}
					onPress={handleLogin}		
				>
					<Text style={{
						fontSize : 18,
						fontWeight : '500',
						color : 'darkblue',
					}}>Login</Text>
				</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
    	backgroundColor: 'darkblue',
		display:"flex",
		justifyContent:'center',
		alignItems:'center',
  	},
	login : {
		
		fontSize: 42,
		textAlign: 'center',
		padding: 20,
		color: 'skyblue',
		fontWeight: 'bold',
	},
	input : {
		fontSize: 18,
		textAlign : 'left',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'skyblue',
		width: 250,
		padding:10,
		paddingLeft: 20,
		marginBottom: 15,
		color : 'skyblue',

	},
	loginButton : {
		backgroundColor : 'skyblue',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 4,
		elevation: 10,
		marginBottom: 10,
	},
	image : {
		width : 100,
		height : 100,
		alignSelf : 'center',
		margin : 10,
		marginBottom : 15
	}
})

export default LoginScreen
