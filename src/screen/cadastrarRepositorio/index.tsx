/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {View} from 'react-native';
import {Botao, InputTextStyled} from '../../components/componentsEstilizados';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  atualizarRepositorio,
  cadastrarRepositorio,
  deletarRepositorio,
} from '../../service';
import {useState} from 'react';
import {Repositorio} from '../../models/usuario';

export const CadastrarRepositorio = () => {
  const navigation = useNavigation();

  const {id, repositorio} = useRoute().params as {
    id: number;
    repositorio: Repositorio;
  };
  const [novoRepositorio, setNovoRepositorio] = useState<Repositorio>({
    ...repositorio,
  });

  const isEditar = novoRepositorio.id > 0;

  const handleCadastrarRepositorio = async () => {
    await cadastrarRepositorio(id, novoRepositorio.nome);
  };

  const handleNomeRepositorio = (nome: string) => {
    setNovoRepositorio({...novoRepositorio, nome});
  };

  const deletar = () => {
    deletarRepositorio(id, repositorio.id);
    retornarTela();
  };

  const editar = () => {
    atualizarRepositorio(id, {
      id: novoRepositorio.id,
      nome: novoRepositorio.nome,
    });
  };

  const retornarTela = () => {
    navigation.navigate('Busca');
  };

  return (
    <View>
      <InputTextStyled
        onChangeText={handleNomeRepositorio}
        placeholder="digite o nome do repositório"
        value={novoRepositorio.nome}
      />

      <View id="botoes">
        <Botao
          onPress={() => {
            if (isEditar) {
              editar();
              retornarTela();
              return;
            }
            handleCadastrarRepositorio();
            retornarTela();
          }}>
          {isEditar ? 'Editar' : 'Salvar'}
        </Botao>

        {isEditar && (
          <Botao color="danger" onPress={deletar}>
            Deletar
          </Botao>
        )}
      </View>
    </View>
  );
};
