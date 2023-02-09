const areaResponse = document.querySelector('.areaResponse');
const encriptar = document.querySelector('#encriptar');
const descriptografar = document.querySelector('#descriptografar');
const copiarTxt = document.querySelector('#copiar');
const txtResponse = document.querySelector('.txtResponse');
const txtArea = document.querySelector('.txtArea');

encriptar.addEventListener('click', encript);
descriptografar.addEventListener('click', descript);
copiarTxt.addEventListener('click', copiar);

const convertions = {

    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat',

    'E': 'entre',
    'I': 'semi',
    'A': 'iiaa',
    'O': 'breo',
    'U': 'fatu',
};



function encript() {
    if( txtArea.value.length > 0) {
        const txtEncript = txtArea.value;
        
        // percorre todas as conversões e substitui 'key' por 'value'
        Object.keys(convertions).forEach(key => {
            txtEncript = txtEncript.replaceAll(key, convertions[key]);
        })

        const response = txtEncript;

        txtResponse.innerHTML = response;
        txtArea.value = "";
        copiarTxt.style.display = "block";
        areaResponse.classList.add('response');
        return response;
    }
};

function descript() {
    if (txtArea.value.length > 0) {
        const txtDescript = txtArea.value;
        
        // percorre de trás para frente todas as conversões e substitui o 'value' por 'key' 
        Object.keys(convertions).reverse().forEach(key => {
            txtDescript = txtDescript.replaceAll(convertions[key], key);
        })

        const response = txtDescript;

        txtResponse.innerHTML = response;
        txtArea.value = "";
        copiarTxt.style.display = "block";
        areaResponse.classList.add('response');
        return response;
    }
};

copiarTxt.addEventListener('click', () => {
    const texto = document.querySelector('copiar').innerText;
    navigator.clipboard.writeText(texto);
    copiarTxt.innerText = 'Copiado!'
    copiarTxt.disabled = true;
  });