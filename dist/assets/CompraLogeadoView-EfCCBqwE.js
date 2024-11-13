import{_ as q,b as d,c as t,a as e,F as m,r as v,t as n,u as x,k as I,w as M,v as z,f as J,o as s,n as $,p as H,d as K,g as Q}from"./index-Du6GS4nX.js";import{s as W}from"./servicioRecetasLogeado-DIgs21ug.js";import{V as X}from"./VentanaToast-Bwk1dkzL.js";import{h as Y}from"./html2pdf-BJIkh2LN.js";import"./_commonjsHelpers-C4iS2aBk.js";const i=_=>(H("data-v-4d79b0b4"),_=_(),K(),_),Z={class:"pagRecetas"},ee=["onClick"],ae={key:0,class:"container"},oe={class:"resumen"},te=i(()=>e("h2",null,"Principal",-1)),se={class:"listaIngredientes"},ne=i(()=>e("h2",null,"Acompañamiento",-1)),le={class:"listaIngredientes"},re=i(()=>e("h2",null,"Condimentos",-1)),ce={class:"listaIngredientes"},ie=i(()=>e("h2",null,[e("strong",null,"Descripción:")],-1)),ue={class:"descripcionFinal"},de=i(()=>e("h3",null,"Guarda tu receta en la base de datos",-1)),me=i(()=>e("h3",null,"Borra la receta seleccionada o todas las recetas de la lista de la compra",-1)),ve={class:"listaFinal"},pe=i(()=>e("h2",null,"Estas son las cantidades de ingredientes que tienes que comprar para las recetas que has creado:",-1)),_e={class:"ingredientesFinales"},he={key:0,class:"compraAñadida"},fe=i(()=>e("h2",null,"Estos son los productos que añadiste",-1)),be={class:"ingredientesAñadidos"},ge=i(()=>e("h2",null,"Puedes agregar productos a la lista de la compra",-1)),Re={class:"agregarCompra"},Ae={__name:"CompraLogeadoView",setup(_){const D=W,r=d([]),o=d(r.value[0]),p=d(0),h=d([]),f=d({nombre:""}),b=d(!1),g=d(""),T=Q(),R=d(null);function y(){r.value=JSON.parse(localStorage.getItem("recetasUsuario")||"[]"),A()}y();function P(l){o.value=l}function A(){r.value.length>0?(o.value=r.value[p.value],console.log(o.value)):(o.value=null,window.alert('No hay recetas que mostrar, por favor crea una receta en la zona de "CREAR RECETEAS" o añade una receta guardada, desde la zona "MIS DATOS" .'),T.push({name:"datosUsuario"}))}function F(){p.value<r.value.length-1&&(p.value++,A())}function G(){p.value>0&&(p.value--,A())}async function O(){const l=o.value;await D.guardarRecetaUsuario(l),g.value="Receta guardada en tu base de datos.",k()}function U(){const l=r.value.filter(c=>c.nombre!==o.value.nombre);l.length===0?localStorage.removeItem("recetasUsuario"):localStorage.setItem("recetasUsuario",JSON.stringify(l)),r.value=l,g.value="Receta borrada de la lista de la compra.",k()}function L(){localStorage.removeItem("recetasUsuario"),o.value=null,T.push({name:"datosUsuario"})}function N(l){const c={};return l.forEach(C=>{["principal","acompañamiento","condimentos"].forEach(S=>{C[S]&&C[S].forEach(u=>{const E=u.nombre;c[E]?c[E].cantidad+=u.cantidad:c[E]={nombre:u.nombre,cantidad:u.cantidad,tipo:u.tipo,principal:u.principal,acompañamiento:u.acompañamiento,condimento:u.condimento}})})}),Object.values(c)}const w=N(r.value);function B(){h.value.push({...f.value}),f.value={nombre:"",cantidad:0}}function V(){h.value=[]}const j=()=>{const l={margin:1,filename:"lista-de-compras.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}};R.value&&Y().set(l).from(R.value).save()};function k(){b.value=!0,setTimeout(()=>{b.value=!1},2e3)}return(l,c)=>(s(),t(m,null,[e("div",Z,[(s(!0),t(m,null,v(r.value,a=>(s(),t("div",{key:a.nombre},[e("button",{onClick:C=>P(a),class:$({recetaActiva:o.value.nombre===a.nombre})},n(a.nombre),11,ee)]))),128))]),o.value?(s(),t("div",ae,[e("div",oe,[e("div",{class:"pag"},[e("button",{onClick:G},"RECETA ANTERIOR"),e("button",{onClick:F},"SIGUIENTE RECETA")]),e("h1",null,"Receta: "+n(o.value.nombre),1),e("h2",null,"Para "+n(o.value.numeroDePersonas)+" "+n(o.value.numeroDePersonas===1?"persona":"personas"),1),te,e("div",se,[e("ol",null,[(s(!0),t(m,null,v(o.value.principal,a=>(s(),t("li",{key:a.id},n(a.nombre)+" - "+n(a.cantidad)+" Grs",1))),128))])]),ne,e("div",le,[e("ol",null,[(s(!0),t(m,null,v(o.value.acompanamiento,a=>(s(),t("li",{key:a.id},n(a.nombre)+" - "+n(a.cantidad)+" Grs",1))),128))])]),re,e("div",ce,[e("ol",null,[(s(!0),t(m,null,v(o.value.condimentos,a=>(s(),t("li",{key:a.id},n(a.nombre)+" - "+n(a.cantidad)+" Grs",1))),128))])]),ie,e("div",ue,[e("pre",null,n(o.value.descripcion),1)]),e("div",{class:"guardarReceta"},[de,e("button",{onClick:O},"GUARDA TU RECETA")]),e("div",{class:"borrarRecetas"},[me,e("button",{onClick:U},"BORRAR RECETA SELECCIONADA"),e("button",{onClick:L},"BORRAR TODAS LAS RECETAS")])]),e("div",ve,[e("div",{class:"PDF",ref_key:"generarPDFRef",ref:R},[pe,e("div",_e,[e("ul",null,[(s(!0),t(m,null,v(x(w),a=>(s(),t("li",{key:a.nombre},n(a.nombre)+" - "+n(a.cantidad)+" Grs",1))),128))])]),h.value.length>0?(s(),t("div",he,[fe,e("div",be,[e("ul",null,[(s(!0),t(m,null,v(h.value,a=>(s(),t("li",{key:a.nombre},n(a.nombre),1))),128))])])])):I("",!0)],512),ge,e("div",Re,[M(e("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=a=>f.value.nombre=a),placeholder:"Nombre del producto"},null,512),[[z,f.value.nombre]]),e("button",{onClick:B},"Agregar a la lista de la compra"),e("button",{onClick:V},"BORRAR COMPRA AGREGADA")]),e("div",{class:"btnPdf"},[e("button",{onClick:j},"Generar PDF")])]),e("div",null,[J(X,{verToast:b.value,mensajeToast:g.value},null,8,["verToast","mensajeToast"])])])):I("",!0)],64))}},Ie=q(Ae,[["__scopeId","data-v-4d79b0b4"]]);export{Ie as default};
