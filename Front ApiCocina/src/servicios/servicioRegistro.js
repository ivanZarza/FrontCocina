import { ref } from 'vue'

export default class ServicioRegistro {
  constructor() {
    this.registros = ref([])
  }

  async registrarUsuario( nombre,apellidos,contraseña) {
    const url = new URL('http://localhost:3000/api/listadelacompra/registro')
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: `${nombre}`,
        apellido: `${apellidos}`,
        contraseña: `${contraseña}`,
      })
    })
    this.registros.value.push(await response.json())}
}