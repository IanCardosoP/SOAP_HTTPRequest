

const getBtn = document.getElementById('obtner'); // boton de obtener


const getStockPrice = (stockName) => { // función principal para obtener
    var result = document.getElementById('obtenido'); // impresión en el doom
    const peticion = new XMLHttpRequest(); // instancia del XMLHttpRequest
    peticion.open('GET', 'lib/stock.php'); // creando la peticiṕn utilizando una simulación de servidor
    peticion.setRequestHeader('Content-Type', 'application/xml'); // cabecera XML

    peticion.onload = function() {
        var parser = new DOMParser(); // Crear un parser XML a DOM
        var xmlDoc = parser.parseFromString(peticion.response, "text/xml"); // parseando XML A doom
        var price = xmlDoc.getElementsByTagName("stock:Price")[0].textContent; 
    
        // Imprimir el precio
        console.log("Precio:", price);
        result.innerHTML = "$" + price;
    };
    

    // Construir la solicitud SOAP con el nombre de la acción según la gramática xml
    var soapRequest = `<?xml version="1.0" encoding="UTF-8"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:stock="http://www.example.org/stock">
            <soapenv:Header/>
            <soapenv:Body>
                <stock:GetStockPrice>
                    <stock:StockName>${stockName}</stock:StockName>
                </stock:GetStockPrice>
            </soapenv:Body>
        </soapenv:Envelope>`;

    // Enviar la solicitud al servidor
    peticion.send(soapRequest);

};


getBtn.addEventListener('click', getStockPrice);
// Llamar a la función para obtener el precio de una acción específica

