import { ref } from 'vue'

export class ServicioRegistro {
  constructor() {
    this.registros = ref([])
  }

  async registrarUsuario({ nombre, apellidos, contraseña }) {

    console.log('registrarUsuario', { nombre, apellidos, contraseña })

    const response = await fetch('http://localhost:3000/api/listadelacompra/registro', {
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

    console.log('registrarUsuario:then', response)
    // Asegúrate de manejar la respuesta adecuadamente aquí
    if (response.ok) {
      const responseData = await response.json();
      this.registros.value.push(responseData);
    } else {
      // Manejar el caso de error
      console.error('Error al registrar usuario:', response.statusText);
      console.log(response);
      console.log(error);
    }
  }
}

export const servicioRegistro = new ServicioRegistro()