import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';


export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(0);

  const soma =() => {//converter para float
    const total = parseFloat(num1) + parseFloat(num2);
    setResultado(total);
  }

  const subtrair =() => {//converter para float
    const total = parseFloat(num1) - parseFloat(num2);
    setResultado(total);
  }

  const multiplicar =() => {//converter para float
    const total = parseFloat(num1) * parseFloat(num2);
    setResultado(total);
  }

  const dividir =() => {//converter para float
    const total = parseFloat(num1) / parseFloat(num2);
    setResultado(total);
  }

  return (
    <>
      <View style={estilos.container}>
          <TextInput 
          style={estilos.input}
            keyboardType='numeric' //teclado numerico
            onChangeText={text => setNum1(text)}
            value={num1.toString()}
          />
           <TextInput 
           style={estilos.input}
            keyboardType='numeric' //teclado numerico
            onChangeText={text => setNum2(text)}
            value={num2.toString()}
          />
          <Pressable style={estilos.button} title='somar' onPress={soma} >
            <Text style={estilos.buttonText}>somar</Text>
          </Pressable>
          <Pressable style={estilos.button} title='subtrair' onPress={subtrair} >
            <Text style={estilos.buttonText}>subtrair</Text>
          </Pressable>
          <Pressable style={estilos.button} title='multiplicar' onPress={multiplicar} >
            <Text style={estilos.buttonText}>multiplicar</Text>
          </Pressable>
          <Pressable style={estilos.button} title='dividir' onPress={dividir} >
            <Text style={estilos.buttonText}>dividir</Text>
          </Pressable>

          <Text style={estilos.resultado}>resultado: {resultado} </Text>
      </View>
   </> 
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    backgroundColor: 'white',
    color: 'red',
    textAlign: 'center'
  },
  resultado:{
    marginTop: 10,
    fontSize: 20,
    color: 'red'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#132',
    padding: 10,
    width: 200,
    marginBottom: 13,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2
  },
  buttonText: {
    fontSize: 16,
    color: 'white'
  },
});
