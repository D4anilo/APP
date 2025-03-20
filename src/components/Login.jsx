import { StyleSheet, View, Text, Input, Button } from "react-native";
import { Image } from 'expo-image'
import { ScrollView } from "react-native-web";

export default function Login() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>FAÇA SEU LOGIN</Text>

                    <Input style={styles.email}>Email</Input>
                    <Input style={styles.senha}>Senha</Input>

                <Button style={styles.Logar}>Logar</Button>
                

                <View style={styles.containerGoogle}>
                    <Image
                    style={styles.loginGoogle}
                    source={require("../../assets/google.png")} />
                </View>

                <Text>CASO AINDA NÃO TENHA UMA CONTA CRIE UMA. Criar uma?</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    }
})