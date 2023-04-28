/* eslint-disable prettier/prettier */

import axios from 'axios';
import {Repositorio, UsuarioType} from '../models/usuario';
const baseURL = 'http://192.168.1.21:9090/';

export const getUsuario = async (idUsuario: number): Promise<UsuarioType> => {
  const result = await axios.get(`usuarios/${idUsuario}`, {baseURL});
  return await result.data;
};

export const getUsuarioByLogin = async (login: string) => {
  const response = await axios.get(`usuarios?login=${login}`, {baseURL});
  return await response.data;
};

export const cadastrarRepositorio = async (idUsuario: number, repo: string) => {
  const usuario = await getUsuario(idUsuario);
  const novoRepositorio: Repositorio = {id: Date.now(), nome: repo};

  const newRepoState = [...usuario.repositorios, novoRepositorio];

  let newUsuarioState: UsuarioType = {...usuario, repositorios: newRepoState};

  await axios.put(`${baseURL}usuarios/${idUsuario}`, newUsuarioState);
};

export const deletarRepositorio = async (
  idUsuario: number,
  idRepositorio: number,
) => {
  const usuario: UsuarioType = await getUsuario(idUsuario);

  const newRepositoriesState = usuario.repositorios.filter(
    repositorio => repositorio.id !== idRepositorio,
  );

  const newUsuarioState: UsuarioType = {
    ...usuario,
    repositorios: [...newRepositoriesState],
  };

  axios.put(`${baseURL}usuarios/${idUsuario}`, newUsuarioState);
};

export const atualizarRepositorio = async (
  idUsuario: number,
  repositorio: Repositorio,
) => {
  const usuario = await getUsuario(idUsuario);

  const newRepositorioState = usuario.repositorios.map(repo => {
    if (repo.id === repositorio.id) {
      return repositorio;
    }
    return repo;
  });

  const newUsuarioState: UsuarioType = {
    ...usuario,
    repositorios: newRepositorioState,
  };

  axios.put(`${baseURL}usuarios/${idUsuario}`, newUsuarioState);
};
