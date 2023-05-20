import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native'
import React,{ useState } from 'react'

const ProfileUpdate = ({navigation}:{navigation:any},props) => {

    const initialValues = {
        name : '',
        email : '',
        phone_number : '' ,
        location : '',
        age : '',
    };

    const [inputs,setInputs] = useState(initialValues);

    const handleChange = (text,input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
    }

    const handleSubmit = () =>{
        console.log("in update", inputs);
        navigation.navigate('Profile',inputs);
    }

    


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Update Your Profile</Text>
            </View>
            <ScrollView style={{display:'flex',flex:1}}>
                <TextInput 
                    
                    id='name'
                    onChangeText={text => handleChange(text,'name')}
                    placeholder='Full Name'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                    {...props}
                />
                <TextInput 
                    
                    id='email'
                    onChangeText={text => handleChange(text,'email')}
                    placeholder='Email'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                    {...props}
                />
                <TextInput 
                    
                    id='phone_number'
                    onChangeText={text => handleChange(text,'phone_number')}
                    placeholder='Phone Number'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                    {...props}
                />
                <TextInput 
                    
                    id='age'
                    onChangeText={text => handleChange(text,'age')}
                    placeholder='Age'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                    {...props}
                />
                <TextInput 
                   
                    id='location'
                    onChangeText={text => handleChange(text,'location')}
                    placeholder='Location'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                    {...props}
                />


                {/* <Input
                    onChangeText={text => handleChange(text, 'name')}
                    placeholder="Enter your name"
                />
                <Input
                    onChangeText={text => handleChange(text, 'email')}
                    placeholder="Enter your email address"
                />
                <Input
                    onChangeText={text => handleChange(text, 'phone_number')}
                    placeholder="Enter your phone number"
                /> */}

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