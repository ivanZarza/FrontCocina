import{z as c,_ as u,c as n,a as s,o as l,p as d,d as p,g as _}from"./index-Du6GS4nX.js";const m={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_URL:"http://api-tucompra.izarza.dev"},{VITE_API_URL:g}=m;class S{async logoutUsuario(){try{(await fetch(`${g}/api/listadelacompra/logout`,{method:"POST",credentials:"include"})).ok?console.log("Sesión cerrada"):console.error("Error al cerrar sesión")}catch(e){console.error(e)}}}const f=new S,h=c("datosUsuario",{state:()=>({usuario:{}}),actions:{establecerUsuario(o){this.usuario=o,localStorage.setItem("usuario",JSON.stringify(o))},obtenerDatosUsuario(){const o=JSON.parse(localStorage.getItem("usuario"));o&&(this.usuario=o)},limpiarUsuario(){this.usuario={},localStorage.removeItem("usuario"),console.log("usuario eliminado de localStorage")}}}),a=o=>(d("data-v-af7eab02"),o=o(),p(),o),U=a(()=>s("h1",null,"Aqui para cerrar sesión",-1)),I=a(()=>s("h3",null,"Se borraran todos los datos, excepto los que esten guardados en la base de datos",-1)),v={__name:"LogoutUsuarioView",setup(o){const e=h(),r=_(),t=async()=>{window.confirm("¿Estás seguro de que quieres cerrar sesión?")&&(await f.logoutUsuario(),r.push("/login"),e.limpiarUsuario(),localStorage.removeItem("recetasUsuario"))};return(i,w)=>(l(),n("div",null,[U,I,s("button",{onClick:t},"Cerrar Sesión")]))}},b=u(v,[["__scopeId","data-v-af7eab02"]]);export{b as default};