var product = JSON.parse(window.localStorage.getItem ('product')) 
var categoryName = window.sessionStorage.getItem('categoryname') 

document.getElementById ('categoryname').innerHTML = categoryName;

document.getElementById ('grid-product').innerHTML=`
    <div class="foto-produto">
    <img src=${product.image}>
    </div>

    <div class="text-product">
    <p  id="product-name" class="product-name">${product.name}</p>
    <p id="product-price" class="product-price">${product.price}</p>

    <!--Formulário-->

    <form action="">
        
        <fieldset>
            <label for="size" id="size">Tamanho</label>    
            <select name="size" id="tamanho">
                <option value="selecione">Selecione o tamanho</option>
                <option value="pp">PP</option>
                <option value="p">P</option>
                <option value="m">M</option>
                <option value="g">G</option>
                <option value="gg">GG</option>
            </select>
        </fieldset>

        <fieldset class="quantidade">

            <label for="quantidade">Quantidade</label>
            <input type="number" id="quantidade" name="quantidade" min="1" max="10" step="1">

        </fieldset>

        <fieldset>
            <legend>Forma de Pagamento</legend>

            <div class="radio">
                <input id="avista" type="radio" name="pag" value="avista" onclick="boleto()">
                <label for="avista"> À vista</label>
            </div>
            
            <p id="boleto" class="aviso-boleto">Se o pagamento for via boleto, poderá  demorar até 3 dias úteis para confirmação.</p>
            
            <div class="radio">
                <input id="parc" type="radio" name="pag" value="parc" onclick="parcela()">
                <label for="parc"> Parcelado</label>
            </div>

            <select class="parcelas" name="parcelas" id="parc-select">
                <option value="parcelas">Selecione o número de parcelas</option>
                <option value="1x">1x sem juros</option>
                <option value="2x">2x sem juros</option>
                <option value="3x">3x sem juros</option>
            </select>

        </fieldset>

        <div class="product-actions">
            <button>Adicionar ao Carrinho</button>
            <a><img src="assets/icons/heart.svg"></a>
        </div>
    </form>`

    function boleto () {
        document.getElementById ('boleto').style.display='block'
        document.getElementById('parc-select').style.display='none'
    }

    function parcela () {
        document.getElementById('parc-select').style.display='block'
        document.getElementById ('boleto').style.display='none'

    }

    function numeroparcelas () {
        product.price
    }





    