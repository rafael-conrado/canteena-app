import React, { useState } from 'react';
import { Text,Alert } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import api from '../../../services/api'

import { 
  Container, 
  Card, 
  Image,
  Name,
  ButtonDegrement,
  ButtonIngrement,
  ContainerQtd,
  InputQtd,
  TextButtonDegrement,
  TextButtonIngrement,
  ButtonAddToCart,
  TextButtonAddToCart,
  ButtonCloseModal,
  PriceContainer,
  PriceProduct,
  TotalPrice
} from './styles';

import Fetcher from '../../../hooks/Fetcher'

const ModalProduto = ({ id, closeModal }) => {
  const [quantidade_selecionada, setQtd] = useState(1)
  const { data } = Fetcher(`produtos.details/${id}`)

  const ingrementeQtd = () => setQtd(quantidade_selecionada + 1)
  const degrementeQtd = () => quantidade_selecionada <= 1 ? setQtd(quantidade_selecionada): setQtd(quantidade_selecionada - 1)

  async function addProductCart(id) {
    // Alert.alert(
    //   "Deseja adiconar esse produto ao carrinho ? ",
    //   "selecione OK para confirmar ",
    //   [
    //     {
    //       text: "Cancelar",
    //       onPress: () => setQtd(1),
    //     },
    //     { text: "OK", onPress: () => if (api.response == 200) {
    //       return(closeModal)
    //     } }
    //   ],
    // );

    await api.patch(`/produtos/${id}`, { selecionado: true, quantidade_selecionada })
      .then((response) => closeModal())
      .catch(err => console.log(err))
  }
  
  
  if(!data) return <Text>Carregando...</Text>
  return (
    <Container>
      <Card>
        <ButtonCloseModal onPress={closeModal}>
          <Icon name="close" size={30}/>
        </ButtonCloseModal>

        <Image source={{ uri: data.imagem_txt }}/>
        <Name>{data.nome_produto}</Name>

        <ContainerQtd>
          <ButtonDegrement onPress={degrementeQtd}>
          <TextButtonDegrement>-</TextButtonDegrement>
          </ButtonDegrement>

          <InputQtd value={quantidade_selecionada.toString()} onChangeText={(value) => setQtd(value)}/>
          
          <ButtonIngrement onPress={ingrementeQtd}>
            <TextButtonIngrement>+</TextButtonIngrement>
          </ButtonIngrement>
        </ContainerQtd>
        
        <PriceContainer>
          <PriceProduct>Preço unitário: R${data.preco_produto}</PriceProduct>
          <TotalPrice>Preço total: R${(quantidade_selecionada * data.preco_produto).toFixed(2)}</TotalPrice>
        </PriceContainer>

        <ButtonAddToCart onPress={() => addProductCart(data._id)}>
          <TextButtonAddToCart>
            Adicionar ao carrinho</TextButtonAddToCart>
        </ButtonAddToCart>
      </Card>
    </Container>
  );
};

export default ModalProduto;
