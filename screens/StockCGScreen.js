import { useState, useCallback} from 'react';
import React from 'react';
import { Text, View, Button } from 'react-native';

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

const StockCG = ({ navigation }) => {

  const navigationOptions = {
    tabBarLabel: "ICI !",
  }

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
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
    onPress={handleFetch}
    title="Afficher"/>
    {stocks.map((stock, index) => (
    <Text key={`stock-${index + 1}`}>{stock.name} : {stock.price}€ Dispo : {stock.stock}</Text>
    ))}   
    <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
    />
  </View>
  )
  }
  
  export default StockCG;