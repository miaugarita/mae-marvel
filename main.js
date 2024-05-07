const ts = 1;
let privateKey = 'b3c9e2f253531ddf5ccce62892b5b81907e85daa';
let publicKey = '109b9fa590a7e6b276addba72df08058';
//1b3c9e2f253531ddf5ccce62892b5b81907e85daa109b9fa590a7e6b276addba72df08058
// ts,  privateKey,  publicKey

let hashed = 'd6b8e30d8f5bc02ec2bc3226fd535588';

//url final para el consumo
let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hashed}`;
console.log(url);

//consumo de la api
const solicitarApi = async() =>{
    $.ajax({
        url: 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=109b9fa590a7e6b276addba72df08058&hash=d6b8e30d8f5bc02ec2bc3226fd535588',
        type: 'GET',
        success: function(data){
            console.log(data);
            const results = data.data.results;
            results.forEach(element => {
                heroCard(element);
            });
        },
        error: function(error){
            console.log(error);
        }
    });
}

//mostrar heroCaracter
const heroCard = (data) => {

    //imagen url
    let img = `${data.thumbnail.path}.${data.thumbnail.extension}`;

    const div = document.createElement('div');
    div.classList.add('div');
    div.innerHTML = `
    
    <div class="col">
        <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>${data.name}</title>
                <rect width="100%" height="100%" fill="#fff"></rect>
                <image href="${img}" width="100%" height="100%" />
            </svg>
            <div class="card-body">
                <p class="card-text">${data.name}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">view</button>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                </div>
            </div>
        </div>
    </div>

`;

    const container = document.getElementById('heroCards');
    container.appendChild(div);
}


//carga de doc
document.addEventListener('DOMContentLoaded', () => {
    solicitarApi();
});