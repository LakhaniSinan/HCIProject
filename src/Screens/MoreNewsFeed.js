import React from 'react'
import {View,Text, Image,ScrollView,TouchableOpacity,ToastAndroid} from 'react-native'
import firebase from 'firebase'




class MoreNewsFeed extends React.Component{
 

    constructor(props)
    {
        super()
            this.state={
                
                 like:props.HistoryItem.like,
                 count:props.HistoryItem.count,
                 re:1
        }
    }
    submit()
    {
    
        this.setState({like:!this.state.like})
          if(this.state.like!=false)
         {
        this.setState({count:this.state.count+1})
         }
         if(this.state.like==true&&this.state.count>0)
         {
             this.setState({count:this.state.count-1})
         }
      else{
        ToastAndroid.showWithGravity('You Have ALready Liked it',ToastAndroid.LONG,
        ToastAndroid.BOTTOM,25,50)
      }
      firebase.database().ref(`1`).update({
          like:this.state.like,count:this.state.count

      })

    }
       render(){

         console.log(this.props,'propss');
        const{avatarSource,like,mindtext,count}=this.props.HistoryItem


      

        return (
    <ScrollView style={{margin:5,padding:5}}>
       
    <View>
    <Text style={{marginBottom:20,marginHorizontal:15}}>{mindtext}</Text>
    <Image source={avatarSource}
                  style={{ flex: 1, width: null, height: 320 }} />
                  
    </View>

    <View style={{marginTop:10,flexDirection:'row'}}>

        
    {this.state.like==false? <Image 
    source={require('../assests/like.png')} 
    resizeMode="cover" 
    style={{height:32,marginTop:5}}/> : <Image  source={require('../assests/liked.png')}/>}
    <TouchableOpacity  onPress={this.submit.bind(this)}>
      <Text style={{fontSize:22,marginLeft:5,marginTop:5}}>Like</Text>
    </TouchableOpacity>
    <Text style={{marginLeft:130,marginTop:10,fontSize:20}}>Total Likes {this.state.count}</Text>
    </View>
    </ScrollView>
        )
        }

}

export default MoreNewsFeed
