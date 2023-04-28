/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const CardRepositorio = styled.View`
  margin: 10px 0px;
  padding: 25px;
  border-bottom-width: 0.5px;
  border-color: grey;
`;

export const TituloCardRepositorio = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: black;
`;

export const TextoPadrao = styled.Text`
  padding: 20px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  color: #34495e;
`;

type StyledButton = {
  color?: 'danger';
};

const StyledBotao = styled.TouchableOpacity<StyledButton>`
  //background-color: #8e44ad;
  background-color: ${props =>
    props.color !== 'danger' ? '#8e44ad' : 'tomato'};
  color: aliceblue;
  padding: 10px;
  text-align: center;
  width: 90%;
  align-self: center;
  border-radius: 8px;
  margin: 10px 0px;
`;

const TextoBotao = styled.Text`
  color: white;
  text-align: center;
  font-size: 14px;
`;

type botaoProps = {
  onPress: () => void;
  children: string;
  color?: 'danger';
};

export const Botao = ({onPress, color, children}: botaoProps): JSX.Element => {
  return (
    <StyledBotao color={color} onPress={onPress}>
      <TextoBotao>{children}</TextoBotao>
    </StyledBotao>
  );
};

export const InputTextStyled = styled.TextInput`
  width: 90%;
  align-self: center;
  border-width: 0.5px;
  border-color: grey;
  border-radius: 10px;
  margin-bottom: 15px;
  margin: 10px 0px;
`;
