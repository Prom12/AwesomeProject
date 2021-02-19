import React from 'react';
import {TextInput,StyleSheet} from 'react-native';

export default Input=(props)=> {
    return (
            <TextInput
                style ={styles.input}
                placeholder={props.placeholder}
                >
            </TextInput>
        
    )
}

styles = StyleSheet.create({
    input:{
        padding:4,
        borderBottomWidth:2,
        borderBottomColor:'gray',
        marginBottom:5,
        marginTop:3,
    }
}) 