<?php
// Recibir la solicitud SOAP
$soapRequest = file_get_contents('php://input');

$stockName = $STOCK;

$price = 100.00;

// Construir la respuesta SOAP con el precio de la acción
$soapResponse = "<?xml version='1.0' encoding='UTF-8'?>
<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:stock='http://www.example.org/stock'>
    <soapenv:Header/>
    <soapenv:Body>
        <stock:GetStockPriceResponse>
            <stock:Price>{$price}</stock:Price>
        </stock:GetStockPriceResponse>
    </soapenv:Body>
</soapenv:Envelope>";

// Devolver la respuesta al cliente
header('Content-Type: application/xml');
echo $soapResponse;
?>
