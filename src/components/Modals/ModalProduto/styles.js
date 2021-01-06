import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    position: absolute;
    justify-content: center;
    align-items: center;
    background: transparent;
    width: 100%;
    height: 100%;
    background: #eee;
`;
export const Card = styled.View`
    justify-content: center;
    position: relative;
    align-items: center;
    background: #ddd;
    width: 80%;
    border-radius: 10px;
    height: 600px;
    elevation: 10;
`;
export const Name = styled.Text`
    font-size: 23px;
    font-weight: bold;
    font-family: Roboto_500Medium;
    margin: 5px 0px;
`;
export const Image = styled.Image`
    height: 200px;
    width: 200px;
`;
export const ContainerQtd = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 400px;
`;
export const InputQtd = styled.TextInput`
    margin: 0 5px;
    height: 45px;
    width: 160px;
    padding: 0 10px;
    background: #eee;
`;
export const ButtonIngrement = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background: lightblue;
    width: 45px;
    height: 45px;
    border: none;
`;
export const TextButtonIngrement = styled.Text`
    font-size: 15px;
    font-weight: bold;
    font-family: Roboto_500Medium;
`;
export const ButtonDegrement = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background: lightblue;
    width: 45px;
    height: 45px;
    border: none;
`;
export const TextButtonDegrement = styled.Text`
    font-size: 15px;
    font-weight: bold;
    font-family: Roboto_500Medium;
`;
export const ButtonAddToCart = styled.TouchableOpacity`
    font-size: 15px;
    padding: 10px;
    width: 250px;
    margin: 10px 0px;
    font-weight: bold;
    font-family: Roboto_500Medium;
    background: #84a98c;
`;
export const TextButtonAddToCart = styled.Text`
    font-size: 15px;
    color: #eee;
    font-weight: bold;
    font-family: Roboto_500Medium;
`;
export const ButtonCloseModal = styled.TouchableOpacity`
    position: absolute;
    top: 2%;
    left: 2%;
    border: none;
    background: transparent;
`;
export const PriceContainer = styled.View`
    width: 250px;
    margin: 5px 0;
`;
export const PriceProduct = styled.Text`
    font-size: 15px;
    font-weight: bold;
    font-family: Roboto_500Medium;
`;
export const TotalPrice = styled.Text`
    font-size: 18px;
    font-weight: bold;
    font-family: Roboto_500Medium;
`;