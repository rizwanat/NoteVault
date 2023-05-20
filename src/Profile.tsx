import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Profile = ({navigation,route}:{navigation:any}) => {
    console.log(route.params.name);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Your Profile</Text>
            </View>
            <View style={styles.detailBox}>
                <Text style={styles.text}>Name : {route.params.name}</Text>
                <Text style={styles.text}>Email : {route.params.email}</Text>
                <Text style={styles.text}>Phone Number : {route.params.phone_number}</Text>
                <Text style={styles.text}>Age : {route.params.age}</Text>
                <Text style={styles.text}>Location : {route.params.location}</Text>
            </View>
            
        </View>
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
        
    }

})

export default Profile