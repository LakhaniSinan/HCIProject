import * as React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import firebase from 'firebase'


export default function Complain(){
    
    
    return (
      <TouchableOpacity onPress={()=>firebase.auth().signOut()}>
        <Text style={{fontSize:15,fontWeight:'bold',marginRight:5}}>SignOut</Text>
      </TouchableOpacity>
    );
}