import React, { useState } from 'react';
import { 
  Text,
  View,
  TextInput, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
  ScrollView } from 'react-native';
import Icon from '@expo/vector-icons/Entypo';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [km, setKm] = useState();
  const [showResult, setShowResult] = useState(false);
  const regexem = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function calKm () {
    if(km >= 4){
      return "Congratulations!"
    } else {
      return "You need to walk more!"
    }
  }

  const validator = () => {
    if (!name.trim()) {
      return;
    }
    if (!email.trim()) {
      return;
    }
    else if (!regexem.test(email)) {
      return;
    }
    return true;
  }

  const youCanShow = () => {
    if (validator() === true) {
      setShowResult(!showResult)
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('./src/images/running.png')} style={styles.img} />
      <Text style={{
        fontSize: 30,
        fontFamily: "sans-serif-condensed",
        alignSelf: "center",
        top: 30
      }}> How much do you walk a week?  </Text>
      <View style={styles.frm}>
        <Icon name="user" color="#99A3A4"/>
        <TextInput 
          placeholder="Name" 
          style={{paddingHorizontal: 15}}
          onChangeText={name => setName(name)} />
      
      </View>  
      <View style={styles.frm}>
        <Icon name="email" color="#99A3A4" />
        <TextInput 
          placeholder="Email" 
          keyboardType="email-address"
          style={{paddingHorizontal: 15}}
          onChangeText={email => setEmail(email)} />
      </View>

      <View style={styles.frm}>
        <Icon name="location-pin" color="#99A3A4" />
        <TextInput 
          placeholder="KM per week"
          keyboardType="numeric"
          style={{paddingHorizontal:15}}
          onChangeText={km => setKm(km)} />
      </View>
      <TouchableOpacity 
        style={styles.bttn}
        onPress={youCanShow}>
        <Text style={{color: "#355254", fontFamily: "sans-serif-condensed", fontSize: 22}}>Touch me!</Text>
      </TouchableOpacity>
      <ScrollView>
        {showResult ? (
          <View>  
            <Text style={styles.result}>Your name: {name}</Text>
            <Text style={styles.result}>Your email: {email}</Text>
            <Text style={styles.result}>Your KM per week: {km}</Text>
            <Text style={ (calKm() == "Congratulations!") ? styles.cng : styles.walk}>{calKm()}</Text>
          </View>
        ) : null}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFF",
  },
  img: {
    width: "100%",
    height: "40%",
    top: 40,
    resizeMode: "contain",
  },
  frm: {
    flexDirection: "row",
    borderColor: "#99A3A4",
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginHorizontal: 55,
    marginTop: 40,
    alignItems: "center"
  },
  bttn: {
    marginHorizontal: 55,
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#B8EEF3",
    paddingVertical: 1,
    borderRadius: 20,
    width: 200
  },
  result: {
    fontFamily: 'monospace',
    marginHorizontal: 55,
    marginTop: 25,
  },
  walk: {
    fontFamily: 'monospace',
    fontSize: 20,
    color: "red",
    marginHorizontal: 55,
    marginTop: 25
  },
  cng: {
    fontFamily: 'monospace',
    fontSize: 20,
    color: "blue",
    marginHorizontal: 55,
    marginTop: 25
  } 
});

export default App;