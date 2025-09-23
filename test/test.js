saludar=function(){
    let name = recuperarTexto('txtNombre');
    let lastname = recuperarTexto('txtApellido');
    let saludo = generarSaludo(name, lastname);
    cambiarTexto("lblResultado",saludo);
}