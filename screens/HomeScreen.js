import { View, Text, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Picker } from 'react-native-wheel-pick';
import { StatusBar } from 'expo-status-bar';


let arr = [];

for (let i = 100; i <= 15000; i += 100) {
  arr.push(i);
}

for (let i = 16000; i <= 50000; i += 1000) {
  arr.push(i);
}
const HomeScreen = () => {
    const navigation  = useNavigation()
    const [nv, setNv] = useState("")
    useLayoutEffect(() => {
        navigation.setOptions({
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStatusBarHeight: 0, // To hide the status bar area
        });
    }, []);

    const handleSelect = (value) => {
        setNv(value);
    };
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={{backgroundColor:"#fff", flex:1, justifyContent:"center", alignItems:"center"}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <StatusBar style="dark" />
                <View style={{ alignItems:"center", gap:10}}>
                    {/* <Picker/> */}
                    <Picker
                        selectTextColor='white'
                        style={{ backgroundColor: '#fff', width: 300, height: 215,  }}
                        selectedValue={100}
                        pickerData={arr}
                        onValueChange={value  => setNv(value)}
                    />
                    <TouchableOpacity style={{ paddingHorizontal:10, paddingVertical:5, backgroundColor:"#000", borderRadius:5}} onPress={()=>navigation.navigate("Streaming", {nv:nv})}>
                        <Text style={{color:"#fff"}}>Start Streaming</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default HomeScreen
