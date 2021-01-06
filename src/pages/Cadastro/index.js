import React, { useState } from "react";
import { View, TextInput, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../../services/api";
import styles from "./styles";

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit() {
    const validateEmpty = !nome || !email || !senha
    
    if(!validateEmpty) {
      await api.post("/usuariosmobile", {
        nome_usuario: nome,
        email_usuario: email,
        senha_usuario: senha
      })
      .then(res => {
        if(res.status === 200) {
          Alert.alert("Usuário cadastrado com sucesso")
          navigation.navigate("Home")
        }
      })
      .catch(err => console.log(err))
    } else {
      Alert.alert("Preencha todas as informações")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <Text style={{ fontSize: 20 }}>
          Insira seus dados para concluir o cadastrado
        </Text>
        <TextInput
          style={styles.input}
          placeholder="nome completo"
          onChangeText={(e) => setNome(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="e-mail nome@provedor.com"
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="senha"
          onChangeText={(e) => setSenha(e)}
          secureTextEntry
        />
        <View>
          <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
            <Text style={styles.texto}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cadastro;