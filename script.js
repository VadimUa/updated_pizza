'use strict'

let grid = document.querySelector('#grid');
let list = document.querySelector('#list');
let select = document.getElementById('select-list');
let name = document.getElementById('name');
let price = document.getElementById('price');
let adress = "https://jsonplaceholder.typicode.com/users";
let request = new XMLHttpRequest();


class pizza {
    constructor(name,callories,price,picture, ...composition){
        this.name = name;
        this.callories = callories;
        this.price = price;
        this.composition = composition;
        this.picture = picture
    }
} 

let pizzas = []

let margarita = new pizza("Margarita","920","100грн","https://images.pizza33.ua/products/product/KwY3WXlQpszxkHPvwjR8Qc7EFG7DzJ74.png","Пармезан Моцарелла Черри Курица Орегано Креветки")
let chelentano = new pizza("Chelentano","720","80грн","https://tomato.ua/image/resize/storage/restaurants/5dda9652b847b64a695d488c/15746064195dda96530a78f_5dda95f632f081.49912924.jpeg?w=1200&h=1200","Чедр Моцарелла Помидоры Ветчина Базилик Оливки")
let arcada = new pizza("Arcada","750","85грн","https://st.kloomba.com/img/club/2016/05/19/11111111-88b7dd03.jpg","Бри Моцарелла Черри Ветчина Базилик Ананас")
let milano = new pizza("Milano","820","90грн","https://futura-hub.com.ua/wp-content/uploads/thumbs/celentano_1-32019_05_994_723.jpg","Чедр Бри Помидоры Курица Орегано Острый Перец Перец ")
let florentia = new pizza("Florentia","870","80грн","https://baza.zruchno.com.ua/upload/dd5fa751-0ce4-6bbe-49e8-5938119e06b6_obj_img_2_c","Pomodoro Моцарелла Охотничьи кобаски Черри Бекон Базилик Оливки")
let venetia = new pizza("Venetia","870","100","https://lh3.googleusercontent.com/5dtUJJU2R8TPuzR6eM8thCxul4EwwFCSelZq5W-Urv8j3gqOBj5t7yL2N3FAT7_uMnZ8uzxjAw=w600-h0","Сыр с плесенью Моцарелла Бекон Ветчина Кальмар")
let del_toro = new pizza("Del toro","1000","110грн","https://nikolaev.eda.ua/images/48782-220-184-piczcza_soberi_sam.jpg","Чедр Моцарелла Бри Ветчина Говядина Pomodoro")
let rodeo = new pizza("Rodeo","780","80грн","https://tomato.ua/image/resize/storage/restaurants/590d775013e402116365d892/149451674459148408d0d8c_35de9a113d1ffff84e8f3771ff2b424f.jpg?w=1200&h=1200","Чедр Курица Ананас Оливки Помидоры")
let espada = new pizza("Espada","820","90грн","http://www.celentano.dn.ua/wp-content/uploads/2014/03/osnova.jpg","Чедр Моцарелла Пармезан Бри Сыр с плесенью Оливки")
let toscana = new pizza("Toscana","900","110грн","https://www.pizzaking.ua/resizer/resize/upload/catalog/e/e7c6ce8e7bffbd7fc86a4c119262da24-472-472-c.jpg","Лук Грибы Помидоры Pomodoro Оливки")
let roma = new pizza("Roma","1100","130грн","https://italpizzatomsk.ru/thumbs/w300-h300-c30.20/images/main-pizza.jpg","Лук Грибы Помидоры Ветчина Бекон Чедр Pomodoro Оливки")
let olive = new pizza("Olive","700","80грн","https://mamaitaliano.com.ua/wp-content/uploads/2019/08/Salami.jpg","Охотничьи Колбаски Ветчина Бекон Чедр Лук Pomodoro")
let barselona = new pizza("Barselona","1050","150грн","https://d1bjorv296jxfn.cloudfront.net/s3fs-public/styles/recipes_header_image/public/recipe-images/sargento/2106-red-zone-pizza.jpg?itok=OhjEvbkN","Моцарелла Чедр Бри Пармезан Камамбер Сыр с плесенью Лук Орегано")
let spot = new pizza("Spot","1000","120грн","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF21fnCF6QwiBijoYZmRQje0s5FUqm8io8W3AoxcSOmryKAuws","Грибы Ветчина Базилик Pomodoro")
let trevi = new pizza("Trevi","800","110грн","https://www.italb.co.uk/images/pizza.jpg","Лук Грибы Колбаски Моцарелла Помидоры Pomodoro Оливки")

pizzas.push(margarita)
pizzas.push(chelentano)
pizzas.push(arcada)
pizzas.push(milano)
pizzas.push(florentia)
pizzas.push(venetia)
pizzas.push(del_toro)
pizzas.push(rodeo)
pizzas.push(espada)
pizzas.push(toscana)
pizzas.push(roma)
pizzas.push(olive)
pizzas.push(barselona)
pizzas.push(spot)
pizzas.push(trevi)

function makeGrid(){
    select.classList.remove('hiden');
    name.classList.add('hiden');
    price.classList.add('hiden');

    let main = document.querySelector('main')
    main.innerText = ""
    main.classList.remove('listes');
    for(let i=0; i<pizzas.length;i++) {
        let pizza = document.createElement('div')
        pizza.className = "box"

        let picture = document.createElement('img')
        picture.src = pizzas[i].picture
        picture.setAttribute("width","100%");
        picture.setAttribute("height","230px");
        pizza.appendChild(picture)

        let name = document.createElement('span');
        name.innerText = pizzas[i].name
        pizza.appendChild(name)

        let callories = document.createElement('span');
        callories.innerText = pizzas[i].callories
        pizza.appendChild(callories)

        let price = document.createElement('span');
        price.innerText = pizzas[i].price
        pizza.appendChild(price)

        let composition = document.createElement('span');
        composition.innerText = pizzas[i].composition
        pizza.appendChild(composition)

        main.appendChild(pizza)

    }   
}

function makeList(){
    select.classList.add('hiden');
    name.classList.remove('hiden');
    price.classList.remove('hiden');

    let main = document.querySelector('main')
    main.innerText = ""
    main.className = "listes";

    for(let i=0; i<pizzas.length;i++) {
        let pizza = document.createElement('div')
        pizza.className = "list_item"
        
        let picture = document.createElement('img')
        picture.src = 'https://png.pngtree.com/png-vector/20190316/ourlarge/pngtree-pizza-icon-%7C-set-of-great-flat-icons-design-illustration-concept-png-image_854550.jpg';
        picture.setAttribute("width","75px");
        picture.setAttribute("height","75px");
        pizza.appendChild(picture)

        let name = document.createElement('span');
        name.className = "span_list"
        name.innerText = pizzas[i].name
        pizza.appendChild(name)

        let price = document.createElement('span');
        price.className = "span_list"
        price.innerText = pizzas[i].price
        pizza.appendChild(price)

        main.appendChild(pizza)
    }
}

function sortcomponent(){
    let main = document.querySelector('main')
    main.innerText = ""

    for(let i=0; i<pizzas.length;i++) {

            if(pizzas[i].composition[0].includes(this.value)){
            let pizza = document.createElement('div')
            pizza.className = "box"

            let picture = document.createElement('img')
            picture.src = pizzas[i].picture
            picture.setAttribute("width","100%");
            picture.setAttribute("height","230px");
            pizza.appendChild(picture)

            let name = document.createElement('span');
            name.innerText = pizzas[i].name
            pizza.appendChild(name)

            let callories = document.createElement('span');
            callories.innerText = pizzas[i].callories
            pizza.appendChild(callories)

            let price = document.createElement('span');
            price.innerText = pizzas[i].price
            pizza.appendChild(price)

            let composition = document.createElement('span');
            composition.innerText = pizzas[i].composition
            pizza.appendChild(composition)

            main.appendChild(pizza)
            console.log(this.value)
        } 
    }
}

function sortname (){
    pizzas.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })

   makeList()
}

function sortprice (){
    pizzas.sort((a,b) => parseInt(a.price)-parseInt(b.price) )

    makeList()

    let main = document.querySelector('main')
    let button = document.createElement('div');
    button.innerText = "Загрузить ещё"
    main.appendChild(button)

    button.addEventListener('click', () => {
        request.open("GET",adress)

        request.onload = () => {
            let users = JSON.parse(request.response)
            
            for(let i =0;i<users.length;i++){
                let block = document.createElement('span')
                block.innerText = users[i].name
                main.appendChild(block)
                //console.log(block)
            }
        }
        request.send()
    })
}


grid.addEventListener('click',makeGrid);
list.addEventListener('click',makeList);
select.addEventListener('change',sortcomponent);
name.addEventListener('click',sortname);
price.addEventListener('click',sortprice);


// request.open("GET",adress)

// request.onload = () => {
//     if(request.status >= 400){
//         console.error(request.response)
//     }
//     console.log(request.response)
// }
// request.onerror =() =>{
//     console.log(request.response)
// }
// request.send()