var app = angular.module('bevasarlo', ['ngRoute', 'ngNotify']);
let kategoria = document.querySelector("#kategoria");
let termeknev = document.querySelector('#termeknev');
let egysegar = document.querySelector('#egysegar')
let tbody = document.querySelector('tbody');
let osszeg = document.querySelector('#osszeg');
let mennyisegID = document.querySelector('#mennyiseg');
let itemek = [];
let hozzaadottItemek = [];
let vegosszeg = 0;
let fizetendo = document.querySelector('#fizetendo');


app.run(function($rootScope){

    $rootScope.title = "Bevásárló lista";
        
    
});

axios.get('http://localhost:3000/mock_data').then(res => {

    itemek = res.data;
    itemek.forEach(user => {

        let optionCategory = document.createElement('option');
        optionCategory.value = user.category;
        optionCategory.innerText = user.category;
        kategoria.appendChild(optionCategory);

       

        let optionProduct = document.createElement('option');
        optionProduct.value = user.productname;
        optionProduct.innerText = user.productname;
        termeknev.appendChild(optionProduct);

       
    });
    kategoria.addEventListener('change', termeknevValtozas)
   


}); 

axios.get('http://localhost:3000/hozzaadottak').then(res => {
    hozzaadottItemek = res.data;
    hozzaadottItemek.forEach(user => {

        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');

        var btn = document.createElement('input');
        btn.type = "button";
        btn.className = "btn btn-danger";
        btn.value = "-";
        btn.onclick = function torles(){
            tr.remove();
        }
        var frissit = document.createElement('input');
        frissit.type = "button";
        frissit.className = "btn btn-success";
        frissit.value = "()";
        frissit.onclick = function frissites(){
            td5.innerHTML = mennyiseg.value * user.unitprice;
            
        };
        
        var mennyiseg = document.createElement('input');
        mennyiseg.type = "number";
        mennyiseg.className = "form-control";
        mennyiseg.value = user.quantity;
       

        
        ar = user.unitprice * user.quantity;

        td1.innerHTML = user.category;
        td2.innerHTML = user.productname;
        td4.innerHTML = user.unitprice;
        td5.innerHTML = ar;
        

        td3.appendChild(mennyiseg);
        td6.appendChild(frissit);
        td6.appendChild(btn);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tbody.appendChild(tr);
        fizetendoSzamitas();
       
      
    })
});

function termeknevValtozas() {
    for (let i = 0; i < itemek.length; i++) {
 
        if (termeknev.value == itemek[i].productname) {
            egysegar.value = itemek[i].price;
        }
       
    }
}

function mennyisegValtozas(){
   osszeg.value = mennyisegID.value * egysegar.value;
}

function kategoriaValtozas(){
    egysegar.value = 0;
    mennyisegID.value = 0;
    osszeg.value = 0;

    let selectedCategory = kategoria.value;
    let filteredProducts = itemek.filter(item => item.category === selectedCategory);
 
    termeknev.innerHTML = '<option selected>Válassz...</option>';
 
    filteredProducts.forEach(product => {
        let optionProduct = document.createElement('option');
        optionProduct.value = product.productname;
        optionProduct.innerText = product.productname;
        termeknev.appendChild(optionProduct);
    }); 
}

function adatHozzaadas(){

        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');

        var btn = document.createElement('input');
        btn.type = "button";
        btn.className = "btn btn-danger";
        btn.value = "-";
        btn.onclick = function torles(){
            tr.remove();
        }

        var frissit = document.createElement('input');
        frissit.type = "button";
        frissit.className = "btn btn-success";
        frissit.value = "()";
        frissit.onclick = function frissites(){
            td5.innerHTML = egysegar.value * mennyiseg.value;
            
        };


        var mennyiseg = document.createElement('input');
        mennyiseg.type = "number";
        mennyiseg.className = "form-control";
        mennyiseg.value = mennyisegID.value;

        let ar = egysegar.value * mennyiseg.value
        

        td1.innerHTML = kategoria.value;
        td2.innerHTML = termeknev.value;
        td4.innerHTML = egysegar.value;
        td5.innerHTML = ar;
        

        td3.appendChild(mennyiseg);
        td6.appendChild(frissit);
        td6.appendChild(btn);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tbody.appendChild(tr);
        hozzaadottItemek.push({"category":kategoria.value,"productname":termeknev.value,"quantity":mennyiseg.value,"unitprice":egysegar.value,"price":ar});
        fizetendoSzamitas();
    
        
   
}

function teljesTorles(){
    tbody.remove();
    hozzaadottItemek = [];
    axios.delete('http://localhost:3000/hozzaadottak');
}

function mentes() {
    let promises = [];
    axios.delete('http://localhost:3000/hozzaadottak');
    for (let i = 0; i < hozzaadottItemek.length; i++) {
        var data = {
            category: hozzaadottItemek[i].category,
            productname: hozzaadottItemek[i].productname,
            quantity: hozzaadottItemek[i].quantity,
            unitprice: hozzaadottItemek[i].unitprice,
            price: hozzaadottItemek[i].price
        };
        console.log(data);
        //promises.push(
         
            axios.post('http://localhost:3000/hozzaadottak', data)
                .then(response => {
                    console.log("Adat sikeresen elmentve:", response.data);
                })
                .catch(error => {
                    console.error("Hiba történt az adat mentése közben:", error);
                })
        //);
    }
    /*Promise.all(promises)
        .then(() => {
            console.log("Minden adat sikeresen elmentve.");
        })
        .catch(error => {
            console.error("Hiba történt a mentés során:", error);
        });*/
}


function fizetendoSzamitas(){
    let osszeg = 0;
    for (let i = 0; i < hozzaadottItemek.length; i++) {
        osszeg += hozzaadottItemek[i].price;
        
    }
    
    fizetendo.value = osszeg;

}

