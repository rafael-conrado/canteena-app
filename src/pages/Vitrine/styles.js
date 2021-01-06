import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex-direction: column;
    flex: 1;
    height: 100%;
    margin: 20px 0;
`;
export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;
    justify-content: space-around;
`;
export const ButtonCart = styled.TouchableOpacity`
    align-items: center;
    elevation: 5;
    justify-content: center;
    background: #0077b6;
    width: 45px;
    height: 45px;
    border-radius: 100px;
`;
export const TitlePage = styled.Text`
    font-size: 17px;
    font-family: Roboto_500Medium;
    font-weight: bold;
`;
export const ContainerList = styled.View`
    margin-top: 10px;
    max-width: 400px;
`;
export const TypeProductTitle = styled.Text`
    font-size: 16px;
    margin: 5px 10px;
    font-family: Roboto_500Medium;
    max-width: 350px;
`;
export const Card = styled.SafeAreaView`
    margin: 5px;
    align-items: center;
    justify-content: center;
    background: #eee;
    padding: 10px 5px;
    height: 250px;
    width: 180px;
`;
export const Title = styled.Text`
    font-size: 20px;
    margin: 5px 10px;
    font-weight: bold;
    font-family: Roboto_500Medium;
`;
export const Name = styled.Text`
    font-size: 17px;
    font-weight: bold;
    font-family: Roboto_500Medium;
    margin: 5px 0px;
`;
export const Image = styled.Image`
    height: 100px;
    width: 150px;
`;
export const ButtonOpenModal = styled.TouchableOpacity`
    background: #81b29a;
    border: none;
    padding: 5px 10px;
`;
export const TextButtonOpenModal = styled.Text`
    font-size: 15px;
    color: #eee;
    font-family: Roboto_500Medium;
`;