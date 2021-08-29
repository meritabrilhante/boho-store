/*Array de Categorias e Produtos */

var categories = [
    {
        title:'Destaques',
        products: [
            {
                image:'assets/products/destaques/conjunto-primavera.png',
                name: 'Conjunto Primavera',
                price:'R$ 159,90'
            },

            {
                image:'assets/products/destaques/conjunto-outono.png',
                name: 'Conjunto Outono',
                price:'R$ 259,90'
            },

            {
                image:'assets/products/destaques/poncho-creme.png',
                name: 'Poncho Creme',
                price:'R$ 269,90'
            },

            {
                image:'assets/products/destaques/jaqueta-rendada.png',
                name: 'Jaqueta Rendada',
                price:'R$ 179,90'
            },
        ]
    },

    {
        title:'Tendencias',
        products: [
            {
                image:'assets/products/tendencias/jaqueta-jeans.png',
                name: 'Jaqueta Jeans',
                price:'R$ 239,90'
            },

            {
                image:'assets/products/tendencias/conjunto-inverno.png',
                name: 'Conjunto Inverno',
                price:'R$ 259,90'
            },

            {
                image:'assets/products/tendencias/combo-calcas.png',
                name: 'Combo 3 Calças Jeans',
                price:'R$ 299,90'
            },

            {
                image:'assets/products/tendencias/combo-basiquinhas.png',
                name: 'Combo 3 Basiquinhas',
                price:'R$ 99,90'
            },
        ]
    },

    {
        title:'Acessórios',
        products: [
            {
                image:'assets/products/acessorios/oculos-redondo.png',
                name: 'Óculos Rendondo',
                price:'149,90'
            },

            {
                image:'assets/products/acessorios/combo-aneis-banhados.png',
                name: 'Combo 3 Anéis Banhados',
                price:'R$ 169,90'
            },

            {
                image:'assets/products/acessorios/oculos-retro.png',
                name: 'Óculos Retrô Preto',
                price:'R$ 99,90'
            },

            {
                image:'assets/products/acessorios/brincos-circulares.png',
                name: 'Brincos Circulares',
                price:'R$ 89,90'
            },
        ]
    },

    {
        title:'Sapatos',
        products: [
            {
                image:'assets/products/sapatos/tenis-adidas.png',
                name: 'Tenis Adidas SuperStar',
                price:'R$ 269,90'
            },

            {
                image:'assets/products/sapatos/bota-nude.png',
                name: 'Bota Nude Riviera',
                price:'R$ 369,90'
            },

            {
                image:'assets/products/sapatos/salto-nude.png',
                name: 'Salto Nude Chanel',
                price:'R$ 299,90'
            },

            {
                image:'assets/products/sapatos/anabella-bordo.png',
                name: 'Anabella Bordô',
                price:'R$ 189,90'
            },
        ]
    },
]

html$ = '';
for(var category of categories){
html$ += `
 <h4 id=${category.title} class="title-categorie">${category.title}</h4>

 <div class="products">
     ${
         category.products.map(product => (
            `<div class="card-product">              
                    <a onclick="gotoproductpage('${product.name}', '${product.price}', '${product.image}', '${category.title}')">
                        <img src=${product.image}>                        
                        <div class="name-favorite">
                            <p class="product-name" >${product.name}</p>
                            <img src="assets/icons/heart.svg"/>
                        </div>
                        <p class="product-price">${product.price}</p>
                    </a>               
            </div>`
            ))
        }
        </div>`;
        
    }

    
    
    document.getElementById("productscategories").innerHTML = html$;

    function gotoproductpage (name, price, image, categoryname) {  
        const product = {
            name,
            price,
            image
        }
        
        window.localStorage.setItem('product', JSON.stringify(product));
        window.sessionStorage.setItem('categoryname', categoryname);
        window.location.href='product.html'
    }
    

 /* Armazenamento de e-mail no LocalStorage */

function cadastraremail() {
    var email = document.getElementById('emailnewsletter').value
 
    window.localStorage.setItem('email', email);
 
    window.alert('Agora você ficará por dentro das nossas novidades!')
 
 }


