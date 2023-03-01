import { View, Text, KeyboardAvoidingView, ScrollView, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Message from './Message';
function generateRandomNumberInRange(input) {
  const randomMultiplier = 0.95 + Math.random() * 0.1;
  const randomNumber = Math.round(input * randomMultiplier);
  return randomNumber;
}

const messages = [
  "Hey everyone, thanks for joining!",
  "How's everyone doing today?",
  "Let me know where you're tuning in from! 🌍",
  "I'm excited to be here live with you all!",
  "Don't forget to hit that follow button if you like my content! 👍",
  "Who else loves Instagram Live?",
  "Thanks for all the hearts and likes! ❤️",
  "I'm answering your questions live today, so fire away! 🔥",
  "I love connecting with my followers on IG Live!",
  "Let's get this party started!",
  "What's everyone up to today?",
  "Shoutout to my top fans who are always tuning in!",
  "I appreciate all the support you guys give me!",
  "I've got some exciting news to share with you all today!",
  "Can't wait to see all your comments and questions!",
  "I'm so grateful for all the amazing opportunities Instagram has given me!",
  "Who's ready to learn something new today?",
  "I'm going to be doing a live Q&A in a few minutes, so get your questions ready! 🎤",
  "I love seeing all the positivity in the comments! 😊",
  "Let's spread some love and positivity today!",
  "Who else is having a great day today?",
  "I'm always amazed by how diverse and interesting my followers are!",
  "Thanks for all the support, you guys are the best!",
  "I'm going to be doing a special giveaway today, so stay tuned!",
  "Can't wait to see all your selfies and shoutouts in the comments!",
  "Thanks for all the hearts and virtual gifts! 💖",
  "Who else is addicted to Instagram Live?",
  "I'm so excited to be here with you guys today! 😍",
  "I'm blown away by all the amazing talent on Instagram!",
  "Let's take a moment to appreciate all the hard work that goes into creating great content!",
  "Thanks for all the positive"
  ]



const usernames = [
  "LunarLass",
  "GypsyGoddess",
  "RainbowRider",
  "ForestFairy",
  "MermaidMuse",
  "SunflowerSoul",
  "WildflowerWanderer",
  "MidnightMoon",
  "SunkissedSiren",
  "JungleJane",
  "DesertRose",
  "StarlightSparkle",
  "EnchantedElf",
  "OceanOasis",
  "MountainMist",
  "MysticalMermaid",
  "SunsetSailor",
  "AuroraAdventurer",
  "MoonlightMagic",
  "PolarisPioneer",
  "IslandExplorer",
  "CactusCruiser",
  "EvergreenExplorer",
  "MajesticMeadow",
  "NomadicNectar",
  "ButterflyBabe",
  "NatureNurturer",
  "SkySinger",
  "DaisyDreamer",
  "CherryBlossom",
  "RaindropReflection",
  "FreeSpirit",
  "GoldenGoddess",
  "WildernessWonder",
  "AutumnAdventurer",
  "MysticMountaineer",
  "BloomBabe",
  "HappyHiker",
  "DreamyDove",
  "WhimsicalWanderlust"
];



const ChatView = ({nv, setNv}) => {
  const scrollViewRef = useRef(null);
  
    const [viewers, setViewers] = useState([1,2,3,4,5,6,7]);
    const [input, setInput] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prevViewers => [...prevViewers, prevViewers.length + 1]);
        scrollViewRef.current !==null && scrollViewRef.current.scrollToEnd({ animated: true });
        // console.log(scrollViewRef.current)
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval2 = setInterval(() => {
      setNv(generateRandomNumberInRange(nv))
    }, 4000);
    return () => clearInterval(interval2);
  }, []);
  const inputRef = useRef(null);
  const handleViewPress = () => {
    inputRef.current.focus();
  };

  function getRandomUsername(usernamesArray) {
    const randomIndex = Math.floor(Math.random() * usernamesArray.length);
    return usernamesArray[randomIndex];
  }

  return (
    <KeyboardAvoidingView style={{height:"45%", gap: 10, width:"100%", position:"absolute", bottom:0, zIndex:3}} behavior="padding" keyboardVerticalOffset={400}>
      <View style={{height: 250}}>
        <ScrollView  ref={scrollViewRef} style={{ paddingHorizontal:10, gap:20 }}>
          <View style={{  gap: 10 }}>
            
            {viewers.map((v, index) => (
              <Message key={index} g={Math.random() < 0.5 ? "male" : "female"} username={usernames[index%(usernames.length)]} message={messages[index%(messages.length)]}/>
            ))}
          </View>
      </ScrollView>
        </View>
        <TouchableWithoutFeedback onPress={handleViewPress}>
      <View style={{borderWidth: 1, borderColor: 'white', width: '95%', height: 60, borderRadius: 100, alignSelf:'center',marginBottom:20, padding:10, paddingHorizontal:15, flexDirection:"row", alignItems:"center"}}>
        <TextInput 
          ref={inputRef}
          style={{flex: 1, color:"white", fontSize:20}}
          onSubmitEditing={() => setInput('')}
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{backgroundColor: 'white', height: 4, width: 4, borderRadius: 2, marginRight: 5}} />
          <View style={{backgroundColor: 'white', height: 4, width: 4, borderRadius: 2, marginRight: 5}} />
          <View style={{backgroundColor: 'white', height: 4, width: 4, borderRadius: 2, marginRight: 4}} />
          
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default ChatView