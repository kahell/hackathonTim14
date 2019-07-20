import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Title } from 'native-base';
export default class ChooseBank extends Component {
  render() {
    return (
      <Container>
        <Header style={{justifyContent: "center",backgroundColor: '#ffffff'}}>
          <Title style={{color: '#333333', fontSize:15, position:'absolute',left: 16, top: 18, bottom: 14}}>Pilih Bank Terdekat</Title>
        </Header>
        <Content>
          <List>
            <ListItem avatar> 
              <Left>
                <Thumbnail source={require('./img/ic_bank.png')} />
              </Left>
              <Body>
                <Text style={{fontSize:16}}>Mandiri Cabang BSD</Text>
                <Text note style={{marginTop: 5, fontSize:14, color:'#333333'}}>32 KM</Text>
              </Body>
              <Right style={{position:"absolute", bottom:0, right: 0}}>
                <Text style={{fontSize: 14, color: '#333333'}}>12 Slot</Text>
              </Right>
            </ListItem>
            <ListItem avatar> 
              <Left>
                <Thumbnail source={require('./img/ic_bank.png')} />
              </Left>
              <Body>
                <Text style={{fontSize:16}}>Mandiri Cabang Serpong</Text>
                <Text note style={{marginTop: 5, fontSize:14, color:'#333333'}}>32 KM</Text>
              </Body>
              <Right style={{position:"absolute", bottom:0, right: 0}}>
                <Text style={{fontSize: 14, color: '#333333'}}>8 Slot</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}