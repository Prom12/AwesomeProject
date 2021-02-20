import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {AuthContext} from '../../AuthContext';

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