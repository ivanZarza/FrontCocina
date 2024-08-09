import { defineStore } from 'pinia'

export const useDatosUsuario = defineStore('datosUsuario', {
  state: () => ({
    usuario: {}, // Variable usuario vacía representará el usuario logeado
  }),
  actions: {
    establecerUsuario(usuario) {
      this.usuario = usuario; // Asigna el usuario a la variable usuario de la store
      // Guarda el usuario en localStorage
      localStorage.setItem('usuario', JSON.stringify(usuario))
      console.log('usuario guardado en localStorage:', usuario);
    },
    limpiarUsuario() {
      this.usuario = {}; // Limpia la variable usuario de la store
      // Limpia el usuario de localStorage
      localStorage.removeItem('usuario');
      console.log('usuario eliminado de localStorage');
    },
  },
})
