import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useCallback} from 'react';
import { Row } from 'react-bootstrap';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const STOCKS_API = 'http://192.168.1.4:4000/stock' 

const fetchStocks = async () => {

  const response = await fetch(STOCKS_API, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (response.status !== 200) {
    throw new Error('Stock fetch failed');
  }
  const data = await response.json();
  // console.log(data);

  return data;
};

const App = () => {

  const [stocks, setStocks] = useState([]);

  const handleFetch = useCallback(async () => {
    try {
      const data = await fetchStocks();
      setStocks(data);
    } catch(e) {
      console.error(e);
    }
  }, [setStocks]);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      </View>
      <View style={styles.container2}>
        <StatusBar style="auto" />
        <TouchableOpacity
        onPress={handleFetch}
        style={styles.button}>
        <Text style={styles.button}>Afficher le stock</Text>
        </TouchableOpacity>
        <View>
        {stocks.map((stock, index) => (
        <Text key={`stock-${index + 1}`}>{stock.name} : {stock.price}€ Dispo : {stock.stock}</Text>
        ))}
        </View>    
      </View>
      <View style={styles.container1}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'Row',
  },
  button: {
    color: 'blue',
    fontSize: 20,
  },
  container1: {
    flex: 1,
    width: '10%',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  container2: {
    flex: 1,
    width: '80%',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;