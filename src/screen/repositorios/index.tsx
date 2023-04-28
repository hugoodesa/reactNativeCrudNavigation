/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-hooks/exhaustive-deps */
import {View, FlatList, TouchableOpacity} from 'react-native';
import {
  Botao,
  CardRepositorio,
  TextoPadrao,
  TituloCardRepositorio,
} from '../../components/componentsEstilizados';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Repositorio, UsuarioType} from '../../models/usuario';
import {useEffect, useState} from 'react';
import {getUsuario} from '../../service';

export default function Repositorios() {
  const initialState: UsuarioType = {
    id: 0,
    avatar: '',
    login: '',
    nome: '',
    repositorios: [],
    seguidores: 0,
    seguindo: 0,
  };

  const route = useRoute();
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState<UsuarioType>(initialState);

  const carregarUsuario = async () => {
    const {id: idUsuario}: UsuarioType = route.params as UsuarioType;

    console.log('ID :  ==> ' + idUsuario);

    const data = await getUsuario(idUsuario);
    console.log(data);
    setUsuario(await getUsuario(idUsuario));
  };

  const usuarioData: UsuarioType = route.params as UsuarioType;

  const cadastroRepositorio = () => {
    navigation.navigate('CadastrarRepositorio', {id: usuario.id});
  };

  const editarRepositorio = (item: Repositorio) => {
    navigation.navigate('CadastrarRepositorio', {
      id: usuario.id,
      repositorio: {
        ...item,
      },
    });
  };

  useEffect(() => {
    console.log('======');
    console.log('chamou');
    console.log('======');
    carregarUsuario();
    //setUsuario(usuarioData);
  }, []);

  return (
    <>
      <View>
        <TextoPadrao>
          {/* {usuarioData.repositorios !== null &&
            usuarioData.repositorios?.length}
          repositórios criados */}
        </TextoPadrao>
        <Botao onPress={cadastroRepositorio}>Adicionar novo repositório</Botao>
      </View>

      <>
        <FlatList
          style={{flex: 1}}
          data={usuario.repositorios}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => editarRepositorio(item)}>
              <CardRepositorio key={item.nome}>
                <TituloCardRepositorio key={item.id}>
                  {item.nome}
                </TituloCardRepositorio>
              </CardRepositorio>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.nome + item.id}
        />
      </>
    </>
  );
}
