import { View, Text, Image, StyleSheet } from 'react-native';

export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
         <Image source={{ uri: game.image }} style={styles.image} />
         <Text style={styles.title}>{game.title}</Text>
         <Text style={styles.score}>Score: {game.score}</Text>
         <Text style={styles.description}>{game.description}</Text>
        </View>
  );
}
const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      marginBottom: 30,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
    },
    description: {
      fontSize: 16,
      marginTop: 10,
    },
    score: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'green',
      marginTop: 10,
    },
  });