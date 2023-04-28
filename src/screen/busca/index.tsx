/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unstable-nested-components */

import {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {getUsuarioByLogin} from '../../service';
import {Usuario} from '../../components/usuario';
import {UsuarioType} from '../../models/usuario';
import {
  ContainerMensagemErro,
  MensagemErro,
} from '../../components/mesagemErro';

export const Busca = () => {
  const initialStateUsuario: UsuarioType = {
    id: 0,
    seguidores: 0,
    seguindo: 0,
    nome: '',
    login: '',
    avatar: '',
    repositorios: [],
  };
  const [exibirErro, setExibirErro] = useState<boolean>(false);
  const [nomeUsuario, setNomeUsario] = useState<string>('');
  const [usuario, setUsuario] = useState<UsuarioType>(initialStateUsuario);

  const handleTextInput = (usuario: string) => {
    setNomeUsario(usuario);
  };

  const buscarUsuario = async () => {
    const result = (await getUsuarioByLogin(nomeUsuario)) as UsuarioType[];
    const data: UsuarioType =
      result.length > 0 ? result[0] : {...initialStateUsuario};

    if (data.id > 0) {
      setExibirErro(false);
      setUsuario(data);
      Keyboard.dismiss();
      return;
    }

    mostrarMensagemErro();
  };

  const mostrarMensagemErro = () => {
    setExibirErro(true);
    setUsuario({...usuario, id: 0});

    setTimeout(() => {
      setExibirErro(false);
    }, 3000);
  };

  const ExibirUsuario = () => {
    if (!exibirErro && usuario.id > 0) {
      return <Usuario usuario={usuario} />;
    }

    if (exibirErro && nomeUsuario.length === 0) {
      return (
        <ContainerMensagemErro>
          <MensagemErro>
            Campo de buscar deve estar preenchido<></>
          </MensagemErro>
        </ContainerMensagemErro>
      );
    }

    if (exibirErro && usuario.id === 0) {
      return (
        <ContainerMensagemErro>
          <MensagemErro>Usuário não encontrado</MensagemErro>
        </ContainerMensagemErro>
      );
    }

    return <></>;
  };

  return (
    <View>
      <View id="usuario" style={styles.usuario}>
        <ExibirUsuario />
      </View>

      <View style={styles.viewBusca}>
        <TextInput
          style={styles.textInput}
          onChangeText={handleTextInput}
          placeholder="busque por um usuário"
        />
        <TouchableOpacity style={styles.botaoBuscar} onPress={buscarUsuario}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    marginBottom: 15,
  },
  viewBusca: {
    margin: 20,
    position: 'relative',
  },
  botaoBuscar: {
    borderWidth: 0.5,
    borderColor: '#8e44ad',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#8e44ad',
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  usuario: {marginBottom: 70},
});
