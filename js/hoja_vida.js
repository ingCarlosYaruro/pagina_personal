console.log("Mi tercer Commit xxx");

const btnClick = document.getElementById("btnResgitrarEducacion");

btnClick.addEventListener("click", registrar());

function registrar() {

    console.log("click en el boton Registrar");

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