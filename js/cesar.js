window.addEventListener("load", inicio, true);


function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function() {
      this.value =this.value.toUpperCase();
      
    },true);
    document.getElementById("cifrar").addEventListener("click", function(){
      let texto=document.getElementById("mensaje").value;
      let desplazamiento=document.getElementById("desplazamiento").value;
      document.getElementById("resultado").value= cifrar(texto, desplazamiento);
    }, true);
    document.getElementById("descifrar").addEventListener("click", function(){
        let texto=document.getElementById("mensaje").value;
        let desplazamiento=document.getElementById("desplazamiento").value;
        document.getElementById("resultado").value= descifrar(texto, desplazamiento);
      }, true);
}
//modulo 27 con Ñ
function cifrar(texto, desplazamiento){
    let resul= "";
    let letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    desplazamiento= (desplazamiento % 27 + 27) % 27;

    if(texto){
        for(let i=0; i<texto.length; i++){
            if(letras.indexOf(texto[i])!=-1){
                let posicion=((letras.indexOf(texto[i])+desplazamiento)%27);
                resul += letras[posicion];
            }else
                resul += texto[i];
            
        }
    }
     return resul;
}
function descifrar(texto, desplazamiento){
    let resul= "";
    let letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    desplazamiento= (desplazamiento % 27 - 27) % 27;

    if(texto){
        for(let i=0; i<texto.length; i++){
            if(letras.indexOf(texto[i])!=-1){
                let posicion=((letras.indexOf(texto[i])-desplazamiento)%27);
                resul += letras[posicion];
            }else
                resul += texto[i];
            
        }
    }
     return resul;
}
//modulo 26 sin Ñ
function cifrar2(texto, desplazamiento){
    if(!texto)
        return "";
    const letras="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento= (desplazamiento % 26 + 26) % 26;
    return texto.replace(/[A-Z]/ig, c=>letras[(letras.indexOf(c)+desplazamiento)%27]);


}
function descifrar2(texto, desplazamiento){
    if(!texto)
        return "";
    const letras="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento= (desplazamiento % 26 - 26) % 26;
    return texto.replace(/[A-Z]/ig, c=>letras[(letras.indexOf(c)-desplazamiento)%27]);


}