import React, { useState } from 'react'
import {View, Text, FlatList, StyleSheet,TouchableOpacity } from 'react-native'

const TodoList = () => {
    const list =[
        {name:'Shanil',key:'1'},
        {name:'Anand',key:'2'},
        {name:'Febin',key:'3'},
        {name:'Rizwan',key:'4'},
        {name:'Shanil',key:'5'},
        {name:'Anand',key:'6'},
        {name:'Febin',key:'7'},
        {name:'Rizwan',key:'8'},
        {name:'Anand',key:'9'},
        {name:'Febin',key:'10'},
        {name:'Shanil',key:'11'},
        {name:'Anand',key:'12'},
        {name:'Febin',key:'13'},
        {name:'Rizwan',key:'14'},
        {name:'Shanil',key:'15'},
        {name:'Anand',key:'16'},
        {name:'Febin',key:'17'},
        {name:'Rizwan',key:'18'},
        {name:'Anand',key:'19'},
        {name:'Febin',key:'20'},
        {name:'Rizwan',key:'21'},
    ];
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Flat List</Text>
            </View>
            <View style={{flex:1}}>
                <FlatList 
                    data={list}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.text}>{item.name}</Text> 
                        </TouchableOpacity>    
                    )}    
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : 'darkorange'
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
        color : 'darkred',
        fontWeight : 'bold'
    },
    item : {
        fontSize : 16,
        padding : 20,
        color : 'darkred',
        fontWeight : 'bold',
        marginBottom : 15,
        backgroundColor : 'orange',
        borderRadius : 10,
        marginHorizontal : 20,
        elevation : 10,
        marginTop : 10
    },
    text : {
        fontSize : 18,
        fontWeight : 'bold',
        color:'darkred'
    }
})
export default TodoList;
