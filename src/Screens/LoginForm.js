import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
}
from 'react-native';
import Spinner from '../Components/Spinner'
import firebase from 'firebase'
import Logo from '../assests/Logo';
import Header  from '../Components/Header';

export default class LoginForm extends Component{
    
    state={email:'',password:'',loading:false,errormessage:'' }

    handleLogin= ()=>{
        this.setState({errormessage:'',loading:true})
        const{email,password} =this.state
    
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.success.bind(this))
        .catch(this.Failed.bind(this))
        } 
        Failed(){
            console.log('Failed',this.state.email,this.state.password)
            this.setState({email:'',password:'',loading:false,errormessage:'Authentication Failed'})
           
         }
        success(){
                this.setState({password:'',loading:false,errormessage:''})
            console.log('success');
            
        }
    renderSomething(){
        if(this.state.loading){
            return <Spinner/>
        }
        return (
            <TouchableOpacity style={styles.button} onPress={this.handleLogin.bind(this)}>
            <Text style={{color:'white',fontWeight:"bold"}}>Login</Text>
        </TouchableOpacity>
        )
    }
    render(){
        return(
            <View style={styles.continer }>
               <Header/>
                 <View style={{backgroundColor:"white",flex:1,padding:25}}>
               <Text style={{fontSize:18,color:'black',textAlign:'center',marginBottom:10}}> Login To Your Account</Text>
                            <Text style={{marginBottom:10}}>Email</Text>
                            <TextInput 
                            placeholder="Email"
                            value={this.state.email}
                            onChangeText={email=>this.setState({email})}
                            style={
                                styles.input
                                }
                            ></TextInput>
         
    
               
                            <Text style={{marginBottom:10,marginTop:10}}>Password</Text>
                            <TextInput 
                                    placeholder="Password"
                                    value={this.state.password}
                                     onChangeText={password=>this.setState({password})}
                                     style={styles.input}
                                     secureTextEntry
                                     />
                        
                       
                    <View style={styles.errormessage}>
                    <Text style={{color:'#E9446A',fontSize:13,fontWeight:"600",textAlign:'center'}}>{this.state.errormessage}</Text>
                    </View>
                    {this.renderSomething()}
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:15}}>
               <Text>Don't Have An Account ?</Text>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignIn')}>
                 <Text style={{fontWeight:'bold',marginLeft:5,fontSize:15}}>Sign Up</Text>
             </TouchableOpacity>
           </View>
                    </View>
                        
                     
                    </View>
                  
                    
         

           
        )
    }
}


const styles={
    input:{
        borderBottomColor:"#8A8F9E",
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        color:'#161F3D'
    },
    continer:{
        flex:1,
      
 },
    button:{
        marginHorizontal:30,
        backgroundColor:"#3e8e8a",
        borderRadius:4,
        height:52,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'stretch',
        marginTop:10,
        borderRadius:10
    }
}