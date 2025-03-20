import { StyleSheet, Text, View } from "react-native";
import { Image } from 'expo-image'

export default function Adicionar() {
    return (
        <View style={styles.container}>
            <View style={styles.botoes}>
                <a href="#">
                    <Image
                        style={styles.botao}
                        source={require("../../assets/home.png")}
                />
                </a>
            </View>

            <View style={styles.botoes}>
                <a href="#">
                    <Image
                        style={styles.botao}
                        source={require("../../assets/botaoAdd.png")}
                />
                </a>
            </View>

            <View style={styles.botoes}>
                <a href="#">
                    <Image
                        style={styles.botao}
                        source={require("../../assets/calender.png")}
                />
                </a>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50
    },

    botao: {
        width: 30,
        height: 30
    }, 
});