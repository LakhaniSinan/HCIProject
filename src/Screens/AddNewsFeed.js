import * as React from 'react';
import { Text, View,Button,TouchableOpacity,ScrollView,TextInput,Image,ToastAndroid } from 'react-native';
import firebase from 'firebase'
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class AddNewsFeed extends React.Component{
    constructor(props){
        super()
            this.state={
                avatarSource:null,VidPath:null,mindtext:''
            
        }
    }
    OnPost = ()=>{
      if(this.state.avatarSource==null && this.state.mindtext=='')
      {
      alert('Please Enter Something')
      }
      else {
      alert('DOne Posting')
    }
  }
    OpenCamera = () => {
      console.log('opencame');
      
      const { avatarSource, VidPath } = this.state
      if (avatarSource === null && VidPath === null) {
        ImagePicker.launchCamera(options, (response) => {
           
            
          if (response.didCancel) {
  
          } else if (response.error) {
  
          }
          
          else {
            console.log(response,'reonse in iopenasdadasd');
            const source = { uri: response.uri };
  
            this.setState({
              avatarSource: source,
          
            });
          }
        })
      }
      else {
        ToastAndroid.showWithGravity('Already Selected', ToastAndroid.LONG,
          ToastAndroid.BOTTOM, 25, 50)
      }
    }
  
  
    OpenGallery = () => {
      console.log('opengalasdas');
      const { avatarSource, VidPath } = this.state
      if (avatarSource === null && VidPath === null) {
  
        const { avatarSource, VidPath } = this.state
        ImagePicker.launchImageLibrary(options, (response) => {
  
          if (response.didCancel) {
  
          } else if (response.error) {
  
          } else if (response.customButton) {
  
          } else {
  
            const source = { uri: response.uri };
            this.setState({
              avatarSource: source,
          
            });
  
  
          }
        })
      }
      else {
        ToastAndroid.showWithGravity('Already Selected', ToastAndroid.LONG,
          ToastAndroid.BOTTOM, 25, 50)
      }
    }
  
  
    selectVideo = () => {
      console.log('VidPath');
      const { avatarSource, VidPath } = this.state
      if (avatarSource === null && VidPath === null) {
        const options = {
          title: 'select an option',
          mediaType: 'video',
          storageOptions: {
            skipBackup: true,
            path: 'images'
          }
        }
        ImagePicker.launchImageLibrary(options, (response) => {
  
          if (response.didCancel) {
  
          } else if (response.error) {
  
          } else if (response.customButton) {
  
          } else {
            this.setState({
              VidPath: response.uri,
              filepath: response,
              post_type: "2",
              attachment_type: "1",
            });
  
          }
        })
      }
      else {
        ToastAndroid.showWithGravity('Already Selected', ToastAndroid.LONG,
          ToastAndroid.BOTTOM, 25, 50)
      }
    }
    Remove = () => {
      this.setState({
        avatarSource: null, VidPath: null,
       
      })
    }
  
    render()
{     
  console.log(this.state);
  
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
     
        <View style={{ borderWidth: 1, flex: 1, borderRadius: 20, marginHorizontal: 5, marginVertical: 10, height: '100%' }}>
          <View style={{ marginLeft: 5, marginRight: 5 }}>
            <TextInput
              placeholder="What's On your Mind?"
              style={{ marginBottom: 8 }}
              multiline={true}
              value={this.state.mindtext}
              onChangeText={mindtext=>this.setState({mindtext})}
              />
          </View>
          <View style={{ position: 'relative', width: '100%' }}>
            {this.state.avatarSource &&
              <View>
                <Image source={this.state.avatarSource}
                  style={{ borderRadius: 20, flex: 1, width: null, height: 350 }} />
              </View>}

            {this.state.avatarSource ?
              <View style={{ position: 'absolute', top: 10, right: 10 }}>
                <TouchableOpacity onPress={this.Remove}>
                  <Image source={require('../assests/quit.png')} style={{ height: 20, width: 20 }} />
                </TouchableOpacity></View> : null}
          </View> 

          <View style={{ position: 'relative', width: '100%' }}>
            {this.state.VidPath &&
              <View>
                <VideoPlayer source={{ uri: this.state.VidPath }}
                  repeat
                  disableBack
                  fullscreen={true}
                  disableFullscreen
                  disableVolume
                  resizeMode="cover"
                  style={{ borderRadius: 20, flex: 1, width: null, height: 350 }} />
              </View>}

            {this.state.VidPath ?
              <View style={{ position: 'absolute', top: 10, right: 10 }}>
                <TouchableOpacity onPress={this.Remove}>
                  <Image source={require('../assests/quit.png')} style={{ height: 20, width: 20 }} />
                </TouchableOpacity></View> : null}
          </View> 
        </View>
        <View>
          <View style={{ paddingLeft: 10 }}>
            <TouchableOpacity
              style={{ flexDirection: 'row', marginBottom: 10 }}
              onPress={this.OpenGallery}>
              <Image source={require('../assests/gallery.png')}
                style={{ height: 30, width: 30 }} />
              <Text style={{ fontSize: 17, marginTop: 5 }}> Photo </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flexDirection: 'row', marginBottom: 10 }}
              onPress={this.OpenCamera}>
              <Image source={require('../assests/camera.png')}
                style={{ height: 30, width: 30 }} />
              <Text style={{ fontSize: 17, marginTop: 5 }}> Take Picture</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 10 }}
              onPress={this.selectVideo}>
              <Image source={require('../assests/film.png')}
                style={{ height: 30, width: 30 }} />
              <Text style={{ fontSize: 17, marginTop: 5 }}> Upload Video </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{ justifyContent: 'center', flexDirection: 'row' }}>
          <TouchableOpacity style={styles.submitButtonView}
            onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.submitButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButtonView}
            onPress={() => {
              this.OnPost()
            }}
          >
            <Text style={styles.submitButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
      }
}