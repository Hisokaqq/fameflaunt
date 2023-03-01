import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const Message = ({g, username, message}) => {
    const [pictureUrl, setPictureUrl] = useState('');

    useEffect(() => {
        fetch(`https://api.lorem.space/image/face?w=150&h=150`)
            .then(response => response.blob())
            .then(data => {
              const url = URL.createObjectURL(data);
              setPictureUrl(url);
            })
            .catch(error => {
              console.error(error);
            });
      }, []);
  return (
    <View style={{flexDirection:"row", alignItems:"center", gap:5}}>
        {pictureUrl 
            ?
            <Image  style={{height:41, width:41, borderRadius:500, }} source={{uri:pictureUrl}}/>
            :
            <View style={{height:41, width:41, borderRadius:500, backgroundColor:"#ccc"}}></View>
        }
        <View style={{gap:3}}>
            <Text style={{fontWeight: 500, fontSize: 18, color: "white", textShadowColor: "rgba(0, 0, 0, 0.3)", textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2}}>{username}</Text>
            <Text style={{flexWrap: 'wrap', fontWeight: 400, fontSize: 17, color: "white", textShadowColor: "rgba(0, 0, 0, 0.3)", textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2, width:"60%"}}>{message}</Text>
        </View>
    </View>
  )
}

export default Message