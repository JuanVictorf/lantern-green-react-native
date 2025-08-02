import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png';
import symbolOff from './assets/pictures/symbol-off.png';

export default function App() {
  const [Active, setIsActive] = useState(false);

  function handleSymbol(){
    setIsActive((oldValue: boolean)=>{
      return !oldValue;
    });
    console.log("Hello");
  }
  return (
    <View style={Active ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleSymbol}>
        <Image source={Active ? symbolOn : symbolOff}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
