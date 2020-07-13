import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Newsfeed from './src/Screens/Newsfeed'
import Notification from './src/Screens/Notification'
import Complain from './src/Screens/Complain'
import Chat from './src/Screens/Chat'
import firebase from 'firebase'
import {createStackNavigator} from '@react-navigation/stack'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import LoginForm from './src/Screens/LoginForm'
import Loading from './src/Screens/Loading'
import SignOut from './src/Screens/SignOut'

import MoreComplain from './src/Screens/MoreComplain'
import AddNewsFeed from './src/Screens/AddNewsFeed'
import SignIn from './src/Screens/SignIn'
import Fire from './src/Components/Fire'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { color } from 'react-native-reanimated';

const Stack= createStackNavigator()
const MaterialBottom = createMaterialBottomTabNavigator()

function AuthStack() {
  return <Stack.Navigator>
     <Stack.Screen 
     name="Login" 
     component={LoginForm}
     options={{headerShown:false}}
     />

     <Stack.Screen
     name="SignIn"
     component={SignIn}
     options={{headerShown:false}} />
 </Stack.Navigator>
 }

 function AppStack() {
  return <MaterialBottom.Navigator>
  <MaterialBottom.Screen name="Home" component={HomeStack} 
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
  <MaterialBottom.Screen name="Complain" component={ComplainStack}
   options={{
    tabBarLabel: 'Complain',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="emoticon-sad-outline" color={color} size={26} />
    ),
  }}
  />
  <MaterialBottom.Screen name="Notification" component={NotificationStack} 
   options={{
    tabBarLabel: 'Notification',
    tabBarIcon: ({ color }) => (
      <MaterialIcons name="notifications" color={color} size={26} />
    ),
  }}
  />
  <MaterialBottom.Screen name="Chat" component={ChatStack} 
   options={{
    tabBarLabel: 'Chat',
    tabBarIcon: ({ color }) => (
      <MaterialIcons name="chat" color={color} size={26} />
    ),
  }}
  />

  </MaterialBottom.Navigator>
}
function Load() {
  return <Stack.Navigator>
    <Stack.Screen
    name="Loading"
    component={Loading}
    options={{headerShown:false}}/>
  </Stack.Navigator>
}


const  HomeStack = ()=>
{
  
  return <Stack.Navigator>
  <Stack.Screen 
  name="Home" 
  component={Newsfeed}
  options={{
  headerRight:()=><SignOut/>,
    headerTitleAlign:'center',
    headerTitle:"News",
      headerStyle:{
    backgroundColor:'#3e8e8a',
    color:'white'
  },
  headerTintColor:'white'
  }}
  
  />
     {/* <Stack.Screen 
  name="MoreNewsFeed" 
  component={MoreNewsFeed}
  options={{
 
    headerTitleAlign:'center',
    headerTitle:"AddNewsFeed",
      headerStyle:{
    backgroundColor:'#3e8e8a'
  }
  }}

  /> */}
   <Stack.Screen 
  name="AddNewsFeed" 
  component={AddNewsFeed}
  options={{ 
   
    headerTitleAlign:'center',
    headerTitle:"AddNewsFeed",
      headerStyle:{
    backgroundColor:'#3e8e8a',
    color:'white'
    
  },
  headerTintColor:'white'
  }}

  />
</Stack.Navigator>
}

const  ComplainStack = ()=>
{
  
  return <Stack.Navigator>
  <Stack.Screen 
  name="Complain" 
  component={Complain}
  options={{  headerTitleAlign:'center',
  headerTitle:"Complain",
  headerStyle:{
    backgroundColor:'#3e8e8a'
  },  headerTintColor:'white'
}}

  />
    <Stack.Screen 
  name="MoreComplain" 
  component={MoreComplain}
  options={{  headerTitleAlign:'center',
  headerTitle:"Complain",
  headerStyle:{
    backgroundColor:'#3e8e8a'
  },  headerTintColor:'white'
}}

  />
</Stack.Navigator>
}

const  NotificationStack = ()=>
{
  
  return <Stack.Navigator>
  <Stack.Screen 
  name="Home" 
  component={Notification}
  options={{  headerTitleAlign:'center',
  headerTitle:"Notification",
  headerStyle:{
    backgroundColor:'#3e8e8a'
  },
   headerTintColor:'white'
}}
  />
</Stack.Navigator>
}
const  ChatStack = ()=>
{
  
  return <Stack.Navigator>
  <Stack.Screen 
  name="Home" 
  component={Chat}
  options={{  headerTitleAlign:'center',
  headerTitle:"Chat",
  headerStyle:{
    backgroundColor:'#3e8e8a'
  },  headerTintColor:'white'
}}
  />
</Stack.Navigator>
}


export default class App extends Component{

  state = {
    isLoggedIn: true,
    user:false
}

 
 
componentDidMount(){
  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      console.log(user,'if');
      
      this.setState({user:true })
    } else {
      this.setState({ user:false })
           console.log('else');
    }
  })
  setTimeout(() => {
   this.setState({isLoggedIn:false})
    }, 3000);
}


render()
  {
    return(
      
    <NavigationContainer> 
    {this.state.user ? <AppStack/> : this.state.isLoggedIn ? <Load/> : <AuthStack/>}
   </NavigationContainer>
    );
  }
}

