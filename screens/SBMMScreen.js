import React from 'react';
import { Text, View, Button } from 'react-native';

const SBMM = ({ navigation }) => {
  
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
            SBMM
        </Text>        
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('SBMM')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    )
  }
  
  export default SBMM;