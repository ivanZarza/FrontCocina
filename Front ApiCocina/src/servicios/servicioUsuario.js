import { ref } from "vue"

export class ServicioUsuario {
  constructor() {
    this.usuario = ref([])
  }

  async obtenerUsuario(id) {

    const response = await fetch(`http://localhost:3000/api/listadelacompra/usuarios/${id}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data = await response.json()
      this.usuario.value = data
    } else {
      console.error('Error al obtener usuario:', response.statusText);
      console.log(response);
    }
  }

  async actualizarUsuario({ id, nombre, apellidos, contraseña }) {

    const response = await fetch(`http://localhost:3000/api/listadelacompra/usuarios/${id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'nombre': nombre,
        'apellidos': apellidos,
        'contraseña': contraseña,
      })
    });

    if (response.ok) {
      const responseData = await response.json();
      this.usuario.value = responseData;
    } else {
      console.error('Error al actualizar usuario:', response.statusText);
      console.log(response);
    }
  }

  async eliminarUsuario(id) {

    const response = await fetch(`http://localhost:3000/api/listadelacompra/usuarios/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const responseData = await response.json();
      this.usuario.value = responseData;
    } else {
      console.error('Error al eliminar usuario:', response.statusText);
      console.log(response);
    }
  }
}