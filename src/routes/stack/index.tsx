/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Busca} from '../../screen/busca';
import Repositorios from '../../screen/repositorios';
import {CadastrarRepositorio} from '../../screen/cadastrarRepositorio';
const Stack = createNativeStackNavigator();

export default function StackRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Busca" component={Busca} />
      <Stack.Screen name="Repositorios" component={Repositorios} />
      <Stack.Screen
        name="CadastrarRepositorio"
        component={CadastrarRepositorio}
      />
    </Stack.Navigator>
  );
}
