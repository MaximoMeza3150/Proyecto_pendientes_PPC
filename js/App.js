//Select de operador de campo
var selectCampo = document.getElementById("opciones_Rele_campo")
//Contenedor del operador de campo
const contenedor_campo = document.getElementById("contenedor_campo")

selectCampo.addEventListener('change', function(){
        var estadoSelector = selectCampo.selectedIndex;
        var nombreSelector = selectCampo.options[selectCampo.selectedIndex].value;
        mostrarOperadores(estadoSelector,nombreSelector)
    })
// console.log(estadoSelector)


//Mostrar cards según selección
function mostrarOperadores (index, nombreSelector) {
    let titulo = `<h1> ${nombreSelector} </h1> `;
    imprimirTarjetas(OperadoresPPC, titulo)
}

function imprimirTarjetas(listaOperadores, titulo){
    //   const contenido = document.getElementById("platos")

    let cardsContenido = '';
      listaOperadores.forEach(({id, nombre, campo, areas, proyecto}) => {
        let cardProducto = `<div class="col-6 col-lg-3 mb-2">
                              <div class="card">
                                <div class="card-body">
                                  <h4 class="card-title">
                                    ${nombre}
                                  </h4>
                                  <p class="card-text">
                                    <p>${areas}</p>
                                    <p>${proyecto}</p>
                                  </p>
                                </div>
                                <div class="card-footer">
                                  <span class="fw-bold">Campo:</span> ${campo}
                                </div>
                              </div>
                            </div>`;
        cardsContenido = cardsContenido + cardProducto;                    
      })
  
      contenedor_campo.innerHTML = titulo + cardsContenido;
    }
  
// desde línea 15 a 49 15/06/ 10:46

// //Mostrar cards según selección
// function mostrarOperadores (index, nombreSelector) {
//     contenedor_campo.innerHTML = `<h1> ${nombreSelector} </h1> `;
//     imprimirTarjetas(OperadoresPPC)
// }

// function imprimirTarjetas(listaOperadores){
//     //   const contenido = document.getElementById("platos")
  
//       let cardsContenido = '';
  
//       listaOperadores.forEach(({id, nombre, campo, areas, proyecto}) => {
//         let cardProducto = `<div class="col-6 col-lg-3 mb-2">
//                               <div class="card">
//                                 <div class="card-body">
//                                   <h4 class="card-title">
//                                     ${nombre}
//                                   </h4>
//                                   <p class="card-text">
//                                     <p>${areas}</p>
//                                     <p>${proyecto}</p>
//                                   </p>
//                                 </div>
//                                 <div class="card-footer">
//                                   <span class="fw-bold">Campo:</span> ${campo}
//                                 </div>
//                               </div>
//                             </div>`;
//         cardsContenido = cardsContenido + cardProducto;                    
//       })
  
//       contenedor_campo.innerHTML = cardsContenido;
//     }
  


      

//Para exportar
var OperadoresPPC = [{
    id: 1,
    nombre:"Op. Criogénica 1 y 2",
    campo:"Procesos",
    areas:["Make Up", "Criogénica 1","Criogénica 2"],
    proyecto:"Planta inicial",
},
    {id:2,
    nombre:"Op. Criogénica 3 y 4",
    campo:"Procesos",
    areas:["Criogénica 3","Criogénica 4"],
    proyecto:"Primera ampliación",
},
    {id:3,
    nombre:"Op. Criogénica 5 y CSU 3",
    campo:"Procesos",
    areas:["Criogénica 5","Estabilización 3", "Compresores de reciclo 3"],
    proyecto:"Segunda ampliación",
},
    {id:4,
      nombre:"Op. estabilización",
      campo:"Procesos",
      areas:["Slug Catcher","Estabilización 1", "Compresores de reciclo 1", "Estabilización 2", "Compresores de reciclo 2", "CDU"],
      proyecto:"Planta inicial y primera ampliación",
},
    {id:5,
    nombre:"Op. TC NP 1-4",
    campo:"Procesos",
    areas:["NP1","NP2", "NP3", "NP4"],
    proyecto:"Primera ampliación",
},
    {id:6,
    nombre:"Op. TC NP 5 - S6-7",
    campo:"Procesos",
    areas:["NP5","S6", "S7", "Sala satélite", "Puente de medición"],
    proyecto:"Segunda ampliación",
},
    {id:7,
      nombre:"Op. WHC",
      campo:"Procesos",
      areas:["S1","S2","S3", "Servicios auxiliares WHC", "Sala CRUP"],
      proyecto:"Proyecto WHC",
},
    {id:8,
    nombre:"Op.servicios A",
    campo:"Servicios",
    areas:["Acond. de aceite térmico", "Sist. de gas combustible", "Aire de servicios e instrumentos", "Generación de nitrógeno"],
    proyecto:"Planta inicial y primera ampliación",
},

    {id:9,
    nombre:"Op. servicios B",
    campo:"Servicios",
    areas:["Drenajes y venteos","Alm. y bombeo de NGL", "Red Contra incendio", "Tratam. de agua potable"],
    proyecto:"Planta inicial",
},
    {id:10,
    nombre:"Op. CCM TG Solar 1-7",
    campo:"Servicios",
    areas:["CCM","TG-1","TG-2","TG-3","TG-4","TG-5","TG-6","TG-7",],
    proyecto:"Planta inicial, primera y segunda ampliación",
},

    {id:11,
    nombre:"Op. minitoping",
    campo:"Servicios",
    areas:["Minitoping y almacenamiento", "Pileta de agua de lluvia", "Tanque enterrado"],
    proyecto:"Proyecto minitoping",
},
    {id:12,
    nombre:"Op. PTAR",
    campo:"Servicios",
    areas:["TD-1", "TD-2", "Desgasificadores", "Estación de bombeo 04","Planta antigua" ],
    proyecto:"Proyecto TD-2",
}  
]