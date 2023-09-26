    // Example POST method implementation:
    async function postData(url, data) {
        // Default options are marked with *
       // const response = await  
        fetch(url, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
                                    method: "POST", // *GET, POST, PUT, DELETE, etc.
                                    mode:"cors", // seguridad para controlar las solicitudes de dominios
                                    body: JSON.stringify(data), // body data type must match "Content-Type" header
                                    })
                                    .then(response => response.json())
                                    .then(data => console.log(data))
                                }
    
 document.addEventListener("DOMContentLoaded", function () {


    botonSubmit.addEventListener("click", function () {

            // Creo las variables para recibir los valores de los inputs

    let botonSubmit = document.getElementById("botonSubmit")

    let campoInputNombre = document.getElementById("name")

    let campoInputApellido = document.getElementById("apellido")

    let campoInputFecha = document.getElementById("fecha")


        // let campoInputNombre = document.getElementById("name")
        

        let jsonParaAPI = {
            "nombre": campoInputNombre.value,
            "apellido": campoInputApellido.value,
            "fecha": campoInputFecha.value
        }
    
        console.log("El JSON es:")
        console.log(jsonParaAPI)

        postData("https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/virginia", jsonParaAPI).then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
          });
    })

   
    
    
});
