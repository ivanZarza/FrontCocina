import { ref } from "vue"

export default class ServicioIngredientes {
  constructor() {
    this.ingredientes = ref([])
    this.totalElementos = ref([])
    this.tipos = ref([])
    this.porTipo = ref([])

  }
  async cargarIngredientes({ nombre = null, tipo = null, pagina = null } = {}) {
    const url = new URL('http://localhost:3000/api/listadelacompra/ingredientes')
    if (nombre) {
      url.searchParams.append('nombre', nombre)
    }
    if (tipo) {
      url.searchParams.append('tipo', tipo)
    }
    if (pagina) {
      url.searchParams.append('pagina', pagina)
    }

    const response = await fetch(url)
    const data = await response.json()
    this.ingredientes.value = data.resultados
    this.totalElementos.value = data.totalElementos
  }

  async cargarTipos() {
    const response = await fetch('http://localhost:3000/api/listadelacompra/ingredientes/tipo', )
    const data = await response.json()
    this.tipos.value = data
  }

  async cargarPorTipo(tipo) {
    const response = await fetch(`http://localhost:3000/ingredientes/tipo/${tipo}`)
    const data = await response.json()
    this.porTipo.value = data
  }


  async agregarIngrediente(ingrediente) {
    const response = await fetch('http://localhost:3000/ingredientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ingrediente)
    })
    this.ingredientes.value.push(await response.json())
  }

  async eliminarIngrediente(id) {
    await fetch(`http://localhost:3000/ingredientes/${id}`, {
      method: 'DELETE'
    })
    this.ingredientes.value = this.ingredientes.value.filter(ingrediente => ingrediente.id !== id)
  }

  async actualizarIngrediente(ingrediente) {
    await fetch(`http://localhost:3000/ingredientes/${ingrediente.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ingrediente)
    })
    this.ingredientes.value = this.ingredientes.value.map(i => i.id === ingrediente.id ? ingrediente : i)
  }


}