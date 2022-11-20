import { View, Text, TextInput, Image, Button, StyleSheet, TouchableOpacity, ImageBackground } from "react-native"
import { useState, useEffect } from "react"
import { useFonts } from 'expo-font';
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from 'expo-blur';


export default function Gatuladora({ navigation }) {
    const [input, setInput] = useState('')
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const [fontsLoaded] = useFonts({
        'Windows-Regular': require("../assets/fonts/Windows-Regular.ttf")
    })

    if (!fontsLoaded) return null

    const handleNumber = (value) => {
        setInput(input + value)
    }

    const clear = () => {
        setInput(input.slice(0, -1))
    }

    const handleCalculation = (operation) => {
        setInput('')
        operation = operation.toLowerCase()

        switch (operation) {
            case '+':
                setValue(`${value}${input} + `)
                break;
            case '-':
                setValue(`${value}${input} - `)
                break;
            case 'x':
                setValue(`${value}${input} x `)
                break;
            case '/':
                setValue(`${value}${input} / `)
                break;
        }
    }

    const handleResult = () => {
        try {
            let stringzona = value.replace('x', '*')

            if (input === '') {
                stringzona = stringzona.slice(0, -1).slice(0, -1)
            } else {
                stringzona = stringzona + input
            }

            let teste = eval(stringzona).toString()
            setInput(teste)
            setResult(teste)
            console.log(input)
        } catch {
            console.log('ah fodase')
            handleClear()
            setInput('@@ ER...RROR)#*&)@/.')
        }

        setValue('')
    }

    const handleClear = () => {
        setInput('')
        setValue('')
        setResult('')
    }

    const handlePontinho = () => {
        setInput(input + '.')
    }

    return (
        <View style={styles.mainView}>

            <ImageBackground source={require('../assets/gifs/glitter-purple.gif')} style={{ position: 'absolute', width: '100%', height: '120%' }}></ImageBackground>
            <TouchableOpacity style={{ backgroundColor: 'blue', position: 'relative' }}>
                <Image
                    style={{ width: '100%', height: 250 }}
                    source={require('../assets/gifs/gato-piscante.gif')}
                />

                <View style={{ position: 'absolute', bottom: 0 }}>

                    <TouchableOpacity onPress={() => navigation.navigate('Equações')} style={styles.button}>
                        <Text style={{ fontFamily: 'Windows-Regular', fontSize: 25 }}>2° GRU</Text>
                    </TouchableOpacity>


                </View>

            </TouchableOpacity>

            <LinearGradient
                colors={["red", "blue"]}
                style={{ position: 'absolute', width: '100%', 'height': '200%', zIndex: -1 }}
            />
            <View style={{ backgroundColor: 'rgba(192, 192, 192, .4)', borderWidth: 1, paddingLeft: 20 }}>
                <Text style={{ color: 'yellow', fontWeight: 'bold' }}>
                    {value}
                </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'rgba(192, 192, 192, .4)', borderWidth: 1, paddingLeft: 20 }}>
                <Text style={{ color: 'yellow', fontSize: 30, fontWeight: 'bold' }}>{input}</Text>
            </View >

            <BlurView pointerEvents="none" intensity={30} style={{ width: '100%', height: '200%', position: 'absolute', zIndex: 100 }} >

            </BlurView>
            <View style={styles.buttonsWrapper}>

                <View style={styles.buttonRow}>

                    <TouchableOpacity onPress={() => handleClear()} style={styles.button}>
                        <LinearGradient colors={['yellow', 'blue']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>C</Text>

                        </LinearGradient>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.button}></TouchableOpacity>

                    <TouchableOpacity onPress={() => handleCalculation('/')} style={styles.button}>
                        <LinearGradient colors={['yellow', 'white']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>/</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => clear()} style={styles.buttonRed}>
                        <Text style={styles.buttonText}>{'<<'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => handleNumber('7')} style={styles.button}>
                        <LinearGradient colors={['skyblue', 'white']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>7</Text>
                        </LinearGradient>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => handleNumber('8')} style={styles.button}>

                        <LinearGradient colors={['skyblue', 'white']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>8</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber('9')} style={styles.button}>

                        <LinearGradient colors={['skyblue', 'white']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>9</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleCalculation('X')} style={styles.button}>

                        <LinearGradient colors={['yellow', 'white']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>X</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => handleNumber('4')} style={styles.button}>

                        <LinearGradient colors={['skyblue', 'white']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>4</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber('5')} style={styles.button}>

                        <LinearGradient colors={['skyblue', 'white']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>5</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber('6')} style={styles.button}>

                        <LinearGradient colors={['skyblue', 'white']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>6</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleCalculation('-')} style={styles.button}>

                        <LinearGradient colors={['yellow', 'white']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>-</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => handleNumber('1')} style={styles.button}>

                        <LinearGradient colors={['skyblue', 'white']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>1</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber('2')} style={styles.button}>

                        <LinearGradient colors={['skyblue', 'white']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>2</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber('3')} style={styles.button}>

                        <LinearGradient colors={['skyblue', 'white']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>3</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleCalculation('+')} style={styles.button}>

                        <LinearGradient colors={['yellow', 'white']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>+</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button}></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber('0')} style={styles.button}>

                        <LinearGradient colors={['skyblue', 'white']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>0</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePontinho()} style={styles.button}>

                        <LinearGradient colors={['blue', 'skyblue']} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} start={[0, 0]} end={[1, 1]} location={[0.25, 0.4, 1]} >
                            <Text style={styles.buttonText}>{'.'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleResult()} style={styles.buttonGreen}>
                        <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    mainView: {
        height: '89%'
    },

    button: {
        backgroundColor: 'lightgrey',
        height: 80,
        width: 80,
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
        fontFamily: 'Windows-Regular'
    },

    buttonGreen: {
        backgroundColor: 'lightgreen',
        height: 80,
        width: 80,
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
        fontFamily: 'Windows-Regular'
    },

    buttonRed: {
        backgroundColor: 'red',
        height: 80,
        width: 80,
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
        fontFamily: 'Windows-Regular'
    },

    buttonText: {
        fontSize: 50,
        fontFamily: 'Windows-Regular'
    },


    buttonsWrapper: {
        backgroundColor: 'rgba(192, 192, 192, .4)',
        height: '70%'
    },

    buttonRow: {
        flex: 1,
        flexDirection: 'row',

        alignContent: 'center',
        justifyContent: 'center'
    }
})