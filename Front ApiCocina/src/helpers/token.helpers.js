export function estaAutenticado() {
    // Suponiendo que el nombre de tu cookie es 'auth_token'
    return document.cookie.split(';').some((item) => item.trim().startsWith('auth_token'));
  }