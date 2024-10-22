import { ref } from 'vue'

export class ServicioRegistro {
  constructor() {
    this.registros = ref([])
  }

  async registrarUsuario({ nombre, apellidos, contraseña }) {
    try{

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

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al registrar usuario: ' + response.status);
    }
    // Asegúrate de manejar la respuesta adecuadamente aquí
    if (response.ok) {
      const responseData = await response.json();
      this.registros.value.push(responseData);
    }
  } catch (error) {
      throw error;
    }
  }
}

export const servicioRegistro = new ServicioRegistro()