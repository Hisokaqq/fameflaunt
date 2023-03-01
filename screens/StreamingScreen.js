import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import {Camera, CameraType} from "expo-camera"
import * as MediaLibrary from "expo-media-library"
import { LinearGradient } from 'expo-linear-gradient';
import ChatView from '../components/ChatView';
import { StatusBar } from 'expo-status-bar';

function generateRandomNumberInRange(input) {
  const randomMultiplier = 0.95 + Math.random() * 0.1;
  const randomNumber = Math.round(input * randomMultiplier);
  return randomNumber;
}
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const StreamingScreen = ({route}) => {
    const [nv, setNv] = useState(route.params.nv);

    const [hasCameraPerm, setHasCameraPerm] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.front)
    // const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
    const cameraRef = useRef(null)
  
    useEffect(()=>{
        (async ()=>{
            MediaLibrary.requestPermissionsAsync()
            const cameraStatus = await Camera.requestCameraPermissionsAsync()
            setHasCameraPerm(cameraStatus.status==="granted")

        })() 
    },[])
    const navigation = useNavigation()
    
    const dismissKeyboard = () => {
        Keyboard.dismiss();
      };
  return (
    <View style={{flex:1, backgroundColor:"#000" }}>
      <StatusBar style="light" />

      <TouchableWithoutFeedback onPress={dismissKeyboard} style={{ backgroundColor:"#000",flex:1, }}>
          {/* <View style={{backgroundColor:"#fff", flex:1, borderRadius:10}}> */}
          <View style={{backgroundColor:"#fff", flex:1, borderTopRightRadius:10,borderTopLeftRadius:10, marginTop:70 , position:"relative", overflow:"hidden"}}>
              
              <View style={{position:"absolute", top:20, left: 5, flexDirection: "row", alignItems:"center",justifyContent:"space-between" ,width:"100%", paddingHorizontal:5, zIndex:3}}>
                  <TouchableOpacity onPress={() => {
                  setType(
                    type == CameraType.back ? CameraType.front : CameraType.back
                  );
                }}>
                  <Text>
                  <Icon name="cached" size={40} color="white" />
                  </Text>
                  </TouchableOpacity>
                  <View style={{flexDirection:"row", gap:7}}>
                  <TouchableOpacity style={{borderRadius:5, alignItems:'center', justifyContent:"center" }}>
                      <LinearGradient
                          colors={['#C50384', '#DC013C']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          style={{ padding: 12,paddingVertical:8, borderRadius: 5 }}
                      >
                          <Text style={{color:"#fff", fontWeight: 700, fontSize:17}}>LIVE</Text>
                      </LinearGradient>
                  </TouchableOpacity>
                      <View style={{backgroundColor:"rgba(104, 104, 104, 0.3)", paddingHorizontal: 10, paddingVertical:8, borderRadius:5, flexDirection:"row",alignItems:'center', justifyContent:"center", gap:3 }}>
                      <Icon strokeWidth={1.5} name="visibility" type="outline"   size={15} color="#fff"/>
                          <Text style={{color:"#fff", fontWeight: 700, fontSize:17}}>
                          {formatNumberWithCommas(nv)}
                          </Text>
                      </View>
                  </View>
                  <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                      <Text style={{color:"#fff", fontWeight: 700, fontSize:23, marginRight:13}}>End</Text>
                  </TouchableOpacity>
              </View>
              <View style={{flex:1}}>
                  <Camera ref={cameraRef}  type={type} style={{flex:1}}/>
              </View>
              <ChatView nv={nv} setNv={setNv}/>
          </View>
          {/* </View> */}
      </TouchableWithoutFeedback>
    </View>
  )
}


  
  
export default StreamingScreen
