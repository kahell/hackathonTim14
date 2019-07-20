import React, { Component } from 'react';
import { Container, Toast ,Content, Form, Item, Input, Button, Text,Label } from 'native-base';
import {StyleSheet, View, Image, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class QueueSuccess extends Component {
  
  constructor(props) {
    super(props);
  }

  canceled() {
    Alert.alert(
      'Batalkan Antrian?',
      '',
      [
        {
          text: 'TIDAK',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'YA', onPress: () => {Actions.Home()}},
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <Container>
          <View style={styles.viewImg}>
            <Text style={{textAlign: "center", fontSize: 20, color: "#003d79",
            marginTop: 88, marginBottom: 42}}>Yay, Antrian berhasil di buat!</Text>
            <Image
              source={require('./img/success_checklist.png')}
              style={styles.successImg}
            />
            <Text style={{color:'#b6b8ba', lineHeight: 23, fontSize:14, marginTop: 42, marginLeft: 59, marginRight: 59, textAlign: "center"}}>
              Silahkan datang ke cabang yang dipilih sesuai dengan waktu yang di tentukan.
            </Text>
            <Text style={{marginTop: 24, fontWeight: "bold", fontSize: 16, lineHeight: 24, color: "#333333"}}>
              Cabang Mandiri BSD
            </Text>
            <Text style={{marginTop: 4, fontWeight: "bold", fontSize: 20, lineHeight: 24, color: "#333333"}}>
              Senin, 22 Juli 2019 12:30
            </Text>
            
          </View>
          <View style={{
            flex: 1, justifyContent: 'flex-end',
            marginBottom: 36,
            alignContent: "center",
            alignItems: 'center' }}>

            <Button block 
              onPress={() => {alert}}
              style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: 'center', 
              backgroundColor:"#ffff", 
              borderRadius: 4, 
              position: 'absolute',
              bottom:50, right: 20, left: 20}}
              onPress={() => this.canceled()}
              >
                <Text style={{color:"#67b2e8",fontSize: 16, letterSpacing: 0.2, textAlign: "center"}}>BATALKAN ANTRIAN</Text>
              </Button>

            <Button block style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: 'center', 
              backgroundColor:"#67b2e8", 
              borderRadius: 4, 
              position: 'absolute',
              bottom:0, right: 20, left: 20}}
              onPress={() => {Actions.refresh({ key: Actions.Home() });}}
              >
                <Text style={{fontSize: 16, letterSpacing: 0.2, textAlign: "center"}}>SELESAI</Text>
              </Button>
          </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  viewImg:{
    justifyContent: "center",
    alignContent: "center",
    alignItems: 'center',    
  },
  successImg:{
    height: 184,
    width: 184,
  }
});