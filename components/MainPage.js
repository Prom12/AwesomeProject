import React from 'react';
import {View,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import Card from './RepeatedComponents/Card';

function MainPage({navigation}){
    
    return (
        <View>
            <ScrollView>
            <TouchableOpacity 
            onPress={() => {navigation.navigate('H')}}>
                <Card 
                    image = {require('../assets/internal.jpg')}
                    title = 'Food1'
                    amount = '$230'
                    detail = 'detail'/>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {navigation.navigate('H')}}>
                <Card 
                    image = {require('../assets/internal.jpg')}
                    title = 'Food1'
                    amount = '$230'
                    detail = 'detail'/>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {navigation.navigate('H')}}>
                <Card 
                    image = {require('../assets/internal.jpg')} 
                    title = 'Food1'
                    amount = '$230'
                    detail = 'detail'/>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {navigation.navigate('H')}}>
                <Card 
                    image = {require('../assets/internal.jpg')}
                    title = 'Food1'
                    amount = '$230'
                    detail = 'detail'/>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {navigation.navigate('H')}}>
                <Card 
                    image = {require('../assets/internal.jpg')}
                    title = 'Food1'
                    amount = '$230'
                    detail = 'detail'/>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {navigation.navigate('H')}}>
                <Card 
                    image = {require('../assets/internal.jpg')}
                    title = 'Food1'
                    amount = '$230'
                    detail = 'detail'/>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {navigation.navigate('H')}}>
                <Card 
                    image = {require('../assets/internal.jpg')}
                    title = 'Food1'
                    amount = '$230'
                    detail = 'detail'/>
            </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default MainPage;

styles = StyleSheet.create({
    body:{
        marginTop:30,
        backgroundColor:'gray',
        flex:1,
        flexDirection:'row',
    }
})