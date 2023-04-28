/* eslint-disable prettier/prettier */

export type Repositorio = {
  id: number;
  nome: string;
};

export type UsuarioType = {
  id: number;
  seguidores: number;
  seguindo: number;
  nome: string;
  login: string;
  avatar: string;
  repositorios: Repositorio[];
};
