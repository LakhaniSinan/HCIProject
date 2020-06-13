import React, { Component } from 'react'

import {
  View,
  Text,
  ImageBackground, TouchableOpacity, Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class Header extends Component {
 
  render() {
    
    return (
      <LinearGradient 
        colors={['#a82389', '#0896d4']}
        start={{ x: 0, y: 2 }} end={{ x: 1.0, y: 1.0 }}
        style={styles.mainborder2}
      >
      <View style={{width:'100%',}}>
      <View style={styles.imageContainer}>
            <ImageBackground
              source={this.props.source}
              imageStyle={styles.icon}
              style={styles.imageContainer}>
            <Text style={styles.text}>Welcome To Talk A Lot </Text>
              </ImageBackground>
          </View>
      </View>
       
      </LinearGradient>
    );
  }
}

const styles={
    imageContainer: {
        width: '100%',
        marginTop:10,
        paddingLeft: 1 ,
        borderRadius: 80
      },
      main: {
        width: '100%',
        borderRadius: 10,
        flexDirection: 'row',
      },
      mainborder2: {
      paddingHorizontal: 0 ,
      paddingVertical: 50,
      width: '100%',
      height: 20 ,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#EFEFEF',
      alignItems: 'center',
      alignSelf: 'center',
      zIndex: 999,
  
    },
    text: {
        fontSize: 20,
        marginTop:-30,
        color: '#ffffff',
        alignItems: 'center',
        alignSelf: "center",
        paddingLeft: 10,
        fontFamily: "lato_regular",
        fontWeight:'bold'
      },
}


export default Header;

