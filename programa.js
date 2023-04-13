

class Teclado{


    generarTeclado(){

        const miTeclado=document.getElementById("teclado");

        for(let i=65; i<=90; i++){

            const letra= String.fromCharCode(i);
            this.crearBoton(letra, miTeclado);

            if(i==78){
                this.crearBoton("Ñ", miTeclado);
            }
        }

    }

    crearBoton(letra, contenedor){

        //TO DO Crear el botón
        console.log(letra);
        const btn= document.createElement("button");
        btn.id=letra;
        btn.textContent=letra;

        btn.classList.add("btn", "btn-primary", "m-1");



        btn.addEventListener(
            "click", 
            ()=>{
                this.presionarBoton(letra);
            }
            );

        contenedor.appendChild(btn);

    }

    presionarBoton(){

    }


}

const teclado=new Teclado();

teclado.generarTeclado();