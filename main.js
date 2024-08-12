let funcionAutoEjecutable = (() => {
    let global = "Hola";
    return {
        imprimirConsola: () =>{
            console.log(global);
        },
        imprimirDOM: () => {
            console.log("Imprimir en el dom");
            
        }
    }
})();

