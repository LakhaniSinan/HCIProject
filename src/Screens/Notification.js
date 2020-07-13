import * as React from 'react';
import { Text, View } from 'react-native';
import MoreNotificaton from './MoreNotification'
import firebase from 'firebase'
export default class  Notification extends React.Component{
  constructor() {
    super();
    this.state = {
      History: {},
      presentHistory: '',
    };
  }
componentDidMount(){
    firebase.database().ref(`notifcation/`).on('value',snapshot=>{
        let data = snapshot.val() ? snapshot.val() : {};
        let HistoryItems = {...data};
        this.setState({
            History: HistoryItems,
          }); 
})
}
    render()
{    
  let keys=Object.keys(this.state.History)
    return (
      <View style={{backgroundColor:'white',flex:1}}>
       {keys.length > 0 ? (
              keys.map(key =>(
                 <MoreNotificaton
                 key={key}
                 HistoryItem={this.state.History[key]}
                 />
              ))
              
            ) : (
                <View style={{flex:1,alignItems:'center',marginTop:250}}> 
                  <Text style={{fontSize:20,fontWeight:'bold'}}>No Notification</Text>
                  </View>
            )}
      </View>
    );
}
}
