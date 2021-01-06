import React, { useCallback, useState, useEffect } from "react";
import { Text, Button, FlatList, AsyncStorage, Alert } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Fetcher from "../../hooks/Fetcher";
import api from "../../services/api";

import {
  Container,
  Card,
  Image,
  ContainerList,
  Name,
  ButtonOrder,
  ContainerCloseOrder,
  TextButtonOrder,
  TextOrder,
  ButtonClodeModal,
  TextButtonClose,
  QtdText,
  View,
  TypeProductTitle
} from "./styles";

const Cart = ({ navigation }) => {
  //const [produtoIds, setProdutosIds] = useState([])
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState({});
  const [saldo, setSaldo] = useState("");
  const [produtoQtd, setProdutoQtd] = useState([]);
  const { data, mutate } = Fetcher("/filtro/produtos?selecionado=true");
  
  useEffect(() => {
    api.get("/filtro/produtos?selecionado=true").then((res) => {
      const total = res.data.reduce(
        (sum, { preco_produto, quantidade_selecionada }) =>
          sum + preco_produto * quantidade_selecionada,
        0
      );
      
      setTotal(total);
    });
  }, [data]);

  useEffect(() => {
    async function getUser() {
      await AsyncStorage.getItem("user").then((res) =>
        setUser(JSON.parse(res))
      );
    }
    getUser();
  }, []);

  async function handleLogout() {
    await AsyncStorage.removeItem("user").then(() => {
      navigation.navigate("Home")
    })
  }

  const handleRemoveCart = useCallback(
    (id) => {
      api
        .patch(`/produtos/${id}`, { qtd: 0, selecionado: false })

        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      const teste = data?.map((item) => {
        if (item._id === id) {
          return { ...item };
        }
        return item;
      });
      mutate(teste, true);
    },
    [data, mutate]
  );

  const Pedido = async () => {
    const produtos = data.map(item => item._id)
    console.log(user.saldo_usuario)
    console.log(total)

    if (user.saldo_usuario>=total) {  
      api.post(`pedidos/${user._id}`, { total, produtos })
      .then((res) => {
        if(res.status === 200) {
          data.map((item) => {
            api.patch(`/produtos/${item._id}`, { 
              selecionado: false 
            })
              .then((res) => {
                Alert.alert("Pedido recebido com sucesso")
              })
              .catch((err) => console.log(err));
              setTotal(0);
        });
          api.get('/usuariosmobile.details/'+user._id)
            .then(res => {
              const novoSaldo = res.data.saldo_usuario - total
              api.patch(`/usuariosmobile/${user._id}`,{ saldo_usuario: novoSaldo.toFixed(2) })
              .then(res => console.log(res.data))
               .catch(err => console.log(err))
            });         
          
        }
      })
      .catch(err => console.log(err))

    } else {
      Alert.alert("Saldo insuficiente.")    }
    
  }

  if (!data) return <Text>Carregando...</Text>;

  return (
    <Container>
      <ButtonClodeModal onPress={() => navigation.navigate("Vitrine")}>
        <TextButtonClose>
          <Icon name="arrowleft" size={25} />
        </TextButtonClose>
        <TextButtonClose>Voltar para vitrine</TextButtonClose>
        <Button title="Sair" onPress={handleLogout} />
      </ButtonClodeModal>

      <ContainerList>
        <TextButtonClose>
    Saldo disponível: R$ {Number(user.saldo_usuario).toFixed(2)}
    </TextButtonClose>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Card>
              <Image source={{ uri: item.imagem_txt }} />
              <Name>{item.nome_produto}</Name>
              <QtdText>Quantidade: {item.quantidade_selecionada}</QtdText>
              <Button
                color="red"
                title="Remover"
                onPress={() => handleRemoveCart(item._id)}
              />
            </Card>
          )}
        />
      </ContainerList>
      <ContainerCloseOrder>
        <TextOrder>Preço total: R${total.toFixed(2)}</TextOrder>
        <ButtonOrder onPress={Pedido}>
          <TextButtonOrder>Fechar Compra</TextButtonOrder>
        </ButtonOrder>
      </ContainerCloseOrder>
    </Container>
  );
};

export default Cart;