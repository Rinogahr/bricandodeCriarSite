

let avatarImg = document.getElementById('avatarImg');
let avatarFill = document.getElementById('avatarFill');
// let ImgAlterada = '';

avatarImg.addEventListener( 'click', () => {
    avatarFill.click();
});

avatarFill.addEventListener('change', (e) => {
    console.log(e);
    if(avatarFill.files < 0){
        return;
    }

    let newFile = new FileReader();

    newFile.onload = () => {
        avatarImg.src = newFile.result;
        salvarNoArmazenamentoDeDados(newFile.result);
    }

    newFile.readAsDataURL(avatarFill.files[0]);

});

function salvarNoArmazenamentoDeDados(value){
    localStorage.setItem('ImgAlterada', JSON.stringify(value));
}

function carregarImagemSalvaNoArmazenamentoDeDados(){
    let imagemSalva = localStorage.getItem('ImgAlterada');
    if( JSON.parse(imagemSalva) == null){
        return;
    }
    avatarImg.src = JSON.parse(imagemSalva);
    console.log(JSON.parse(imagemSalva));
}

carregarImagemSalvaNoArmazenamentoDeDados();