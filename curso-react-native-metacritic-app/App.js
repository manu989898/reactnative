import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';

const icon = require('./assets/icon.png');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={{color: 'white'}}>Hola!</Text>
      <Image source={{uri:"https://www.metacritic.com/a/img/resize/248cbda6aaf868204981adbdaf5b320f863e7645/catalog/provider/7/2/7-1713633250.jpg?auto=webp&width=416"}} 
      style={{
        width: 200, 
        height: 200}}
      />
      
      <TouchableHighlight 
      underlayColor={'#fff'}
      onPress={() => alert('Pulsado')}
      style={{backgroundColor: 'red', padding: 10, borderRadius: 10}}
      >
        <Text style={{color: 'white'}}>Pulsa aquí</Text>
      </TouchableHighlight>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
