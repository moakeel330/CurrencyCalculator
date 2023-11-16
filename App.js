/*
Mohamed Akeel Nazeer
ST10293093
Group 1
*/
import {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput
} from 'react-native';



function App(){

  const [randInput, setRandInput] = useState('');
  const [dollarAmount, setDollarAmount] = useState();
  const [poundAmount, setPoundAmount] = useState();
  const [yenAmount, setYenAmount] = useState();
  const [euroAmount, setEuroAmount] = useState();
  const [rupeeAmount, setRupeeAmount] = useState();
  const usd = 0.052;
  const euro = 0.048;
  const yen = 7.63;
  const pound = 0.041;
  const rupee = 4.36;
  const randAmount = parseFloat(randInput);

  
  const onTap = () => {
    setDollarAmount(randAmount * usd);
    setPoundAmount(randAmount * pound);
    setYenAmount(randAmount * yen);
    setEuroAmount(randAmount * euro);
    setRupeeAmount(randAmount * rupee);
  }

  return(
  <View style = {styles.styleContainer}>
    <View>
    <Text style = {styles.heading}>CURRENCY CONVERTER</Text>
    <Text style = {styles.subHeading}>Rand Amount</Text>
    <TextInput
      style = {styles.input}
      placeholder = 'Enter an amount'
      value = {randInput}
      onChangeText = {text => setRandInput(text)}
      keyboardType = 'numeric'
    />
    </View>
    <View style = {styles.buttonContainer}>
      <Button title = 'CONVERT' 
      style = {styles.button} 
      onPress={onTap} />
    </View>
    <View style = {styles.answer}>
      <Text style = {styles.outputs}>$: {dollarAmount.toFixed(2)}</Text>
      <Text style = {styles.outputs}>£: {poundAmount.toFixed(2)}</Text>
      <Text style = {styles.outputs}>¥: {yenAmount.toFixed(2)}</Text>
      <Text style = {styles.outputs}>€: {euroAmount.toFixed(2)}</Text>
      <Text style = {styles.outputs}>₹: {rupeeAmount.toFixed(2)}</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create ({
  heading: {
    fontSize: 48,
    textAlign: 'center',
    color: '#8ecae6',
  },
  subHeading: {
    fontSize: 40,
    textAlign: 'center',
    color: '#ffb703',
    marginTop: 15,
  },
  styleContainer: {
    backgroundColor: '#023047',
    flex: 5,
  },
  input: {
    backgroundColor: '#ffb703',
    color: '#FFFFFF',
    paddingTop: 15,
    marginBottom: 25,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 25,
  },
  outputs: {
    flexDirection: 'row',
    fontSize: 28,
    backgroundColor: '#8ecae6',
    padding: 3,
    margin: 10,
  },
  answer: {
    flex: 2,
    fontSize: 28,
  },
});
export default App;