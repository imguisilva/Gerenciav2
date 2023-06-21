//------------------------- IMPRIMIR -------------------------
const imprimir = document.getElementById('imprimir')

imprimir.addEventListener("click", (evt)=> {
    var data = $('#evento').select2('data');

    // const conteudo = document.getElementById('formulario').innerHTML;

    let estilo = "<style>";
    estilo += "form {width: 100%;font: 25px Calibri;}";
    estilo += "div {border: 1px solid #888;";
    estilo += "padding: 4px 8px; text-align: center;";
    estilo += "</style>";

    const win = window.open('', '', 'height=700, width=700');

    win.document.write('<html><head>');
    win.document.write('<title>PROTOCOLOS</title>');
    win.document.write(estilo);
    win.document.write('</head><body>');
    win.document.write('Evento: ');
    
    for (item in data){
        // alert(data[item].text);
        data.push(data[item].text);
        win.document.write(data[item].text + '; ');
    }
    win.document.write('</body></html>')

    win.print()

})