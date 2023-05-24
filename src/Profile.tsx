import { View, Text, TextInput, StyleSheet, SafeAreaView, Pressable, ScrollView} from 'react-native'
import React,{useEffect, useState}from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = ({navigation}:{navigation:any}) => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone_number,setPhone] = useState('');
    const [age,setAge] = useState('');
    const [location,setLocation] = useState('');
    
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
            
            console.log(name," : ",email);
            // console.log(typeof name)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
    },[]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Your Profile</Text>
            </View>
            <View style={styles.detailBox}>
                <Text style={styles.text}>Name : {name} </Text>
                <Text style={styles.text}>Email : {email}</Text>
                <Text style={styles.text}>Phone Number : {phone_number}</Text>
                <Text style={styles.text}>Age : {age}</Text>
                <Text style={styles.text}>Location : {location}</Text>
            </View>
            <View>
                <Pressable style={styles.button} onPress={()=>{navigation.navigate('Profile Update')}}>
                    <Text style={{
                    fontSize : 18,
                    fontWeight : '500',
                    color : 'skyblue',
                    }}>
                        Update Profile
                    </Text>
                </Pressable>
            </View>
            
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

})

export default Profile