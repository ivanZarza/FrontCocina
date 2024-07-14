import { ref } from 'vue'

export default class ServicioRegistro {
  constructor() {
    this.registros = ref([])
  }

  async registrarUsuario(usuario) {
    const url = new URL('/api/listadelacompra/registro')
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    })
    this.registros.value.push(await response.json())}
}