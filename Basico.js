try {
    let num=10;
    if(isNaN(num)){
        throw new Error ("El Caracter introducido no es Nro");
    }
    console.log(num*2);
} catch (error) {
    console.log("se produjo un error: $(error)")
}