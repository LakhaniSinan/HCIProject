import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';



class Complain extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onClick() {
alert('navigate')
  }
  // header = () => {
  //   return (
  //     <ImageBackground resizeMode="cover" source={require('../../assest/images/kureyHeaderBg.jpg')} style={styles.headerBg}>
  //       <Text style={styles.titleText}> konsultation </Text>
  //     </ImageBackground>
  //   );
  // }
  render() {
    return (
      <View style={styles.mainView}>
      
      
        <View style={styles.container}>
          <View style={styles.TotalKuerybg}>
            <View style={styles.kueryCountView}>
              <Text style={{ color: 'white', fontSize: 20, fontFamily: "lato_regular",fontWeight:'bold'}}>0</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: 'white', fontFamily: "lato_regular",marginTop:-5 }}>Total Complain</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', width: '80%', marginTop: 20}}>
            <View style={styles.openKueryBg}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginTop:7 }}>
                <Text style={{ color: 'white', fontSize: 20, fontFamily: "lato_regular",fontWeight:'bold'}}>0</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: 'white', fontFamily: "lato_regular",marginTop:-5 }}>Open </Text>
              </View>
            </View>
            <View style={styles.closeKueryBg}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginTop:7 }}>
                <Text style={{ color: 'white', fontSize: 20, fontFamily: "lato_regular",fontWeight:'bold'}}>0</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: 'white', fontFamily: "lato_regular",marginTop:-5 }}>Closed </Text>
              </View>
            </View>
          </View>
          <View style={{ width: '70%', marginTop: 15,marginRight:'-10%' }}>
            <TouchableOpacity style={styles.TAOAddKueryBg} onPress={() => this.onClick()}>
              <Image source={require('../assests/signs.png')} style={{height:20,width:25}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles={

    headerBg: {
        width: '100%',
        height: 48 ,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 12 ,
        color: 'white',
        fontFamily: "Typo_Round_Bold_Italic_Demo",
    },
    mainView: {
        flex: 1,
        justifyContent:'center',
        
    },
 
    container: {
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20, alignItems: 'center',justifyContent:'center'
    },
    TotalKuerybg: {
        width: '80%',
        height: 70,
        backgroundColor: '#069dd8',
        marginTop: 50,
        borderRadius: 10,
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    },
    kueryCountView: {
        flex: 1,
        marginTop:9,
        alignItems: 'center',
        justifyContent: 'center'
    },
    openKueryBg: {
        
        flex: 1,
        marginRight:10,
        marginLeft:-0.5,
        marginHorizontal: 5,
        height: 65,
        backgroundColor: '#ab1989',
        borderRadius: 10,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        marginTop:-10
    },
    closeKueryBg: {
        flex: 1,
        height: 65,
        backgroundColor: '#3cbfae',
        borderRadius: 10,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        marginTop:-10
    },
    TAOAddKueryBg: {
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(237,30,121)',
        borderRadius: 45
    }

}



export default Complain
