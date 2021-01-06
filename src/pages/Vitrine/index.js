import React, { useState, useEffect } from "react";
import { AsyncStorage, FlatList, Button, Text } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'

import {
  Container,
  Image,
  Name,
  Card,
  ButtonOpenModal,
  TextButtonOpenModal,
  Title,
  ContainerList,
  Header,
  TitlePage,
  ButtonCart,
  TypeProductTitle
} from "./styles";
import Fetcher from "../../hooks/Fetcher.js";
import Modal from "../../components/Modals/ModalProduto/index";

const Vitrine = ({ navigation }) => {
  const [productSelected, setProductSelected] = useState(false);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({});

  const handleSelectedProduct = (id) => {
    setProductSelected(id)
    setModal(true)
  }

  useEffect(() => {
    async function getInfos() {
      // Quando forem rodar no celular troquem localstorage por (await AsyncStorage)
      
      const user = await AsyncStorage.getItem("user")
      setUser(JSON.parse(user))
    }
    getInfos()
  }, [])


  async function handleLogout() {
    await AsyncStorage.removeItem("user").then(() => {
      navigation.navigate("Home")
    })
  }

  const { data: bebidas } = Fetcher("/filtro?tipo_produto=1");
  const { data: doces } = Fetcher("/filtro?tipo_produto=2");
  const { data: salgados } = Fetcher("/filtro?tipo_produto=3");

  if (!bebidas || !salgados || !doces) return <Text>Carregando...</Text>;

  return (
    <>
      <Container>
        <Header>
          <TitlePage>Página de produtos</TitlePage>        
          <ButtonCart>
            <Icon 
              onPress={() => navigation.navigate("Cart")} 
              name="shoppingcart" 
              size={25}
              color="#eee"
            />
          </ButtonCart>

          <Button title="Sair" onPress={handleLogout} />
          
        </Header>
        <ContainerList>
<TypeProductTitle>
Saldo disponível: R$ {Number(user.saldo_usuario).toFixed(2)}
</TypeProductTitle>

          <Title>Bebidas</Title>
          <TypeProductTitle>
            Aqui na CANTEENA virtual você não passa sede. Veja abaixo nossas bebidas.
          </TypeProductTitle>
          <FlatList
            data={bebidas}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <Card>
                <Image source={{ uri: item.imagem_txt }} />
                <Name>{item.nome_produto}</Name>
                <Name>R${Number(item.preco_produto).toFixed(2)}</Name>
                <ButtonOpenModal onPress={() => handleSelectedProduct(item._id)}>
                  <TextButtonOpenModal>Comprar</TextButtonOpenModal>
                </ButtonOpenModal>
              </Card>
            )}
          />
        </ContainerList>

        <ContainerList>
          <Title>Salgados</Title>
          <TypeProductTitle>
            Aqui na CANTEENA virtual o salgado sai na hora bem quentinho
          </TypeProductTitle>
          <FlatList
            data={salgados}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <Card>
                <Image source={{ uri: item.imagem_txt }} />
                <Name>{item.nome_produto}</Name>
                <Name>R${Number(item.preco_produto).toFixed(2)}</Name>
                <ButtonOpenModal onPress={() => handleSelectedProduct(item._id)}>
                  <TextButtonOpenModal>Comprar</TextButtonOpenModal>
                </ButtonOpenModal>
              </Card>
            )}
          />
        </ContainerList>

        <ContainerList>
          <Title>Doces</Title>
          <TypeProductTitle>
            Aqui na CANTEENA virtual temos todos os tipos de doces.
          </TypeProductTitle>
          <FlatList
            data={doces}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <Card>
                <Image source={{ uri: item.imagem_txt }} />
                <Name>{item.nome_produto}</Name>
                <Name>R${Number(item.preco_produto).toFixed(2)}</Name>
                <ButtonOpenModal onPress={() => handleSelectedProduct(item._id)}>
                  <TextButtonOpenModal>Comprar</TextButtonOpenModal>
                </ButtonOpenModal>
              </Card>
            )}
          />
        </ContainerList>
      </Container>

      {modal && (
        <Modal id={productSelected} closeModal={() => setModal(false)}/>
      )}
    </>
  );
};

export default Vitrine;