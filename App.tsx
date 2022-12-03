import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import React, { useState } from 'react';
import { 
  StyleSheet, Text,
  View, Button, 
  TextInput, FlatList,
  TouchableOpacity 
} from 'react-native';
import { startDetecting } from 'react-native/Libraries/Utilities/PixelRatio';

 

interface Props {sadsad: string}

export default class App extends Component<Props> {
  render () {
  const [name, settingName] = useState('Angular services')
  const [userService, userServiceInput] = useState('')
  const [services, settingService] = useState([
    {service: 'Education', key:'1'},
    {service: 'Finance', key:'2'},
    {service: 'Insurance', key:'3'},
    {service: 'Transport', key:'4'},
    {service: 'Security', key:'5'},
    {service: 'Health', key:'6'},
    {service: 'Digital', key:'7'},
  ])

  const openHandler = () => {
    settingName('Vue Services'); 
  }

  const openHandler2 = () =>{
    settingName('Angular Services'); 
  }

  // const userInput = () => {
  //   userServiceInput(val);
  // }
  return (
    <View style={styles.container}>
      <Text>Update your Service Providers</Text>
      <Text>{name}</Text>

      <View style={styles.button1}>
        <Button title='Update Service' onPress={openHandler}/>
      </View>
      <View style={styles.button1}>
        <Button title='Revert Service' onPress={openHandler2} />
      </View>

      <View>
        {/* <Text>Enter the Service Over Here :</Text> */}
        <TextInput 
          style={styles.textInput}
          placeholder="Finance Services"
          onChangeText={(val)=>userServiceInput(val)}
        />
        <Text>{userService}</Text>
      </View>

      <View>
      <FlatList
        numColumns={4}
        data={services}
        renderItem={({ item })=> (
          <TouchableOpacity>
            <Text  style={styles.serviceListItems}>{item.service}</Text>
          </TouchableOpacity>
      )}/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50
    // justifyContent: 'center',
  },
  button1: {
    marginTop: 10,
  },
  textInput: {
    borderWidth: 0.9,
    borderRadius: 7,
    borderColor: '#EDEBEA',
    backgroundColor: '#EDEBEA',
    padding: 8,
    margin:10,
    width: 200,
  },
  serviceListItems: {
    // width: 30,
    backgroundColor:'#EDEBEA',
    
    marginBottom: 4,
    // display: 'flex',
    padding: 10,
    marginRight: 5,
    borderRadius: 7,
    // flex: 1,
    // marginHorizontal: 10,
  }
  
});
