import * as React from 'react';
import { Text, View,Button,TouchableOpacity,ScrollView,StyleSheet } from 'react-native';
import firebase from 'firebase'
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';

class Newsfeed extends React.Component{

    render(){
    
    return (
      <ScrollView>
        <TouchableOpacity 
        style={{borderWidth:1,marginHorizontal:10,marginVertical:10,borderRadius:20,height:50,justifyContent:'center'}}
        onPress={()=>this.props.navigation.navigate('AddNewsFeed')}
        >
         <Text style={{fontSize:15,marginLeft:5}}>What is On Your Mind?</Text>
         </TouchableOpacity>


         
      </ScrollView>
    );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
});

export default Newsfeed