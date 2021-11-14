import React, {Component} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
    input: '',
    cons: 0,
    vowel: 0,
    charc: 0,
    }
  }
analyzeWord = () => {
   let input = this.state.input;
   let cons = 0;
   let vowel = 0;
   let charc = 0;
   let result = '';
charc = input.length;
result = input.split('');
for (let i=0; i <charc ;i++ ) {
  if((result[i].match(/[aeiouAEIOU]/)))
  {
    vowel++;
  }
  else if ((result[i].match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)))
  {
    cons++;
  }
  this.setState({charc:charc, vowel:vowel,cons:cons})
}
    
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
       <Text style={Styles.Header}> World Analyser</Text>
       <TextInput style={Styles.input} onChangeText={(input) => this.setState({input})}  placeholder="Write Here" />
      <Button  onPress={this.analyzeWord}  title="Analyze"  color="#2c6334" />
      <Text></Text>
      <Text style={Styles.Text} >Words                               :  {this.state.input}</Text>
       <Text style={Styles.Text} >No of Consonants         :  {this.state.cons}</Text>
       <Text style={Styles.Text} >No of Vowels                 :  {this.state.vowel}</Text>
       <Text style={Styles.Text} >No of Characters           :  {this.state.charc}</Text>
       </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  Header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
  Text: {
    textAlign: 'center',
    marginBottom: 5,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
});