import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image'
import Header from './src/components/Header';
import Semana from './src/components/Semana';
import Adicionar from './src/components/Adicionar';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Semana />
      <View style={styles.foto}>
        <Image
        style={styles.borda}
        source={require("./assets/bordas3.png")}
        />
      </View>
      <View style={styles.footer}>
        <Adicionar />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  footer: {
    marginTop: 0,
  },

  borda: {
    marginLeft: '-20px',
    width: 130,
    height: 130
  },

  foto: {
    marginTop: 580
  }
});
