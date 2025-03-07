import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome5} from '@expo/vector-icons'
export default function App() {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : ''}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFF' translucent={false}/>
      <Image
      source={require('./src/assets/logo.png')}
      style={styles.logo}
      />

      <TextInput
      placeholder="Celular, Username ou Email"
      style={styles.input}
      />
      <TextInput
      placeholder="Sua Senha"
      style={styles.input}
      />
      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Acessar</Text>
        </TouchableOpacity>
      
      <TouchableOpacity style={styles.facebookContainer}>
          <FontAwesome5 name="facebook" size={25} color="#399fff"/>
          <Text style={styles.facebookText}>Continue como Ana </Text>
        </TouchableOpacity>

        <View style={styles.divisor}>
          <View style={styles.divisorLine}></View>
            <Text style={{marginHorizontal: '3%'}}>OU</Text>
          <View style={styles.divisorLine}></View>
        </View>
        <View style={styles.singUpContainer}>
          <Text style={styles.singUpText}>Não possui uma conta?</Text>
          <TouchableOpacity >
            <Text style={styles.singUpButton}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginTop: Platform.Os === 'android' ? '13%' : '20%',
    marginBottom: Platform.Os === 'android' ? '13%' : '15%',
    width: 250, // Largura da imagem
    height: 150, // Altura da imagem
    resizeMode: 'contain', // Manter a proporção original
  },
  input:{
    width: '90%',
    height:42,
    backgroundColor: '#F4F3F3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor:'#E0E0E0',
  },
  forgotContainer:{
    width: '90%',
    alignItems: 'flex-end',
  },
  forgotText:{
    color: '#399fff',
  },
  loginButton:{
    marginTop: '5%',
    backgroundColor:'#399fff',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginText:{
    color: '#FFF',
    fontSize: 17,
  },
  facebookContainer:{
    flexDirection: 'row',
    alignItems:'center',
    marginTop: '15%',
  },
  facebookText:{
    color: '#399fff',
    paddingLeft: 8,
    fontSize: 15,
  },
  divisor:{
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divisorLine:{
    width: '45%',
    height:2,
    backgroundColor: '#D1D1D1FF',
    borderRadius: 5,
  },
  singUpContainer:{
    flexDirection: 'row',
    marginTop: '10%',
  },
  singUpText:{
    color: "#C4C4C4",
    paddingRight: 5,
  },
  singUpButton:{
    color:'#399fff',
    fontWeight: 'bold'
  },
  singUpContainer:{
    flexDirection: 'row',
    marginTop: '10%'
  }
});
