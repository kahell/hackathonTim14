import React, { Component } from 'react';
import { Container, Toast ,Content, Form, Item, Input, Button, Text } from 'native-base';
import {StyleSheet, Alert} from 'react-native';

export default class Register extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      message: "",
      errors: {},
      show: true,
      showToast: false,
    };

  }

  onSubmit() {
    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    console.log(user);
    if(user.username == '' || user.password == ''){
      Alert.alert(
        'Oops Sorry!',
        'Username or Password Can Not Empty',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    }else{
      Alert.alert(
        'Success Register!',
        'Success',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    }
    
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item >
              <Input 
              placeholder="Username" 
              value={this.state.username}
              onChangeText={(username) => this.setState({username})}
              />
            </Item>
            <Item last>
              <Input 
              secureTextEntry={true} placeholder="Password" 
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
              />
            </Item>
            <Button 
            style={styles.lButton}
            onPress={() => this.onSubmit()}
            >
              <Text style={{fontSize: 16, letterSpacing: 0.2}}>REGISTER</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  lButton: {
    flex:1,
    backgroundColor: '#67b2e8',
    marginTop: 25,
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
  }
});