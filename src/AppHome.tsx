import { View, Text, TextInput, Pressable, StyleSheet, Image, Alert } from 'react-native'
import React,{ useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { getDetails } from './redux/reducer';

const AppHome = ({navigation}:{navigation:any}) => {
    const dispatch = useDispatch();
    const [advice,setAdvice] = useState('');

    let name,email,phone_number,age,location,photo;

    const handleButton = async () =>{
              
        const value1 = await AsyncStorage.getItem("isLoggedIn");
        const isLogged = JSON.parse(value1);
        console.log("in home 1: ",isLogged);        
        {isLogged ? navigation.navigate('DrawerStack') : navigation.navigate('SignUp')}
    }

    const getRandomId = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return (Math.floor(Math.random() * 
            (max - min + 1)) + min).toString();
    };

    async function getData(){
        try{

            // let value;
            name = await AsyncStorage.getItem("name");
            // console.log("val: ",name);
            email = await AsyncStorage.getItem("email");
            phone_number = await AsyncStorage.getItem("phone_number");
            age = await AsyncStorage.getItem("age");
            location = await AsyncStorage.getItem("location");
            photo = await AsyncStorage.getItem("profilephoto");
            console.log("name and em: ",name,email);

            dispatch(getDetails({
                name : name,
                email : email,
                phone_number :phone_number,
                age : age,
                location : location,
                photo : photo
              }))

        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
    },[]);

    const getAdvice = () => {
        axios
            .get("http://api.adviceslip.com/advice/" + getRandomId(1, 200))
            .then((response) => {
                setAdvice(response.data.slip.advice);
            });
            console.log(advice);
            Alert.alert(advice);
    };

    return (
        <View style={styles.container}>
            <Image 
                style = {styles.image}
                source={require('./assets/home.png')}
            />
            <Pressable style={styles.button}
                onPress={handleButton}
            >
                <Text style={{
                    fontSize : 18,
                    fontWeight : '500',
                    color : 'skyblue',
                }}>➡️</Text>
            </Pressable>
            <Pressable style={styles.button1}
                onPress={getAdvice}
            >
                <Text style={{
                    fontSize : 18,
                    fontWeight : '500',
                    color : 'skyblue',
                }}>Free advice</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'darkblue',
        justifyContent : 'center',
        alignItems : 'center'
    },
    header : {
        alignItems : 'center',
    },
    heading : {
        position : 'absolute',
        top : '50%',
        fontSize : 36,
        padding : 10,
        fontWeight : 'bold',
        color :'skyblue',
        textAlign :'center',
        marginBottom : 10
    },
    button : {
        position : 'absolute',
        top : '45%',
		backgroundColor : 'darkblue',
		alignItems: 'center',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 14,
		elevation : 10,
        margin : 15,
		marginBottom: 10,
		shadowColor:'white',
		shadowOpacity : 600,
        borderWidth : 2,
        borderColor : 'skyblue',
	},
    button1 : {
        position : 'absolute',
        top : '55%',
		backgroundColor : 'darkblue',
		alignItems: 'center',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 14,
		elevation : 10,
        margin : 15,
		marginBottom: 10,
		shadowColor:'white',
		shadowOpacity : 600,
        borderWidth : 2,
        borderColor : 'skyblue',
	},
    image : {
		width : '100%',
		height : '100%',
		alignSelf : 'center',
		margin : 10,
	}
})

export default AppHome