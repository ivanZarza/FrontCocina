import { ref } from 'vue'

export class ServicioLogin {
  constructor() {
    this.login = ref([])
  }

  async loginUsuario({ nombre, contraseña }) {
    try {
      console.log('loginUsuario', { nombre,apellidos, contraseña })

      const response = await fetch('http://localhost:3000/api/listadelacompra/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'nombre': nombre,
          'apellidos': apellidos,
          'contraseña': contraseña,
        })
      });

      console.log('loginUsuario:then', response)

      if (!response.ok) {
        // Lanza un error si la respuesta no es exitosa
        throw new Error('Error al loguear usuario: ' + response.statusText);
      }

      const responseData = await response.json();
      this.login.value.push(responseData);
    } catch (error) {
      // Maneja tanto errores de red como errores lanzados manualmente
      console.error(error);
    }
  }
}

export const servicioLogin = new ServicioLogin()