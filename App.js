import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Semana from './src/components/Semana';
import Adicionar from './src/components/Adicionar';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Semana />
      <Adicionar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
