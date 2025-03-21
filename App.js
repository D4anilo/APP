import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image'
import Header from './src/components/Header';
import Adicionar from './src/components/Adicionar';
import Login from './src/components/Login';
import { ScrollView } from 'react-native-web';  

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Login />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  footer: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    paddingTop: 820,

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
