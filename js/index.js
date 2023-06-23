const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
      });
      searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close");
      });

      /* --------- FILTRO --------- */

      

      /* --------- FIM FILTRO --------- */

      let classe = document.getElementById('table');
      modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Acender Luz";
            tema = "ESCURO";
            
        } else {
            modeText.innerText = "Apagar Luz";
            tema = "CLARO";
        }

        localStorage.setItem("Tema", JSON.stringify(tema));

      });

let GetTheme = JSON.parse(localStorage.getItem("Tema"));
//console.log(GetTheme);

if(GetTheme === "ESCURO") {
  body.classList = "dark";
}

// ------------------ DATA AUTOMATICA ------------------

const myDate = new Date().toISOString().slice(0, 10); // requisita a data no formato iso e recorta apenas os 10 primeiros caracteres
const myInput = document.querySelector("#datapro");
myInput.value = myDate;

// ----------------- BLOQUEIO DE DATA RETROATIVA -----------------

var input = document.getElementById('dtlimite');
input.addEventListener('change', function() {
  var agora = new Date();
  var escolhida = new Date(this.value);
  if (escolhida < agora) this.value = [agora.getFullYear(), agora.getMonth() + 1, agora.getDate()].map(v => v < 10 ? '0' + v : v).join('-');
});

var input = document.getElementById('dtvenc');
input.addEventListener('change', function() {
  var agora = new Date();
  var escolhida = new Date(this.value);
  if (escolhida < agora) this.value = [agora.getFullYear(), agora.getMonth() + 1, agora.getDate()].map(v => v < 10 ? '0' + v : v).join('-');
});

// ---------------------- IMPRIMIR ----------------------

// const imprimir = document.getElementById('imprimir');

// imprimir.addEventListener("click", (evt)=> {
//     // POR ESSE MÉTODO NÃO ESTÁ PEGANDO OS VALORES DOS INPUTS. TERÁ QUE SER FEITO ATRAVÉS DO MEDIA PRINT E EDITAR A PAGINA
//     var data = $('#evento').select2('data');

//     const conteudo = document.getElementById('form').innerHTML;

//     let estilo = "<style>";
//     estilo += "@import url('https://fonts.googleapis.com/css2?family=Imprima&family=Poppins:wght@300;400;500;600;700&display=swap');"
//     estilo += "* {font-family: 'Poppins', sans-serif;}";
//     estilo += "span {font-family: Arial !important;}"
//     estilo += "form {width: 100%;}";
//     estilo += "label {font-size: 12px !important; font-weight: 900px;}";
//     estilo += ".campo-select, .select2, .select2-container, .select2-container--default, .select2-container--below, .btn, button, #evento, .select2-search, .select2-selection__clear, .select2-selection__choice__remove {display: none;}";
//     estilo += "textarea::placeholder {color: transparent;}";
//     estilo += "fieldset.grupo .campo {float: left; display: block; margin-right: 1em;}";
//     estilo += ".campo>label {margin-bottom: 0.2em; display: block;}"
//     estilo += ".campo{margin-bottom: 1em;}"
//     estilo += ".campo>input, .campo>select, .campo>textarea, .campo>button {border-radius: 5px; border-style: none; height: 32px; width: 180px; background-color: #ededed }"
//     estilo += "</style>";

//     const win = window.open('', '', 'height=700, width=700');

//     win.document.write('<html><head>');
//     win.document.write(estilo);
//     win.document.write('</head><body>');
//     win.document.write('<p style="text-align: center; font-size: 13px">Org. e Consult. Contábil Itamarathy Kohatsu Ltda.<br>Rua Astarte, 16 - Vl. Carrão - São Paulo<br>Tel: 2782-6900</p>');
//     win.document.write(conteudo);
//     win.document.write('<br>Evento(s): ');
//     for (item in data){
//         // alert(data[item].text);
//         data.push(data[item].text);
//         win.document.write(data[item].text + '; ');
//     }
//     win.document.write('<br><hr><br>');
//     win.document.write('<span style="text-align: start;">São Paulo: _____/_____/_____ &nbsp;&nbsp;&nbsp; Nome Legível: _____________________</span>');
//     win.document.write('<script>const myDate = new Date().toISOString().slice(0, 10); const myInput = document.querySelector("#datapro"); myInput.value = myDate;</script>'); //script data atual
//     win.document.write('</body></html>');
//     win.document.close();
//     win.print()

// });

// ------------------------------------------------------

