import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Title, Text, List, ListItem, Thumbnail } from 'native-base';
import {StyleSheet, View, Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
export default class HeaderTextExample extends Component {

  render() {
    
    return (
      <Container style={{backgroundColor: '#f8f8f8'}}>
        <Header style={styles.containerHeader} >
          <Text style={styles.header}><Text style={styles.headerBold}>mandiri</Text> online</Text>
        </Header>

        <View style={{backgroundColor: '#f8f8f8',}}>

          <View style={styles.heading}>

            <View style={{flex: 1, flexDirection: 'row',
          justifyContent:'space-around'}}>

              <View style={styles.box}>
                <Image
                  source={require('./img/id.png')}
                  style={styles.currency}
                />
                <Text style={{paddingLeft: 12, color:"#b6b8ba", fontSize:15}}>Saldo IDR</Text>
                <Text style={{paddingLeft: 12, color: "#333333", fontSize:20}}><Text style={{color:"#b6b8ba", fontSize: 12, marginTop: 120}}>IDR</Text> 233.100.000</Text>
                <Button transparent style={styles.btnBox}>
                  <Text style={styles.bTxtBox}>Detail</Text>
                </Button>
              </View>

              <View style={styles.box}>
                <Image
                    source={require('./img/uk.png')}
                    style={styles.currency}
                  />
                <Text style={{paddingLeft: 12, color:"#b6b8ba", fontSize:15}}>Saldo USD</Text>
                <Text style={{paddingLeft: 12, color: "#333333", fontSize:20}}><Text style={{color:"#b6b8ba", fontSize: 12, marginTop: 120}}>USD</Text> 1666,20</Text>
                <Button transparent style={styles.btnBox}>
                  <Text style={styles.bTxtBox}>Detail</Text>
                </Button>
              </View>

            </View>

          </View>

          <View style={{marginTop: 80, backgroundColor: '#fff'}}>
              <Text style={{paddingTop: 15, paddingBottom: 15, paddingLeft: 16, fontWeight: 'bold'}}>Antrian Pelanggan</Text>
          </View>

          <View style={{marginTop: 20}}>
            <TouchableOpacity block style={{marginLeft: 15, marginRight: 15, backgroundColor: '#f8f8f8', justifyContent: 'center',
            borderWidth: 1,
            borderColor: "#67b2e8",
            borderStyle: "dashed"}}>
              <Text style={{color: '#67b2e8', textAlign:'center', fontSize: 16, letterSpacing: 0.2, paddingTop: 10, paddingBottom: 10}}>BUAT ANTRIAN BARU</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={{marginTop:15}}>
            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail  source={require('./img/ic_circle_queue_6.png')} />
                </Left>
                <Body>
                  <Text>Bank Mandiri Cabang BSD</Text>
                  <Text note>Antrian pembuatan KPR</Text>
                  <Text>20 July 2019 12:00 PM </Text>
                </Body>
                <Right style={{position: 'absolute', bottom: 0, right: 0}}>
                  <Text note>3 Hour 20 Mins </Text>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail  source={require('./img/ic_circle_queue_12.png')} />
                </Left>
                <Body>
                  <Text>Bank Mandiri Cabang Bekasi Timur</Text>
                  <Text note>Antrian Cetak Buku</Text>
                  <Text>21 July 2019 12:00 PM </Text>
                </Body>
                <Right style={{position: 'absolute', bottom: 0, right: 0}}>
                  <Text note>1 Day 22:10 </Text>
                </Right>
              </ListItem>
            </List>
          </ScrollView>
          
        </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: '#003d79',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  header:{
    color: "#ffffff",
    fontSize: 24,
    paddingTop: 12,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    fontWeight: 'normal'
  },
  headerBold:{
    color: "#ffffff",
    fontSize: 24,
    paddingTop: 12,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    fontWeight: 'bold'
  },
  heading:{
    backgroundColor: "#003d79",
    height: 139
  },
  box:{
    width: 176, 
    height: 156, 
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 22,
  },
  currency:{
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
  },
  btnBox:{
    backgroundColor: "#fff",
    borderWidth: 0,
  },
  bTxtBox:{
    color: '#003d79'
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: null,
    height: null,
  },
});