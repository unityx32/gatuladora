import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native"
import { useState, useEffect } from "react"


export default function Gatuladora() {
    const [input, setInput] = useState('')
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState(0)

    const [firstValue, setFirstValue] = useState(0)
    const [secondValue, setSecondValue] = useState(0)

    const [numbers, setNumbers] = useState([])


    const handleNumber = (value) => {
        setInput(input + value)
    }

    const clear = () => {
        setInput(input.slice(0, -1))
    }

    console.log(numbers)

    return (
        <View style={styles.mainView}>


            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <TextInput
                    value={input}
                    keyboardType="number-pad"
                    style={{ borderWidth: 1, width: 300, height: 50, paddingLeft: 20, fontSize: 30 }}
                />

                <TouchableOpacity onPress={() => clear()} style={{ backgroundColor: 'red', width: 60 }}>
                    <Text style={styles.buttonText}>{'<X'}</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.buttonsWrapper}>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>{','}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>/</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => handleNumber(7)} style={styles.button}>
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber(8)} style={styles.button}>
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber(9)} style={styles.button}>
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>X</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => handleNumber(4)} style={styles.button}>
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber(5)} style={styles.button}>
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber(6)} style={styles.button}>
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => handleNumber(1)} style={styles.button}>
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber(2)} style={styles.button}>
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNumber(3)} style={styles.button}>
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
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

    buttonText: {
        fontSize: 30
    },


    buttonsWrapper: {
        borderWidth: 1, height: '60%'
    },

    buttonRow: {
        flex: 1,
        flexDirection: 'row'
    }
})