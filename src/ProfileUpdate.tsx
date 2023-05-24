import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, Alert } from 'react-native'
import React,{ useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileUpdate = ({navigation}:{navigation:any},props) => {

    const [name,setName] = useState('');
    const [email,setemail] = useState('');
    const [phone_number,setPhone] = useState('');
    const [age,setAge] = useState('');
    const [location,setLocation] = useState('');

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
                navigation.navigate('Profile Page');
            }
            
        }catch(error){
            console.log(error);
        }
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Update Your Profile</Text>
            </View>
            <ScrollView style={{display:'flex',flex:1}}>
                <TextInput 
                    
                    id='name'
                    onChangeText={text => setName(text)}
                    placeholder='Full Name'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                    {...props}
                />
                <TextInput 
                    
                    id='email'
                    onChangeText={text => setemail(text)}
                    placeholder='Email'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                    {...props}
                />
                <TextInput 
                    
                    id='phone_number'
                    onChangeText={text => setPhone(text)}
                    placeholder='Phone Number'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                    {...props}
                />
                <TextInput 
                    
                    id='age'
                    onChangeText={text => setAge(text)}
                    placeholder='Age'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                    {...props}
                />
                <TextInput 
                   
                    id='location'
                    onChangeText={text => setLocation(text)}
                    placeholder='Location'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                    {...props}
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
})

export default ProfileUpdate