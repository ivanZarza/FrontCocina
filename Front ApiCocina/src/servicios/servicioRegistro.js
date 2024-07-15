import { ref } from 'vue'

export default class ServicioRegistro {
  constructor() {
    this.registros = ref([])
  }

  async registrarUsuario( nombre, apellidos, contraseña ) {

    const response = await fetch('http://localhost:3000/api/listadelacompra/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'nombre': nombre, 
        'apellido': apellidos,
        'contraseña': contraseña 
      })

    });
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