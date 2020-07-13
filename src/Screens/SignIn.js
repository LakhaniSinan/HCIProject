import React from 'react'
import {View,TextInput,StyleSheet,Text,TouchableOpacity} from 'react-native'
import Header  from '../Components/Header';
import Spinner from '../Components/Spinner'
import firebase from 'firebase'

class SignIn extends  React.Component{
    state={email:'',password:'',loading:false,errormessage:null,name:''}

    handleLogin= ()=>{
        this.setState({errormessage:'',loading:true})
        const{email,password} =this.state
    
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(this.success.bind(this))
        .catch(this.Failed.bind(this))
        } 
        Failed(){
            console.log('Failed',this.state.email,this.state.password)
            this.setState({email:'',password:'',loading:false,errormessage:'Authentication Failed'})
           
         }
        success(){
                this.setState({password:'',loading:false,errormessage:''})
               
            
        }


    renderSomething(){
        if(this.state.loading){
            return <Spinner/>
        }
        return (
            <TouchableOpacity style={styles.button} onPress={this.handleLogin.bind(this)}>
            <Text style={{color:'white',fontWeight:"bold"}}>Sign Up</Text>
        </TouchableOpacity>
        )
    }
    render()
    {
        return (
            <View style={styles.continer }>
            <Header/>
              <View style={{backgroundColor:"white",flex:1,padding:25}}>
            <Text style={{fontSize:18,color:'black',textAlign:'center',marginBottom:10}}> Create Your Account</Text>

               <Text style={{marginBottom:10}}>Name</Text>
                         <TextInput 
                         placeholder="Name"
                         value={this.state.name}
                         onChangeText={name=>this.setState({name})}
                         style={
                             styles.input
                             }
                         ></TextInput>
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
                 <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Text>I Already Have An Account</Text>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Text style={{fontWeight:'bold',marginLeft:5,fontSize:15}}>Login </Text>
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
        backgroundColor:'pink'
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
export default SignIn