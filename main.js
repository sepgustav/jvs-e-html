const form=document.getElementById("campos");

function  validaCampo ( campoA ){

    const  campoA = campoA ;

    if ( campoA . comprimento  <=  campoB ) {

        alert ( "O Valor do Campo B é inferior ao do Campo A" );

    } senão {

        alert ( "O Valor do Campo B é maior que o do Campo A" );

    }

}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const  campoA  =  documento . getElementById ( "campoA" ). valor ;

    const  campoB  =  documento . getElementById ( "campoB" ). valor ;

      validaCampo ( campoA , campoB );

})

console.log(form);
//fim