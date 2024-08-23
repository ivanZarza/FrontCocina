

export function cantidadPrincipal(ingredientes, personas) {
  return ingredientes.map(ingrediente => {
  let cantidad = 0
  
  if (ingrediente.tipo === 'carne' || ingrediente.tipo === 'pescado' || ingrediente.tipo === 'pasta') {
     cantidad = (200 * personas ) / ingredientes.length
  }
  
  if (ingrediente.tipo === 'verdura') {
     cantidad = (400 * personas ) / ingredientes.length
  }

  if ( ingrediente.nombre === 'cereal' || ingrediente.tipo === 'legumbre') {
     cantidad = (100 * personas ) / ingredientes.length
  }
  
  if ( ingrediente.nombre === 'patata') {
     cantidad = (225 * personas ) / ingredientes.length
  }
  
  return { ...ingrediente, cantidad }


}) 
}
export function cantidadAcompañamiento (ingredientes, personas) {
  return ingredientes.map(ingrediente => {
  let cantidad = 0

  if (ingrediente.tipo === 'carne' || ingrediente.tipo === 'pescado' || ingrediente.tipo === 'pasta') {
   cantidad =  (100 * personas) / ingredientes.length
  }
  
  if (ingrediente.tipo === 'verdura') {
    cantidad = (200 * personas) / ingredientes.length
  }
  
  if ( ingrediente.nombre === 'cereal' || ingrediente.tipo === 'legumbre') {
    cantidad = (50 * personas)  / ingredientes.length
  }
  
  if ( ingrediente.nombre === 'patata' && ingrediente.tipo === 'verdura') {
    cantidad = (100 * personas) / ingredientes.length
  }
  if ( ingrediente.tipo === 'fruta') {
    cantidad = (100 * personas) / ingredientes.length
  }

  return  { ...ingrediente, cantidad }
})
}

export function cantidadCondimento (ingredientes, personas) {
  return ingredientes.map(ingrediente => {
  let cantidad = 0

  if (ingrediente.tipo === 'carne' || ingrediente.tipo === 'pescado' || ingrediente.tipo === 'pasta') {
    cantidad = (20 * personas) / ingredientes.length  }
  
  if (ingrediente.tipo === 'verdura') {
    cantidad = (30 * personas) / ingredientes.length
  }
  
  if ( ingrediente.nombre === 'cereal' || ingrediente.tipo === 'legumbre') {
    cantidad = (20 * personas) / ingredientes.length  }

  if ( ingrediente.tipo === 'verdura' && ingrediente.nombre === 'ajo') {
    cantidad = (15 * personas) / ingredientes.length
  }
  
  if ( ingrediente.nombre === 'patata' && ingrediente.tipo === 'verdura') {
    cantidad = (30 * personas) / ingredientes.length
  }

  if ( ingrediente.tipo === 'fruta') {
    cantidad = (20 * personas) / ingredientes.length
  }

  if( ingrediente.tipo === 'frutos secos') {
    cantidad = (10 * personas) / ingredientes.length
  }

  if ( ingrediente.nombre === 'queso' ) {
    cantidad = (20 * personas) / ingredientes.length
  }

  if ( ingrediente.nombre === 'nata') {
    cantidad = (50 * personas) / ingredientes.length
  }

  const nuevosIngredientes = { ...ingrediente, cantidad } 

  return nuevosIngredientes
})
}

