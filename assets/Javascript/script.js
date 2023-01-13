const areaResponse = document.querySelector('.areaResponse');
const encriptar = document.querySelector('#encriptar');
const descriptografar = document.querySelector('#descriptografar');
const copiarTxt = document.querySelector('#copiar');
const txtResponse = document.querySelector('.txtResponse');
const txtArea = document.querySelector('.txtArea');

encriptar.addEventListener('click', encript);
descriptografar.addEventListener('click', descript);
copiarTxt.addEventListener('click', copiar);

function encript() {
    if( txtArea.value.length > 0) {
        const txtEncript = txtArea.value;
        const response = txtEncript
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a','ai')                                
        .replaceAll('o','ober')                                
        .replaceAll('u','ufat');

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
        const response = txtDescript
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai','a')
        .replaceAll('ober','o')
        .replaceAll('ufat','u');

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