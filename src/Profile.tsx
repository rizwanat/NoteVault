import { View, Text, TextInput, StyleSheet, SafeAreaView, Pressable, ScrollView, Image} from 'react-native'
import React,{useEffect, useState}from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { getDetails } from './redux/reducer';

const Profile = ({navigation}:{navigation:any}) => {

    const data=useSelector((state)=>state.counter) //getting the states from store

    // console.log("data: ",data)
    

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone_number,setPhone] = useState('');
    const [age,setAge] = useState('');
    const [location,setLocation] = useState('');
    const [photo,setPhoto] = useState(null);
    
    async function getData() {
        try{
            let value;
           
            //value = await AsyncStorage.getItem("name");
            setName(data.name);
            // value = await AsyncStorage.getItem("email");
            setEmail(data.email);
            // value = await AsyncStorage.getItem("phone_number");
            setPhone(data.phone_number);
            // value = await AsyncStorage.getItem("age");
            setAge(data.age);
            // value = await AsyncStorage.getItem("location");
            setLocation(data.location);
            // value = await AsyncStorage.getItem("profilephoto");
            console.log("photo: ",data.photo);
            setPhoto(data.photo);
            // setPhoto(JSON.parse(data.photo));
            
            // console.log(typeof name)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        console.log("data: ",data);
        getData();
    },[data]);

    // useEffect(()=>{
    //     getData();
    // },[name,email,phone_number,age,location,photo]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Your Profile</Text>
            </View>
            <View style={styles.imagecontainer}>
                {photo ? (
                        <Image source={{uri : photo}} style={styles.image} />
                    ) : (
                        <Text style={{textAlign : 'center'}}>No photo selected</Text>
                )}
            </View>
            <View style={styles.detailBox}>
                <Text style={styles.text}>Name : {name} </Text>
                <Text style={styles.text}>Email : {email}</Text>
                <Text style={styles.text}>Phone Number : {phone_number}</Text>
                <Text style={styles.text}>Age : {age}</Text>
                <Text style={styles.text}>Location : {location}</Text>
            </View>
                <Pressable style={styles.button} onPress={()=>{navigation.navigate('Profile Update')}}>
                    <Text style={{
                    fontSize : 18,
                    fontWeight : '500',
                    color : 'skyblue',
                    }}>
                        Update Profile
                    </Text>
                </Pressable>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'darkblue'
    },
    header : {
        alignItems : 'center',
    },
    heading : {
        fontSize : 36,
        padding : 10,
        marginTop : 10,
        fontWeight : 'bold',
        color :'skyblue'
    },
    detailBox : {
        flex : 0.8,
        margin : 20,
        padding : 25,
        borderRadius : 25,
    },
    text : {
        fontSize : 24,
        fontWeight : '600',
        color : 'skyblue',
        paddingBottom : 40,
        
    },
    button : {
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
        alignSelf : 'center',
        width : 100,
        height : 100,
        borderRadius : 999,
    },
    imagecontainer : {
        alignContent : 'center',
        alignSelf : 'center',
        justifyContent : 'center',
        width : 100,
        height : 100,
        borderRadius : 999,
        backgroundColor : 'darkgray'
    }

})

export default Profile