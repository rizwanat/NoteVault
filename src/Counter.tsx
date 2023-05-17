import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, Pressable } from 'react-native'

const Counter = ({route}:{route:any}) => {

	let [count,setCount] = useState(0);
	let [status,setStatus] = useState('');
	const [name,setName] = useState(route.params.name);

	function handleDec(){
		setCount(count - 1);
		setStatus('One Count Decremented');
	}

	function handleInc(){
		setCount(count + 1);
		setStatus('One Count Incremented');
	}

	function handleReset(){
		setCount(0);
		setStatus('')
	}

	function Name(props:any){
		return(
			<View>
				<Text style={styles.count}>Hey {props.name}!!</Text>
			</View>
		)
	}
	
	return (
		<View style={styles.container}>
			<View style={{
				padding:30,
			}}>
				<Name name={name} />
			</View>
			<View style={{
				padding:30,
			}}>
				<Text style={styles.count}>Counter</Text>
			</View>
			<View style={{
				display: 'flex',
				flexDirection : 'row'
			}}>
				
				<Pressable style={styles.button} onPress={handleDec}>
					<Text style={styles.text}>-</Text>
				</Pressable>
				<View style={{
					padding:20,
				}}></View>
				<Pressable style={styles.button} onPress={handleInc}>
					<Text style={styles.text}>+</Text>
				</Pressable>
			</View>
			<View style={{
				marginTop : 15,
			}}>
				<Text style={styles.count}>{count}</Text>
			</View>
			<View style={{
				marginTop : 15,
			}}>
				<Pressable style={styles.button} onPress={handleReset}>
					<Text style={styles.text}>RESET</Text>
				</Pressable>
			</View>
			<View style={{
				marginTop : 15,
			}}>
				<Text style={styles.text}>{status}</Text>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	container:{
		flex:1,
		display:'flex',
		flexDirection: 'column',
    	backgroundColor: 'darkblue',
		justifyContent:'center',
		alignItems:'center',
  	},
	count : {
		fontSize : 42,
		color: 'skyblue',
		fontWeight : 'bold'
	},
	button : {
		backgroundColor : 'darkblue',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 14,
		elevation : 10,
        margin : 15,
		marginBottom: 10,
		shadowColor:'white',
		shadowOpacity : 600,
        borderWidth : 2,
        borderColor : 'skyblue'

	},
	text : {
		fontSize : 26,
		color : 'skyblue',
		fontWeight : 'bold',
	}
})

export default Counter
