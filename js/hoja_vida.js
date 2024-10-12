//const btnClick = document.getElementById("btnFind");  /// No cambian  

document.querySelector("#btnFind").addEventListener("click", () => {
  try {
    
    let  dresultad = document.getElementById("reslutadoFind");
         dresultad.innerHTML = "";
    
    //valor del input
    const idBuscar = document.getElementById("idfind").value;
    if(idBuscar ==''){
        alert("Ingrese un valor a Buscar ");
        return false;
    }

    //llamo a mi funcion  econtrar
     econtrar(idBuscar); //llamo a la funcun buscarID y le envio como parametro el valor a buscar
  } catch (error) {
    console.error("Error: " + error);
  }
});

function econtrar(idBuscar) {
  console.log("aqui esta el valor del input", idBuscar);

  let urlEndPoint = `https://jsonplaceholder.typicode.com/posts/${idBuscar}`;
  //llamar al Fetch
  //https://jsonplaceholder.typicode.com/posts/+valordelInput

  fetch(urlEndPoint) // ejecuto el llamado pordefecto es GET a la url
    .then((response) => response.json()) //entoncs la respuesta del lllamdo se regrea al response y al response le aplico una funcion para devolver los paramerteos tipo json
    .then((data) => {
      console.log(data); ///Utilizo data para evaluar la respuesta

      //referir a los elementos de un objeto con la clave
      /*
        {
         body: "ulla conqueras ad adasdasd", 
         id: 25,
         title: "rem alasias distincito qui quis", 
         userId: 3
         }      
      */
      //definimos donde vamos a devolver el valor que tenemos de la respuesta
      //del api
      const dresultado = document.getElementById("reslutadoFind");
      dresultado.innerHTML = "";
      let responseBody = "";

      if (data.id && data.id > 0) {
        responseBody += `<li><p><span class="negrita-size" ><img src="../images/favicons/favicon-16x16.png"  />ID: </span>${data.id} <a href="../cuatro.html" target="_blank">Actualice sus Datos</a></p></li>`;
        responseBody += `<li><p><span class="negrita-size" ><img src="../images/favicons/favicon-16x16.png"  />Titulo:</span> ${data.title}</p></li>`;
        responseBody += `<li><p><span class="negrita-size" ><img src="../images/favicons/favicon-16x16.png"  />Cuerpo:</span> ${data.body}</p></li>`;
        responseBody += `<li><p><span class="negrita-size" ><img src="../images/favicons/favicon-16x16.png"  />Usuario ID:</span> ${data.userId}</p></li>`;
      } else {
        responseBody = `<li><p><span class="negrita-no-found" >No se Encontraron Resultados</span></p></li>`;
      }

     dresultado.innerHTML = responseBody;
    });
}

/*

    crear la RAMA 
    creo en el local 
    git branch dev 
    hago los cambios  //add commit 

    una vez hecho los cambios, la primera vez 
    creo mi rama remota 
    Comando: 
    git branch -M dev  
    hago los cambios  // add commit  --->  ami rama remota dev 

    ------------------------
    con el comando 
    git checkout cambio de rama.  
    git checkout main 

    siempre debemos trabajar en la rem DEV y desde dev enviao a main 
     git  checkout main 
     git merge dev main   esto licua o combina los arcvhivos y lo que esta en dev pasa a main 
     git push -u origin main  
     
     


*/
//// Hola Soy Diego