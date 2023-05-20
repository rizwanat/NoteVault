import React,{useState} from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Pressable} from 'react-native';


const FlatListDemo = ({route}:{route:any}) => {

    console.log("moving", route.params);
    const [list,addList] = useState(route.params.detailsArray);
    console.log("kitti ikka  " , list);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}> List</Text>
            </View>
            
            <KeyboardAvoidingView style={{flex:1}}>
                <FlatList 
                    data={list}
                    renderItem={
                        ({item}) => (
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.text}>{item.title}</Text> 
                        </TouchableOpacity>    
                    )}  
                      
                />
                <Pressable >
                    <Text></Text>
                </Pressable>
            </KeyboardAvoidingView> 
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : 'darkblue'
    },
    header : {
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 20
        
    },
    heading : {
        fontSize : 40,
        padding : 10,
        marginTop : 10,
        color : 'skyblue',
        fontWeight : 'bold'
    },
    item : {
        fontSize : 16,
        padding : 20,
        color : 'skyblue',
        fontWeight : 'bold',
        marginBottom : 15,
        backgroundColor : 'darkblue',
        borderRadius : 10,
        marginHorizontal : 20,
        elevation : 10,
        marginTop : 10,
        shadowColor:'white'
    },
    text : {
        fontSize : 18,
        fontWeight : 'bold',
        color:'skyblue'
    },
    input : {
		fontSize: 18,
		textAlign : 'left',
        margin : 10,
		borderRadius: 10,
        borderWidth : 2,
        borderColor : 'skyblue',
        backgroundColor:'darkblue',
		padding:10,
		paddingLeft: 20,
		marginBottom: 15,
        color : 'skyblue',
	},
    button : {
        backgroundColor : 'darkblue',
        borderRadius : 25,
        borderWidth : 2,
        alignSelf : 'center',
        borderColor : 'skyblue',
        width : 70,
        height : 70,
        justifyContent : 'center'
    },
    inputbox : {
        
    }
})

export default FlatListDemo