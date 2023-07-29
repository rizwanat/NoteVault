import React,{useEffect, useState} from 'react'
import { View, StyleSheet, Text, TextInput, Pressable, Image, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}:{navigation:any}) => {
	let [username,setUsername] = useState('');
	let [pass,setPass] = useState('');
    let [cnfpass,setCnfPass] = useState('');

    const handlePress = () => {
        navigation.navigate('Login');
    }

	const handleSignUp = async () => {
		
		console.log(username, "  :  " ,pass);
		if(username == '' || pass == '' || cnfpass == ''){
			Alert.alert('Fields cannot be empty');
		}
		else{
			try{
				const existingUsers = await AsyncStorage.getItem('users');
				let users = [];
				console.log("existing: ",existingUsers);
				users = JSON.parse(existingUsers);
				console.log("my users: ",users);
				if(pass===cnfpass){
					let userData = users.some(user => user.username===username)
					if(userData){
						Alert.alert('Username already exist');
					}
					else{
						users.push({username, pass});
						console.log(users);
						await AsyncStorage.setItem('users',JSON.stringify(users));
						Alert.alert('Successfully registered');
                    	navigation.navigate('Login');
					}
					
				}
				else{
					Alert.alert("Passwords don't match");
				}
				
			}
			catch(error){
				console.log(error);
			}
			
		}
	}

	return (
		<View style={styles.container}>
				<View style={{
					display: "flex",
					flexDirection : "column",
					
				}}>
					<Text style={styles.login}>SignUp</Text>
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
                    <TextInput 
						style={styles.input} 
						placeholder="Confirm Password" 
						placeholderTextColor='skyblue'
						onChangeText={(cnfpassword) => {setCnfPass(cnfpassword)}}
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
					onPress={handleSignUp}
				>
					<Text style={{
						fontSize : 18,
						fontWeight : '500',
						color : 'darkblue',
					}}>Sign Up</Text>
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

export default SignUp
