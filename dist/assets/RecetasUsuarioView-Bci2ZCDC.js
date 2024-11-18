import{_ as I,o as i,c as l,a as e,F as f,p as w,d as M,b as c,i as V,w as x,v as z,t as p,r as C,e as J,j as ie,u as W,n as R,f as b,k,l as q}from"./index-Du6GS4nX.js";import{S as le}from"./servicioIngredientes-CWbiDZJm.js";import{V as re}from"./VentanaToast-Bwk1dkzL.js";import{c as ce,a as ue,b as de,d as j}from"./cantidades.helper-CQYEJ_OI.js";const O=n=>(w("data-v-80b0d240"),n=n(),M(),n),ve=O(()=>e("h1",null,"CREA TU RECETA",-1)),me=O(()=>e("h2",null,"En este apartado podrás crear tus propias recetas, siguiendo los pasos que se te indican a continuación. ",-1)),pe=O(()=>e("h2",null,"Primero, introduce el número de personas para las que quieres hacer la receta.",-1)),_e=O(()=>e("h2",null,"Después, elige el ingrediente principal, el acompañamiento y los condimentos.",-1)),fe=O(()=>e("h2",null,"Finalmente, escribe una descripción de la receta y si quieres, compártela con la comunidad.",-1)),$e={__name:"ExplicacionRecetas",emits:["mostrarDiv"],setup(n){return(d,s)=>(i(),l(f,null,[ve,e("div",null,[me,pe,_e,fe,e("button",{class:"btn",onClick:s[0]||(s[0]=u=>d.$emit("mostrarDiv",1))},"¿Empezamos?")])],64))}},be=I($e,[["__scopeId","data-v-80b0d240"]]),X=n=>(w("data-v-111ac672"),n=n(),M(),n),ge=X(()=>e("div",null,[e("h2",{class:"texto-pasos"},"PASO 1"),e("h3",null,"Ingresa el número de personas")],-1)),he={class:"numero-personas"},De=X(()=>e("span",null,"Número de personas:",-1)),Ie={class:"contenedor-botones"},Pe={__name:"PrimerPaso",emits:["mostrarDiv","cantidadDePersonas"],setup(n,{emit:d}){const s=c(1),u=d;return V(s,o=>{u("cantidadDePersonas",o)}),(o,a)=>(i(),l("div",null,[ge,e("div",he,[e("label",null,[De,x(e("input",{type:"number","onUpdate:modelValue":a[0]||(a[0]=t=>s.value=t),min:"1"},null,512),[[z,s.value]])])]),e("div",Ie,[e("button",{class:"btn",onClick:a[1]||(a[1]=t=>(o.$emit("mostrarDiv",2),o.$emit("cantidadDePersonas",s.value)))},"SIGUIENTE")])]))}},Ae=I(Pe,[["__scopeId","data-v-111ac672"]]),Se={class:"pasosIngredientes"},ke={class:"listaIngredientes"},Re={class:"contenedor-botones"},Ce={__name:"PasosIngredientes",props:{titulo:String,informacion:String,ingredientes:Array,siguiente:Number,anterior:Number},emits:["mostrarDiv"],setup(n){return(d,s)=>(i(),l(f,null,[e("div",null,[e("h2",null,p(n.titulo),1),e("h3",null,p(n.informacion),1)]),e("div",Se,[e("div",ke,[e("ol",null,[(i(!0),l(f,null,C(n.ingredientes,(u,o)=>(i(),l("li",{key:o},p(u.nombre),1))),128))])]),e("div",Re,[e("button",{class:"btn",onClick:s[0]||(s[0]=J(u=>d.$emit("mostrarDiv",n.anterior),["prevent","stop"]))},"ANTERIOR"),e("button",{class:"btn",onClick:s[1]||(s[1]=J(u=>d.$emit("mostrarDiv",n.siguiente),["prevent","stop"]))},"SIGUIENTE")])])],64))}},Q=I(Ce,[["__scopeId","data-v-80a27fa1"]]),ye=n=>(w("data-v-719158c1"),n=n(),M(),n),Te=ye(()=>e("div",null,[e("h2",{class:"texto-pasos"},"PASO 5"),e("h3",null,"Finaliza la receta escribiendo una descripcion si es necesario"),e("h3",null,"¿Qué tal si compartes tu receta con la comunidad?")],-1)),Ee={class:"descripcion"},Ne={class:"contenedor-botones"},xe={__name:"QuintoPaso",emits:["textoDescripcion","mostrarDiv","resultado"],setup(n,{emit:d}){const s=c(""),u=d;return V(s,o=>{u("textoDescripcion",o)}),(o,a)=>(i(),l(f,null,[Te,e("div",Ee,[x(e("textarea",{"onUpdate:modelValue":a[0]||(a[0]=t=>s.value=t)},null,512),[[z,s.value]]),e("div",Ne,[e("button",{class:"btn",onClick:a[1]||(a[1]=t=>o.$emit("mostrarDiv",4))},"ANTERIOR"),e("button",{class:"btn",onClick:a[2]||(a[2]=t=>o.$emit("resultado"))},"FINALIZAR")])])],64))}},we=I(xe,[["__scopeId","data-v-719158c1"]]),Z=n=>(w("data-v-96705502"),n=n(),M(),n),Me={class:"bus"},Ve=Z(()=>e("h1",null,"Busca tus ingredientes",-1)),Oe={class:"tipo"},Ue=Z(()=>e("span",null,"Selecciona por tipo de ingrediente",-1)),ze=Z(()=>e("option",{value:"null"},"Selecciona un tipo",-1)),Le=["value"],Be={class:"buscador"},Fe={class:"paginacion"},Ge=["disabled"],qe={class:"prueba"},je=["onClick"],Qe={__name:"PanelIngredientes",emits:["ingredienteSeleccionado"],setup(n,{expose:d,emit:s}){const u=c(""),o=c(""),a=c(1),t=new le,P=t.ingredientes,L=t.tipos;t.cargarTipos();const B=s;d({limpiarPanel:N});function A(){t.cargarIngredientes({nombre:u.value,tipo:o.value,pagina:a.value})}function F(){a.value=1,A()}const G=()=>{P.value.length>=20&&(a.value++,A())},_=()=>{a.value>1&&(a.value--,A())};function E(g){g.seleccionado||(g.seleccionado=!0,B("ingredienteSeleccionado",g),console.log(g))}V(o,()=>{A()});function N(){P.value.forEach(g=>{g.seleccionado=!1,u.value="",o.value="",a.value=1}),A()}return(g,S)=>(i(),l(f,null,[e("div",Me,[Ve,e("form",null,[e("div",Oe,[Ue,x(e("select",{"onUpdate:modelValue":S[0]||(S[0]=v=>o.value=v)},[ze,(i(!0),l(f,null,C(W(L),v=>(i(),l("option",{key:v.tipo,value:v.tipo},p(v.tipo),9,Le))),128))],512),[[ie,o.value]])]),e("div",Be,[x(e("input",{type:"search","onUpdate:modelValue":S[1]||(S[1]=v=>u.value=v),placeholder:"Busca por una palabra"},null,512),[[z,u.value]])]),e("button",{onClick:J(F,["prevent"])},"Buscar")])]),e("div",Fe,[e("button",{onClick:_,disabled:a.value===1},"Anterior",8,Ge),e("span",null,"Página "+p(a.value),1),e("button",{onClick:G},"Siguiente")]),e("div",qe,[(i(!0),l(f,null,C(W(P),v=>(i(),l("div",{class:R(["card",{seleccionado:v.seleccionado}]),key:v.id,onClick:H=>E(v)},[e("p",null,p(v.nombre),1)],10,je))),128))])],64))}},Je=I(Qe,[["__scopeId","data-v-96705502"]]),y=n=>(w("data-v-e352a3eb"),n=n(),M(),n),Ze=y(()=>e("h2",null,"Resumen de la Receta",-1)),He=y(()=>e("h3",null,"Principal",-1)),Ke={class:"listaIngredientes"},We=y(()=>e("h3",null,"Acompañamiento",-1)),Xe={class:"listaIngredientes"},Ye=y(()=>e("h3",null,"Condimentos",-1)),en={class:"listaIngredientes"},nn=y(()=>e("h3",null,[e("strong",null,"Descripción:")],-1)),tn={class:"descripcionFinal"},sn={class:"textoFinal"},on=y(()=>e("h3",null,"¿QUIERES PASAR TU RECETA A LA LISTA DE LA COMPRA?",-1)),an=y(()=>e("h3",null,"Agrega un nombre a tu receta",-1)),ln={__name:"ResumenReceta",props:{numeroDePersonas:Number,principal:Array,acompanamiento:Array,condimentos:Array,descripcion:String},emits:["agregarReceta","actualizarNombreReceta"],setup(n,{emit:d}){const s=c(""),u=d;return V(s,o=>{u("actualizarNombreReceta",o)}),(o,a)=>(i(),l(f,null,[Ze,e("h3",null," Para "+p(n.numeroDePersonas)+" "+p(n.numeroDePersonas===1?"persona":"personas"),1),He,e("div",Ke,[e("ol",null,[(i(!0),l(f,null,C(n.principal,t=>(i(),l("li",{key:t.id},p(t.nombre)+" - "+p(t.cantidad)+" Grs ",1))),128))])]),We,e("div",Xe,[e("ol",null,[(i(!0),l(f,null,C(n.acompanamiento,t=>(i(),l("li",{key:t.id},p(t.nombre)+" - "+p(t.cantidad)+" Grs ",1))),128))])]),Ye,e("div",en,[e("ol",null,[(i(!0),l(f,null,C(n.condimentos,t=>(i(),l("li",{key:t.id},p(t.nombre)+" - "+p(t.cantidad)+" Grs ",1))),128))])]),nn,e("pre",tn,p(n.descripcion),1),e("div",sn,[on,an,x(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=t=>s.value=t)},null,512),[[z,s.value]]),e("button",{class:"btn",onClick:a[1]||(a[1]=t=>o.$emit("agregarReceta"))},"AGREGAR A LA LISTA DE LA COMPRA")])],64))}},rn=I(ln,[["__scopeId","data-v-e352a3eb"]]),cn=["onClick"],un={__name:"IndicePasos",props:{divsDisponibles:Number,divActivo:Number},emits:["mostrarDiv"],setup(n,{emit:d}){const s=d;function u(o){s("mostrarDiv",o)}return(o,a)=>(i(!0),l(f,null,C(n.divsDisponibles,t=>(i(),l("button",{onClick:P=>u(t),class:R(["button",{active:t===n.divActivo}])},p(`PASO ${t}`),11,cn))),256))}},dn=I(un,[["__scopeId","data-v-e18fa293"]]),vn={class:"recetas-usuario-view"},mn={class:"indice"},pn={key:0,class:"explicacion"},_n={class:"contenedor"},fn={key:0},$n={class:"panel"},bn={key:1,class:"resumen"},gn={__name:"RecetasUsuarioView",setup(n){const d=c(1),s=c([]),u=c([]),o=c([]),a=c(""),t=c(""),P=c(!0),L=c(null),B=c(null),A=c(null),F=c(null),G=c(null),_=c(0),E=c(null),N=c(!1),g=c(!1),S=c(""),v=c(!1);function H(r){S.value=r,v.value=!0,setTimeout(()=>{v.value=!1},2e3)}function Y(r){d.value=r}function ee(r){a.value=r,console.log(a.value)}function ne(r){t.value=r}function K(){E.value&&E.value.limpiarPanel()}const T=c(null),h=c(0),D=c(null);V(T,r=>{console.log("currentStep",{value:r,pasosEl:D},D==null?void 0:D.value.children[r-1]),q(()=>{var m;(m=D==null?void 0:D.value.children[r-1])==null||m.scrollIntoView({behavior:"smooth",block:"center"}),K()})});const te={1:L,2:B,3:A,4:F,5:G};function $(r){T.value=r,r>h.value&&(h.value=r),_.value=r,r===1&&(P.value=!1);const m=te[r];m&&(m.value=!0,q(()=>{N.value=!0,K()})),r===5&&(N.value=!0)}function se(r){_.value,_.value===2&&s.value.push(ce(r,d.value)),_.value===3&&u.value.push(ue(r,d.value)),_.value===4&&o.value.push(de(r,d.value)),_.value}function oe(){s.value=j(s.value),u.value=j(u.value),o.value=j(o.value),q(()=>{N.value=!1,g.value=!0})}function ae(){let r=JSON.parse(localStorage.getItem("recetas"))||[];r.push({nombre:t.value,numeroDePersonas:d,principal:s.value,acompanamiento:u.value,condimentos:o.value,descripcion:a.value}),localStorage.setItem("recetas",JSON.stringify(r)),H("Receta añadida a la lista de la compra"),setTimeout(()=>{window.location.reload()},2e3)}return(r,m)=>(i(),l(f,null,[e("div",vn,[e("div",mn,[b(dn,{divsDisponibles:h.value,divActivo:T.value,onMostrarDiv:$},null,8,["divsDisponibles","divActivo"])]),P.value?(i(),l("div",pn,[b(be,{onMostrarDiv:$})])):k("",!0),e("div",_n,[e("div",{class:"pasos",ref_key:"pasosEl",ref:D},[h.value>=1?(i(),l("div",{key:0,class:R(["p1",{active:_.value===1}]),onClick:m[0]||(m[0]=U=>$(1))},[b(Ae,{numeroDePersonas:d.value,onMostrarDiv:$,onCantidadDePersonas:Y},null,8,["numeroDePersonas"])],2)):k("",!0),h.value>=2?(i(),l("div",{key:1,class:R(["p2",{active:_.value===2}]),onClick:m[1]||(m[1]=U=>$(2))},[b(Q,{ingredientes:s.value,anterior:1,siguiente:3,titulo:"PASO 2",informacion:"Elige el ingrediente principal",onMostrarDiv:$},null,8,["ingredientes"])],2)):k("",!0),h.value>=3?(i(),l("div",{key:2,class:R(["p3",{active:_.value===3}]),onClick:m[2]||(m[2]=U=>$(3))},[b(Q,{ingredientes:u.value,anterior:2,siguiente:4,titulo:"PASO 3",informacion:"Elige el acompañamiento",onMostrarDiv:$},null,8,["ingredientes"])],2)):k("",!0),h.value>=4?(i(),l("div",{key:3,class:R(["p4",{active:_.value===4}]),onClick:m[3]||(m[3]=U=>$(4))},[b(Q,{ingredientes:o.value,anterior:3,siguiente:5,titulo:"PASO 4",informacion:"Elige los condimentos",onMostrarDiv:$},null,8,["ingredientes"])],2)):k("",!0),h.value>=5?(i(),l("div",{key:4,class:R(["p5",{active:_.value===5}]),onClick:m[4]||(m[4]=U=>$(5))},[b(we,{onTextoDescripcion:ee,onMostrarDiv:$,onResultado:oe})],2)):k("",!0)],512),T.value>=1&&T.value<5?(i(),l("div",fn,[e("div",$n,[b(Je,{onIngredienteSeleccionado:se,ref_key:"panelIngredientesRef",ref:E},null,512)])])):T.value>=5?(i(),l("div",bn,[b(rn,{numeroDePersonas:d.value,principal:s.value,acompanamiento:u.value,condimentos:o.value,descripcion:a.value,onAgregarReceta:ae,onActualizarNombreReceta:ne},null,8,["numeroDePersonas","principal","acompanamiento","condimentos","descripcion"])])):k("",!0)])]),e("div",null,[b(re,{verToast:v.value,mensajeToast:S.value},null,8,["verToast","mensajeToast"])])],64))}},An=I(gn,[["__scopeId","data-v-583d7035"]]);export{An as default};