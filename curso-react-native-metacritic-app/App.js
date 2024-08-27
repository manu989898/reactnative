import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

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
      <Button
      color='red' 
      title='Pulsa aquí' 
      onPress={() => alert('Pulsado')}
        />
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
