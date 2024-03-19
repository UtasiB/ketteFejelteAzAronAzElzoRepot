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
let osszegek = [];


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

        let ertek = user.quantity * user.unitprice;
        var frissit = document.createElement('input');
        frissit.type = "button";
        frissit.className = "btn btn-success";
        frissit.value = "()";
        frissit.onclick = function frissites(){
            for (let i = 0; i < osszegek.length; i++) {
                if (osszegek[i] == ertek) {
                    
                    osszegek[i] = mennyiseg.value * user.unitprice;
                    td5.innerHTML = mennyiseg.value * user.unitprice;
                    fizetendoSzamitas();
                }
                
            }
            
        };
        
        var mennyiseg = document.createElement('input');
        mennyiseg.type = "number";
        mennyiseg.className = "form-control";
        mennyiseg.style.color = "black"
        mennyiseg.style.backgroundColor = "white"
        mennyiseg.value = user.quantity;
       

        
        ar = user.unitprice * user.quantity;
        osszegek.push(ar);
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
        
        
        td1.style.backgroundColor = "goldenrod"
        td1.style.color = "white";
        td2.style.backgroundColor = "goldenrod"
        td2.style.color = "white";
        td3.style.backgroundColor = "goldenrod"
        td3.style.color = "white";
        td4.style.backgroundColor = "goldenrod"
        td4.style.color = "white";
        td5.style.backgroundColor = "goldenrod"
        td5.style.color = "white";
        td6.style.backgroundColor = "goldenrod"
        td6.style.color = "white";
        
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



        var mennyiseg = document.createElement('input');
        mennyiseg.type = "number";
        mennyiseg.className = "form-control";
        mennyiseg.style.color = "black"
        mennyiseg.style.backgroundColor = "white"
        mennyiseg.value = mennyisegID.value;

        
        let ertek = mennyiseg.value * egysegar.value;

        var frissit = document.createElement('input');
        frissit.type = "button";
        frissit.className = "btn btn-success";
        frissit.value = "()";
        frissit.onclick = function frissites(){
            for (let i = 0; i < osszegek.length; i++) {
                if (osszegek[i] == ertek) {
                    
                    osszegek[i] = mennyiseg.value * egysegar.value;
                    td5.innerHTML = mennyiseg.value * egysegar.value;
                    fizetendoSzamitas();
                }
                
            }
            
        };

        let ar = egysegar.value * mennyiseg.value
        osszegek.push(ar);

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
         
        td1.style.backgroundColor = "goldenrod"
        td1.style.color = "white";
        td2.style.backgroundColor = "goldenrod"
        td2.style.color = "white";
        td3.style.backgroundColor = "goldenrod"
        td3.style.color = "white";
        td4.style.backgroundColor = "goldenrod"
        td4.style.color = "white";
        td5.style.backgroundColor = "goldenrod"
        td5.style.color = "white";
        td6.style.backgroundColor = "goldenrod"
        td6.style.color = "white";
        
   
}

function teljesTorles(){
    tbody.remove();
    hozzaadottItemek = [];
    axios.delete('http://localhost:3000/hozzaadottak');
}

function mentes() {
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
    for (let i = 0; i < osszegek.length; i++) {
        osszeg += osszegek[i];
        
    }
    
    fizetendo.value = osszeg;

    for (let i = 0; i < hozzaadottItemek.length; i++) {
        hozzaadottItemek[i].price = osszegek[i];
        
    }
}

