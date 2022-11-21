import { View, Text, TextInput, Image, Button, StyleSheet, TouchableOpacity, ImageBackground } from "react-native"
import { useState } from "react"
import { useFonts } from 'expo-font';
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from 'expo-status-bar';

export default function Equation() {
    const [a, setA] = useState(0.0)
    const [b, setB] = useState(0.0)
    const [c, setC] = useState(0.0)

    const [x1, setX1] = useState('')
    const [x2, setX2] = useState('')

    const [fontsLoaded] = useFonts({
        'I-Dont-Hate-Comic-Sans': require("../assets/fonts/LDFComicSans.ttf"),
        'SANES': require("../assets/fonts/LDFComicSansBold.ttf")
    })

    if (!fontsLoaded) return null

    const fuckingBhaskara = () => {
        let result = (b ** 2) - (4 * a * c)

        if (b === 0 && c === 0) {

            setX1(0)
            setX2(0)
        } else if (result < 0) {
            setX1(result)
            setX2(result)
        } else if (Math.sqrt(result) % 1 !== 0) {
            setX1(`-2 + \u221A${result} / ${2 * a}`)
            setX2(`-2 - \u221A${result} / ${2 * a}`)
        }
        else {
            console.log('------------------')
            let rPos = (-b + Math.sqrt(result)) / (2 * a)
            let rNeg = (-b - Math.sqrt(result)) / (2 * a)

            setX1(rPos)
            setX2(rNeg)
        }
    }



    return (
        <View style={styles.mainView}>


            <ImageBackground style={{ height: '100%' }} source={require('../assets/gifs/gato-na-neve.gif')}>

                <LinearGradient colors={['rgba(255, 0, 0, .5)', 'white']} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} style={{ marginTop: '20%', padding: 30, marginLeft: '4%', marginRight: '4%', borderWidth: 8, borderColor: 'red' }}>
                    <View>
                        <Text style={styles.text}>Termo A (tal do x²)</Text>
                        <TextInput
                            keyboardType='number-pad'
                            onChangeText={(value) => setA(parseFloat(value))} style={styles.textInput} />
                    </View>

                    <View>
                        <Text style={styles.text}>Termo B (o que X apenas)</Text>
                        <TextInput
                            keyboardType='number-pad'
                            onChangeText={(value) => setB(parseFloat(value))} style={styles.textInput} />
                    </View>

                    <View>
                        <Text style={styles.text}>Termo C (o número sem X)</Text>
                        <TextInput
                            keyboardType='number-pad'
                            onChangeText={(value) => setC(parseFloat(value))} style={styles.textInput} />
                    </View>

                    <View style={styles.buttonView}>
                        <TouchableOpacity onPress={() => fuckingBhaskara()} style={styles.button}>

                            <LinearGradient colors={['blue', 'red']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                                <Text style={styles.buttonText}>Calcular</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.resultView}>
                        <Text style={styles.text}>X1 {'=>'} {x1}</Text>
                        <Text style={styles.text}>X2 {'=>'} {x2}</Text>
                    </View>


                </LinearGradient>


                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Image
                        style={{ width: 100, height: 200 }}
                        source={require('../assets/gifs/outro-gato-piscante.gif')}
                    />
                    <Image
                        style={{ width: 100, height: 200 }}
                        source={require('../assets/gifs/outro-gato-piscante.gif')}
                    />
                    <Image
                        style={{ width: 100, height: 200 }}
                        source={require('../assets/gifs/outro-gato-piscante.gif')}
                    />
                    <Image
                        style={{ width: 100, height: 200 }}
                        source={require('../assets/gifs/outro-gato-piscante.gif')}
                    />
                    <Image
                        style={{ width: 100, height: 200 }}
                        source={require('../assets/gifs/outro-gato-piscante.gif')}
                    />
                    <Image
                        style={{ width: 100, height: 200 }}
                        source={require('../assets/gifs/outro-gato-piscante.gif')}
                    />
                </View>


            </ImageBackground>


        </View>
    )
}

const styles = StyleSheet.create({
    termoStyle: {
        padding: 10
    },

    mainView: {
        borderWidth: 1,
    },

    textInput: {
        borderWidth: 5,
        paddingLeft: 10,
        height: 50,
        fontFamily: 'SANES',
        color: 'white',
        fontSize: 30,
        marginBottom: 10
    },

    buttonView: {
        marginTop: '10%'
    },

    resultView: {
        borderWidth: 1,
        padding: 10,
        marginTop: 40,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },

    button: {
        backgroundColor: 'lightgrey',
        height: 80,

        borderRightWidth: 4,
        borderBottomWidth: 4,
        borderLeftWidth: 3,
        borderTopWidth: 3,
        borderRadius: 5,
        borderRightColor: '#111111',
        borderBottomColor: '#111111',
        borderLeftColor: '#FAFAFA',
        borderTopColor: '#FAFAFA',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'SANES'
    },

    buttonText: {
        fontSize: 50,
        color: 'white',
        fontFamily: 'SANES'
    },

    text: {
        fontFamily: 'SANES',
        fontSize: 20
    }
})