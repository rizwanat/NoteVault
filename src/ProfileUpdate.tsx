import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, Alert, Image, PermissionsAndroid } from 'react-native'
import React,{ useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import { getDetails } from './redux/reducer';

var ImagePicker = require('react-native-image-picker');

const ProfileUpdate = ({navigation}:{navigation:any},props) => {
    
    const dispatch = useDispatch(); //to update the states

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone_number,setPhone] = useState('');
    const [age,setAge] = useState('');
    const [location,setLocation] = useState('');
    const [photo,setPhoto] = useState('');

    const handleSubmit = async () =>{
        try{
            if(name=='' || email=='' || phone_number=='' || age=='' || location==''){
                Alert.alert('Please fill all details');
            }
            else{
                await AsyncStorage.setItem("name",name);
                await AsyncStorage.setItem("email",email);
                await AsyncStorage.setItem("phone_number",phone_number);
                await AsyncStorage.setItem("age",age);
                await AsyncStorage.setItem("location",location);
                await AsyncStorage.setItem("profilephoto",photo);
                dispatch(getDetails({
                    name : name,
                    email : email,
                    phone_number :phone_number,
                    age : age,
                    location : location,
                    photo : photo
                  }))
                // await AsyncStorage.setItem("profilephoto",JSON.stringify(photo));
                navigation.navigate('Profile Page');
            }
            
        }catch(error){
            console.log(error);
        }
        
    }

    const options = {
        mediaTypes: 'photo',
        allowsEditing: true,
        aspect: [1,1],
        quality: 1,
    };

    async function handleGallery(){
        

        ImagePicker.launchImageLibrary(options, async (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }else if (response.customButton) {
                console.log('ImagePicker Error: ', response.customButton);
            }
             else {
                console.log(response);
                const photoUri = {uri : response.assets[0].uri};
                console.log("ph: ",photoUri.uri);
                setPhoto(photoUri.uri);
                const result = await fetch(response.assets[0].uri);
                const filename = response.assets[0].uri.substring(response.assets[0].uri);
                console.log("uri: ",filename);
              // Save the profile photo URI to AsyncStorage
            }
          });
    }

    function handleCamera(){
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA).then((result) => {
                if (result === PermissionsAndroid.RESULTS.GRANTED){
                    ImagePicker.launchCamera({}, response => {
                        console.log("response: ",response);
                        if(response.didCancel){
                            console.log("cancelled");
                        }
                        else if(response.error){
                            console.log("error",response.error);
                        }
                        else if(response.customButton){
                            console.log("custom button: ",response.customButton);
                        }
                        else{
                            setPhoto(response.assets[0].uri);
                            
                        }
                    })
                }
                else{
                    console.log("permission denied");
                }
            });
    }

    async function getData() {
        try{
            let value;
            value = await AsyncStorage.getItem("name");
            setName(value);
            value = await AsyncStorage.getItem("email");
            setEmail(value);
            value = await AsyncStorage.getItem("phone_number");
            setPhone(value);
            value = await AsyncStorage.getItem("age");
            setAge(value);
            value = await AsyncStorage.getItem("location");
            setLocation(value);
            value = await AsyncStorage.getItem("profilephoto");
            console.log("jabaa: ",value);
            // setPhoto(JSON.parse(value));
            setPhoto(value);
            console.log(name," : ",email);
            console.log("image: ",photo);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
    },[]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Update Your Profile</Text>
            </View>
            <ScrollView style={{display:'flex',flex:1}}>
                <View style={styles.imagecontainer}>
                    {photo ? (
                            <Image source={{uri : photo}} style={styles.image} />
                        ) : (
                            <Text style={{textAlign : 'center'}}>No photo selected</Text>
                    )}
                </View>
                <View style={{alignItems:'center',display : 'flex',flexDirection : 'row', justifyContent:'center'}}>
                    <Pressable onPress={handleGallery} style={styles.button}>
                        <Text style={{
                                fontSize : 18,
                                fontWeight : '500',
                                color : 'skyblue',
                            }}>
                            Choose Photo
                        </Text>
                    </Pressable>
                    <Pressable onPress={handleCamera} style={styles.button}>
                        <Text style={{
                                fontSize : 18,
                                fontWeight : '500',
                                color : 'skyblue',
                            }}>
                            Open Camera
                        </Text>
                    </Pressable>
                </View>
                
                    
                <TextInput 
                    
                    id='name'
                    onChangeText={text => setName(text)}
                    placeholder='Full Name'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                    {...props}
                    defaultValue={name}
                />
                <TextInput 
                    
                    id='email'
                    onChangeText={text => setEmail(text)}
                    placeholder='Email'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                    {...props}
                    defaultValue={email}
                />
                <TextInput 
                    
                    id='phone_number'
                    onChangeText={text => setPhone(text)}
                    placeholder='Phone Number'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                    {...props}
                    defaultValue={phone_number}
                />
                <TextInput 
                    
                    id='age'
                    onChangeText={text => setAge(text)}
                    placeholder='Age'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                    {...props}
                    defaultValue={age}
                />
                <TextInput 
                   
                    id='location'
                    onChangeText={text => setLocation(text)}
                    placeholder='Location'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                    {...props}
                    defaultValue={location}
                />

                <View style={{
                    alignItems:'center'
                }}>
                    <Pressable style={styles.button}
                    onPress={() => handleSubmit()} 
                    >
                        <Text style={{
                            fontSize : 18,
                            fontWeight : '500',
                            color : 'skyblue',
                        }}>Submit</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'darkblue'
    },
    header : {
        alignItems : 'center',
    },
    heading : {
        fontSize : 32,
        padding : 10,
        marginTop : 15,
        marginBottom : 20,
        fontWeight : 'bold',
        color :'skyblue'
    },
    input : {
        borderColor : 'skyblue',
        borderWidth : 2,
        padding: 10,
        paddingLeft : 20,
        margin : 10,
        marginHorizontal : 20,
        borderRadius : 15,
        color : 'skyblue',
        fontSize : 18,
    },
    button : {
		backgroundColor : 'darkblue',
		alignItems: 'flex-end',
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

export default ProfileUpdate;