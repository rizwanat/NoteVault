import React from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'

const LoginScreen = () => {
	return (
		<View style={styles.container}>
				<View style={{
					display: "flex",
					flexDirection : "column",
					
				}}>
					<Text style={styles.login}>Login</Text>
					<TextInput style={styles.input} placeholder="Username" placeholderTextColor='skyblue'></TextInput>
					<TextInput style={styles.input} placeholder="Password" placeholderTextColor='skyblue'></TextInput>
					<Text style={{
						textAlign: 'center',
						fontSize: 16,
						fontWeight : '400',
						color : 'skyblue',
						paddingBottom: 10
					}}>Forgot Password?</Text>
				</View>
				
				<Pressable style={styles.loginButton}>
					<Text style={{
						fontSize : 16,
						fontWeight : '500',
						color : 'darkblue',
					}}>Login</Text>
				</Pressable>

				<View>
					<Text style={{
						textAlign: 'center',
						fontSize: 16,
						fontWeight : '400',
						color : 'skyblue',
						paddingBottom: 10
					}}>New User? Sign Up</Text>
				</View>
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
		fontSize: 16,
		textAlign : 'left',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'skyblue',
		width: 250,
		padding:10,
		paddingLeft: 20,
		marginBottom: 15

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
	}
})

export default LoginScreen
