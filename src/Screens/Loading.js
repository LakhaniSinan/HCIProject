import * as React from 'react';
import { Text, View,ActivityIndicator } from 'react-native';
import firebase from 'firebase'

export default class Loading extends React.Component {
    // componentDidMount(){
    //     firebase.auth().onAuthStateChanged(user=>{
    //         this.props.navigation.navigate(user ? <App)
    //     })
    // }
    render()
{    
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading...</Text>
          <ActivityIndicator size="large"/>
      </View>
    );
}
}