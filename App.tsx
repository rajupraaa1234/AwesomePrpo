/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import myCustomModule from './myCustomModule';
import {

  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';



const App = () =>{
  return (
    <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
      <Button title='click' onPress={()=>{myCustomModule.printMethod()}}/>
       <Text>Hello Raju</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
