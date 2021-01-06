import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const Card = styled.View`
    align-items: center;
    justify-content: center;
    width: 180px;
    margin: 5px;
    height: 270px;
    background: #eee;
`;
export const Image = styled.Image`
    width: 120px;
    height: 120px;
`;
export const QtdText = styled.Text`
    font-size: 17px;
    margin-bottom: 5px;
    font-family: Roboto_500Medium;
`;
export const ButtonClodeModal = styled.TouchableOpacity`
    position: absolute;
    top: 5%;
    left: 2%;
    flex-direction: row;
    align-items: center;
`;
export const TextButtonClose = styled.Text`
    font-size: 20px;
    font-family: Roboto_500Medium;
    margin: 0 5px;
`;
export const Name = styled.Text`
    font-size: 20px;
    font-family: Roboto_700Bold;
    margin-bottom: 0;
    margin-top: 5px;
`;
export const ContainerCloseOrder = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px 10px;
    background: #333;
`;
export const TextOrder = styled.Text`
    font-size: 20px;
    color: #eee;
    font-family: Roboto_500Medium;
`;
export const ButtonOrder = styled.TouchableOpacity`
    background: #fff;
    width: 120px;
    padding: 10px 5px;
    border: none;
    align-items: center;
`;
export const TextButtonOrder = styled.Text`
    font-size: 14px;
    font-family: Roboto_500Medium;
    color: black;
`;
export const ContainerList = styled.View`
    margin-top: 20%;
`;