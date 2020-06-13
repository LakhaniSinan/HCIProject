import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet

}
from 'react-native';


export default class Logo extends Component{
    render()
    {
        return(
            <View style={styles.container}>
            <Image style={{width:200, height:200,bottom:40}}
            source={require('./logo.png')}
            />
            </View>
        )
    }
}




const styles = StyleSheet.create({

    container : {
      backgroundColor: '#2196f3',
      
      alignItems : 'center',
      justifyContent : 'center'

    },

    
  });