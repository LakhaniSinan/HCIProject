import * as React from 'react';
import { Text, View,TextInput,TouchableOpacity } from 'react-native';
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
    render()
{    
    return (
      <View style={{marginTop:10}}>
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
     
<TouchableOpacity style={styles.button}>
 <Text style={{fontSize:25,fontWeight:'bold',fontStyle:'italic',color:'white'}}>
     Submit Review
 </Text>
</TouchableOpacity>
         
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
        backgroundColor:"#FF0000",
        borderRadius:4,
        height:52,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'stretch',
        marginTop:20,
    }
}