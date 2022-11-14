import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native"
import { useState, useEffect } from "react"


export default function Gatuladora() {
    const [input, setInput] = useState('')
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')


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
                console.log(stringzona)
                stringzona = stringzona.slice(0, -1).slice(0, -1)
            } else {
                stringzona = stringzona + input
            }

            setResult(eval(stringzona))
        } catch {
            console.log('ah fodase')
        }

        setInput('')
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

            <View>
                <Text style={{ borderWidth: 1, margin: 10 }}>
                    {result}

                </Text>
                <Text>

                    {value}
                </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={{ borderWidth: 1, width: 300, height: 50, paddingLeft: 20, fontSize: 30 }}>
                    {input}
                </Text>



            </View>


            <View style={styles.buttonsWrapper}>

                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => handleClear()} style={styles.button}>
                        <Text style={styles.buttonText}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}></TouchableOpacity>

                    <TouchableOpacity onPress={() => handleCalculation('/')} style={styles.button}>
                        <Text style={styles.buttonText}>/</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => clear()} style={styles.buttonRed}>
                        <Text style={styles.buttonText}>{'<<'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => handleNumber('7')} style={styles.button}>
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber('8')} style={styles.button}>
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber('9')} style={styles.button}>
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleCalculation('X')} style={styles.button}>
                        <Text style={styles.buttonText}>X</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => handleNumber('4')} style={styles.button}>
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber('5')} style={styles.button}>
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber('6')} style={styles.button}>
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleCalculation('-')} style={styles.button}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => handleNumber('1')} style={styles.button}>
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber('2')} style={styles.button}>
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber('3')} style={styles.button}>
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleCalculation('+')} style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button}></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber('0')} style={styles.button}>
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePontinho()} style={styles.button}>
                        <Text style={styles.buttonText}>{'.'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleResult()} style={styles.button}>
                        <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>
                </View>



            </View>




        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        borderWidth: 1,
        height: '80%',
        width: '95%',
        display: 'flex',
        justifyContent: 'flex-end'
    },

    button: {
        backgroundColor: 'lightgrey',
        height: 80,
        width: 80,
        elevation: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonRed: {
        backgroundColor: 'red',
        height: 80,
        width: 80,
        elevation: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 30
    },


    buttonsWrapper: {
        borderWidth: 1, height: '70%'
    },

    buttonRow: {
        flex: 1,
        flexDirection: 'row',

        alignContent: 'center',
        justifyContent: 'center'
    }
})