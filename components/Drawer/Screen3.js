import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {AuthContext} from '/Users/Prom/AwesomeProject/AuthContext';

const Screen =()=>{
    const {signOut} = React.useContext(AuthContext);
    return (
        <View>
            <TouchableOpacity onPress={() => signOut()}>
                <Text>Screen1</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Screen;