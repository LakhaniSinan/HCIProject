import * as React from 'react';
import { Text, View,TextInput,TouchableOpacity,ToastAndroid } from 'react-native';
import firebase from 'firebase'

export default class MoreComplain extends React.Component {
  
    constructor(props){
        super()
        {
            this.state={
                complain:'',dep:''
            }
        }
    }

    called = ()=>{
        const date = new Date().getDate()
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();

        const {}=this.state
        if(this.state.complain==''||this.state.dep=='')
        {
            ToastAndroid.showWithGravity('Please Fill Every Detail',ToastAndroid.LONG,
            ToastAndroid.BOTTOM,25,50)
        }
        else{
            firebase.database().ref(`complains`).push({
                complain:this.state.complain,dep:this.state.dep,date,month,year
            })
            ToastAndroid.showWithGravity('Complain Submitted',ToastAndroid.LONG,
            ToastAndroid.BOTTOM,25,50)
            this.props.navigation.goBack()
        }
    }
    render()
{    
    return (
      <View style={{marginTop:10,paddingHorizontal:15}}>
          <View style={{flexDirection:'row'}}>
          <Text style={{marginTop:14,fontSize:18}}>Complain</Text>
         <TextInput
              placeholder="Complain:"
              style={{ marginBottom: 8,marginTop:5,paddingLeft:10 }}
              multiline={true}
              value={this.state.complain}
              onChangeText={complain=>this.setState({complain})}
              />
              </View>
              <View style={{flexDirection:'row'}}>
              <Text style={{marginTop:14,fontSize:18}}>Department</Text>
                <TextInput
              placeholder="Department:"
              style={{ marginBottom: 8,marginTop:5,paddingLeft:10 }}
              multiline={true}
              value={this.state.dep}
              onChangeText={dep=>this.setState({dep})}
              />
     </View>
     <View style={{marginTop:150}}>
<TouchableOpacity style={styles.button} onPress={this.called}>
 <Text style={{fontSize:25,fontWeight:'bold',fontStyle:'italic',color:'white'}}>
     Submit Complain
 </Text>
</TouchableOpacity>
</View>
      </View>
    );
}
}

const styles={
    submitButtonView: {
        backgroundColor: '#a437a0',
        paddingHorizontal: 35,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 10
      },
      submitButtonText: {
        color: 'white',
        fontWeight: "500",
        fontFamily: "lato_regular"
      },
      button:{
        marginHorizontal:30,
        backgroundColor:"#3e8e8a",
        borderRadius:4,
        height:52,
   
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'stretch',
        marginTop:20,
    }
}