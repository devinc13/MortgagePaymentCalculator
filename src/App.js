import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import {getMonthlyPayment} from './Utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      principal: '',
      amortization: '',
      interestRate: ''
    };
  }

  handleInputChange = (event) => {
    let text = event.nativeEvent.text;
    if (/^\d*$/.test(text)) {
      let name;
      switch (event.target) {
        case 6:
          name = 'principal';
          break;
        case 9:
          name = 'amortization';
          break;
        case 13:
          name = 'interestRate';
          break;
      }

      this.setState({
        [name]: text
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Canadian Mortgage Payment Calculator</Text>
        <Text>Principal (purchase price - down payment):</Text>
          <TextInput 
            style={styles.textInput}
            keyboardType='numeric'
            onChange={this.handleInputChange}
            value={this.state.principal}
            maxLength={10}
          />

          <Text>Amortization (years):</Text>
          <TextInput 
            style={styles.textInput}
            keyboardType='numeric'
            onChange={this.handleInputChange}
            value={this.state.amortization}
            maxLength={10}
          />

          <Text>Interest Rate (%):</Text>
          <TextInput 
            style={styles.textInput}
            keyboardType='numeric'
            onChange={this.handleInputChange}
            value={this.state.interestRate}
            maxLength={10}
          />
        <Button
          onPress={() => {
            Alert.alert(`Monthly Payment = $${getMonthlyPayment(this.state.principal, this.state.interestRate / 100, this.state.amortization)}` );
          }}
          title="Values"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
