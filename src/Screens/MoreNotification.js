import React from 'react'
import {View,Text,Image,ScrollView,TouchableOpacity,ToastAndroid} from 'react-native'
import firebase from 'firebase'




class MoreNotificaton extends React.Component{
 

    
       render(){

         console.log(this.props,'propssssssssssss');
        const{Day,Taxt,Title}=this.props.HistoryItem


      

        return (
    <ScrollView style={{borderRadius:20,borderWidth:1,height:100,marginTop:10,marginHorizontal:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{marginLeft:15}}>Title:         {Title}</Text>
        <Text style={{marginRight:15}}>{Day}</Text>
        </View>

        <View>
            <Text style={{marginTop:15,marginLeft:15}}>{Taxt}</Text>
        </View>

    </ScrollView>
        )
        }

}

export default MoreNotificaton
