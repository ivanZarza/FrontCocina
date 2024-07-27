import { defineStore } from 'pinia'

export const useDatosUsuario = defineStore('datosUsuario', { // nombre de la store 
  state: () => ({ // estado inicial
    usuario: {},// variable usuario vacia representara el usuario logeado
  }),
  actions: { // acciones o funciones que se pueden ejecutar en la store
    establecerUsuario(usuario) { // funcion que recibe un usuario
      this.usuario = usuario // asigna el usuario a la variable usuario de la store
    },
  },
})