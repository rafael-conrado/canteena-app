import React, { useState, useEffect, localstorage, Alert } from 'react';
import { AsyncStorage } from 'react-native'
import api from '../../services/api'
import imgHome from '../../assets/Home.jpg'
import Cadastro from '../Cadastro/index'

import {
  Container,
  Texts,
  Title,
  TextHome,
  Form,
  Input,
  ButtonLog,
  TextButtonLog,
  ImageHome,
  TextHomeForm
} from './styles';

const Home = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [vazio, setVazio] = useState(true)

  // useEffect(() => {
  //   async function verifyAcess() {
  //     await AsyncStorage.getItem("token").then(res => {
  //       if (res) {
  //         navigation.navigate("Vitrine")
  //       }
  //     })
  //   }
  //   verifyAcess()
  // }, [])

  async function login() {
    const validateFields = !email || !senha

    if(!validateFields) {
      api.post("/usuarios/loginmobile", {
        email_usuario: email,
        senha_usuario: senha
      })
      .then(async (res) => {
        await AsyncStorage.setItem("user", JSON.stringify(res.data.user))
        await AsyncStorage.setItem("token", res.data.token)
        navigation.navigate("Vitrine")
      })
      .catch((err) => alert(err))
    }
    else {
      Alert.alert("Preencha todas as informações")
    }
    // if (senha == "" || email == "") {
    //   alert(
    //     'Por favor inserir todos os dados para logar !'
    //   )
    // } else if (senha !== "" || email !== "") {
    //   await api.post("/usuarios/loginmobile", {
    //     email_usuario: email, senha_usuario: senha
    //   })
    //     .then(async (res) => {
    //       // Quando forem rodar no celular troquem localStorage por (await AsyncStorage)
    //       console.log(res.data)
    //       // await AsyncStorage.setItem("user", JSON.stringify(res.data.user))
    //       // await AsyncStorage.setItem("token", res.data.token)
    //       // navigation.navigate("Vitrine")
    //     })
    //     .catch((err) => alert(err.message))
    // }

  }

  function cad() {

      navigation.navigate("Cadastro")
    
  }

  return (
    <Container>
      <Texts>
        <Title>CANTEENA virtual</Title>
        <TextHome>
          Bem vindo, esta é a CANTEENA virtual. Aqui você nem precisa de fila,
          basta um clique e pronto.
        </TextHome>
      </Texts>
      <ImageHome source={imgHome} alt="Image" />

      <Form>
        <TextHomeForm>
          Preencha o formulário abaixo para ver todos os nossos produtos.
        </TextHomeForm>
        <Input placeholder="Email" onChangeText={(value) => setEmail(value)} />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          textContentType={"password"}
          onChangeText={(value) => setSenha(value)}
        />
        <ButtonLog onPress={login}>
          <TextButtonLog>Acessar</TextButtonLog>
        </ButtonLog>

        <ButtonLog onPress={cad}>
          <TextButtonLog>Cadastro</TextButtonLog>
        </ButtonLog>
      </Form>
    </Container>
  );
};

export default Home;