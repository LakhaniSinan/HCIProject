import React from 'react'
import {View,ActivityIndicator} from 'react-native'

const Spinner = () =>{
    return (
         <View style={styles.spin}>
             <ActivityIndicator size={"large"}/>
         </View>
    )
}

const styles={
    spin:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginHorizontal:30
    }
}
export default Spinner