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
    },
    inicializarUsuarioDesdeLocalStorage() {
      // Intenta obtener el usuario desde localStorage
      const usuarioGuardado = localStorage.getItem('usuario')
      if (usuarioGuardado) {
        // Si existe un usuario guardado, lo parsea y lo establece en el estado
        this.usuario = JSON.parse(usuarioGuardado);
      }
    },
  },
})
