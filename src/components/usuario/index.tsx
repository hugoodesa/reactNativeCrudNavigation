/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {UsuarioType} from '../../models/usuario';
import {useNavigation} from '@react-navigation/native';

type props = {
  usuario: UsuarioType;
};

export const Usuario = ({usuario}: props) => {
  const navigation = useNavigation();

  const navegarRepositorio = () => {
    navigation.navigate('Repositorios', {...usuario});
  };

  return (
    <View id="usuario" style={styles.usuario}>
      <View id="topo" style={styles.topo} />

      <View style={styles.info}>
        <Image
          source={{
            uri: usuario.avatar,
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.infoUser}>
        <Text style={styles.nomeUsuario}>{usuario.nome}</Text>
        <Text style={styles.email}>{`${usuario.login}@email.com`}</Text>

        <View style={styles.viewSeguidoresSeguindo}>
          <View style={styles.seguindoSeguidores}>
            <Text style={styles.textoDestaque}>{usuario.seguidores}</Text>
            <Text>Seguidores</Text>
          </View>

          <View style={styles.seguindoSeguidores}>
            <Text style={styles.textoDestaque}>{usuario.seguindo}</Text>
            <Text>Seguindo</Text>
          </View>
        </View>

        <TouchableOpacity onPress={navegarRepositorio}>
          <Text style={styles.textoDestaque}>Ver os repositórios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  usuario: {
    marginBottom: 30,
  },
  topo: {
    height: 150,
    width: '100%',
    backgroundColor: '#bdc3c7',
    position: 'absolute',
  },
  avatar: {
    backgroundColor: '#bdc3c7',
    width: 140,
    height: 140,
    borderWidth: 15,
    borderColor: 'white',
    borderRadius: 100,
    top: 80,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  infoUser: {
    top: 80,
    alignItems: 'center',
  },
  nomeUsuario: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
  },
  email: {
    fontSize: 15,
  },
  textoDestaque: {
    color: '#8e44ad',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
  viewSeguidoresSeguindo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
    marginVertical: 10,
  },
  seguindoSeguidores: {
    alignItems: 'center',
  },
});
