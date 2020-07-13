import * as React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import firebase from 'firebase'


export default function Complain(){
    
    
    return (
      <TouchableOpacity onPress={()=>firebase.auth().signOut()} style={{borderWidth:1,padding:5,marginRight:5}}>
        <Text style={{fontSize:15,fontWeight:'bold',marginRight:5,color:'white'}}>SignOut</Text>
      </TouchableOpacity>
    );
}