import { ref } from "vue"

export default class Servicio {
    constructor() {
        this.ingredientes = ref([])
        this.tipos = ref([])
        this.porTipo = ref({})
    }

    async cargarIngredientes() {
        const response = await fetch('http://localhost:3000/ingredientes')
        const data = await response.json()
        this.ingredientes.value = data
    }

    async cargarTipos() {
        const response = await fetch('http://localhost:3000/tipos')
        this.tipos.value = await response.json()
    }

    async cargarPorTipo(tipo, pagina) {
        const response = await fetch(`http://localhost:3000/ingredientes/tipo/${tipo}/${pagina}`)
        this.porTipo.value = await response.json()
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