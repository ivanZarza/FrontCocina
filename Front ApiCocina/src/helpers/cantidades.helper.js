

export function cantidadPrincipal(ingrediente, personas) {
  let cantidad = 0;
  

  if (ingrediente.tipo === 'carne' || ingrediente.tipo === 'pescado' || ingrediente.tipo === 'pasta') {
    cantidad = 200 * personas
  }
  
  if (ingrediente.tipo === 'verdura') {
    cantidad = 400 * personas;
  }
  
  if ( ingrediente.nombre === 'cereal' || ingrediente.tipo === 'legumbre') {
    cantidad = 100 * personas
  }
  
  if ( ingrediente.nombre === 'patata') {
    cantidad = 225 * personas;
  }

  const nuevoIngrediente = { ...ingrediente, cantidad }

  return nuevoIngrediente 
} 

export function cantidadAcompañamiento (ingrediente, personas) {
  let cantidad = 0;

  if (ingrediente.tipo === 'carne' || ingrediente.tipo === 'pescado' || ingrediente.tipo === 'pasta') {
    cantidad = 100 * personas
  }
  
  if (ingrediente.tipo === 'verdura') {
    cantidad = 200 * personas;
  }
  
  if ( ingrediente.nombre === 'cereal' || ingrediente.tipo === 'legumbre') {
    cantidad = 50 * personas
  }
  
  if ( ingrediente.nombre === 'patata' && ingrediente.tipo === 'verdura') {
    cantidad = 100 * personas;
  }

  if ( ingrediente.tipo === 'fruta') {
    cantidad = 100 * personas;
  }

  const nuevoIngrediente = { ...ingrediente, cantidad }

  return nuevoIngrediente 
}

export function cantidadCondimento (ingrediente, personas) {
  let cantidad = 0;

  if (ingrediente.tipo === 'carne' || ingrediente.tipo === 'pescado' || ingrediente.tipo === 'pasta') {
    cantidad = 20 * personas
  }
  
  if (ingrediente.tipo === 'verdura') {
    cantidad = 30 * personas;
  }
  
  if ( ingrediente.nombre === 'cereal' || ingrediente.tipo === 'legumbre') {
    cantidad = 20 * personas
  }

  if ( ingrediente.tipo === 'verdura' && ingrediente.nombre === 'ajo') {
    cantidad = 15 * personas;
  }
  
  if ( ingrediente.nombre === 'patata' && ingrediente.tipo === 'verdura') {
    cantidad = 30 * personas;
  }

  if ( ingrediente.tipo === 'fruta') {
    cantidad = 20 * personas;
  }

  if( ingrediente.tipo === 'frutos secos') {
    cantidad = 10 * personas;
  }

  if ( ingrediente.nombre === 'queso' ) {
    cantidad = 20 * personas;
  }

  if ( ingrediente.nombre === 'nata') {
    cantidad = 50 * personas;
  }

  const nuevoIngrediente = { ...ingrediente, cantidad }

  return nuevoIngrediente 

}

/* // Objeto para mapear tipos/nombres de ingredientes a cantidades base
const cantidadesBase = {
  principal: {
    carne: 200, pescado: 200, pasta: 200, verdura: 400, cereal: 100, legumbre: 100, patatas: 225
  },
  acompañamiento: {
    carne: 100, pescado: 100, pasta: 100, verdura: 200, cereal: 50, legumbre: 50, patatas: 100, fruta: 100
  },
  condimento: {
    carne: 20, pescado: 20, pasta: 20, verdura: 30, cereal: 20, legumbre: 20, patatas: 30, fruta: 20, 'frutos secos': 10, queso: 20, nata: 50, ajo: 15
  }
};

// Función genérica para calcular cantidades
function calcularCantidad(tipo, ingrediente, personas) {
  const base = cantidadesBase[tipo][ingrediente.tipo] || cantidadesBase[tipo][ingrediente.nombre] || 0;
  return { ingrediente, cantidad: base * personas };
}

// Exportar funciones específicas que utilizan la función genérica
export const principal = (ingrediente, personas) => calcularCantidad('principal', ingrediente, personas);
export const acompañamiento = (ingrediente, personas) => calcularCantidad('acompañamiento', ingrediente, personas);
export const condimento = (ingrediente, personas) => calcularCantidad('condimento', ingrediente, personas); */



/* function calcularCantidad(ingrediente, personas, multiplicadores) {
  let cantidad = 0;
  for (const clave in multiplicadores) {
    if (ingrediente.tipo === clave || ingrediente.nombre === clave) {
      cantidad = multiplicadores[clave] * personas;
      break; // Remover si se esperan múltiples coincidencias
    }
  }
  return cantidad;
}

export function principal(ingrediente, personas) {
  const multiplicadores = {
    'carne': 200, 'pescado': 200, 'pasta': 200,
    'verdura': 400, 'cereal': 100, 'legumbre': 100,
    'patata': 225 // Específico para cuando nombre es 'patata'
  };
  const cantidad = calcularCantidad(ingrediente, personas, multiplicadores);
  return { ingrediente, cantidad };
}

export function acompañamiento(ingrediente, personas) {
  const multiplicadores = {
    'carne': 100, 'pescado': 100, 'pasta': 100,
    'verdura': 200, 'cereal': 50, 'legumbre': 50,
    'patata': 100, 'fruta': 100
  };
  const cantidad = calcularCantidad(ingrediente, personas, multiplicadores);
  return { ingrediente, cantidad };
}

export function condimento(ingrediente, personas) {
  const multiplicadores = {
    'carne': 20, 'pescado': 20, 'pasta': 20,
    'verdura': 30, 'cereal': 20, 'legumbre': 20,
    'ajo': 15, 'patata': 30, 'fruta': 20,
    'frutos secos': 10, 'queso': 20, 'nata': 50
  };
  const cantidad = calcularCantidad(ingrediente, personas, multiplicadores);
  return { ingrediente, cantidad };
} */