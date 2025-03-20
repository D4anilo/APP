import { StyleSheet, View, Text, TextInput, Button, ScrollView } from "react-native";
import { Image } from 'expo-image';

export default function Login() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>FAÇA SEU LOGIN</Text>

            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

            <Button title="Logar" onPress={() => console.log("Login pressionado")} />

            <View style={styles.containerGoogle}>
                <Image
                    style={styles.loginGoogle}
                    source={require("../../assets/google.png")}
                />
            </View>

            <Text>CASO AINDA NÃO TENHA UMA CONTA, CRIE UMA. Criar uma?</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    containerGoogle: {
        marginVertical: 20,
    },
    loginGoogle: {
        width: 200,
        height: 40,
    },
});
