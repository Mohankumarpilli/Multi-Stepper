let count = 0;
const btn = document.getElementById('next-btn');
const go_back = document.getElementById('go-back-btn');
const footer = go_back.parentElement;
const input_1 = document.querySelector('#input-1')
const input_2 = document.querySelector('#input-2')
const input_3 = document.querySelector('#input-3')

const req_1 = document.querySelector('#val-1')
const req_2 = document.querySelector('#val-2')
const req_3 = document.querySelector('#val-3')

let year = false;

const circles_id = document.querySelectorAll('.circle-ids')


let user_detils = [];

const container = document.getElementById('1');
const first_div = container;

let plan_service_price = [
    {'plan': 'Arcade', 'price': '$9/mo'}];

btn.addEventListener('click', () => {
    validation();
})

input_1.addEventListener('keyup', () => {
    if(!input_1.classList.contains('hidden')){
        req_1.innerText = 'Min 3 Letters'
        if(input_1.value.length >= 3){
            input_1.classList.replace('border-red-500', 'border-black-500');
            req_1.classList.add('hidden')
        }
    }
})

input_2.addEventListener('keyup', () => {
    if(!input_2.classList.contains('hidden')){
        req_2.innerText = 'Should be a Email'
        if(isValidEmail(input_2.value)){
            input_2.classList.replace('border-red-500', 'border-black-500');
            req_2.classList.add('hidden')
        }
    }
})

input_3.addEventListener('keydown', (e) => {

    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
                        'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab','+','-'];
    
    if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
        if (!input_3.classList.contains('hidden')) {
            input_3.classList.remove('border-red-500');
            req_3.classList.add('hidden');
        }
    }
});

input_3.addEventListener('input', () => {
    input_3.value = input_3.value.replace(/[^0-9+\-]/g, '');
    
    input_3.classList.remove('border-red-500');
    req_3.classList.add('hidden');
});

function isValidEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function decerment_count(){
    count--;
    for(let i = 0; i < circles_id.length; i++){
        if(count == i){
            circles_id[i].classList.add('bg-[hsl(205,61%,93%)]');
            circles_id[i].classList.remove('bg-[hsl(243,100%,62%)]');
            circles_id[i].classList.replace('text-white', 'text-black');
        }else{
            circles_id[i].classList.remove('bg-[hsl(205,61%,93%)]');
            circles_id[i].classList.add('bg-[hsl(243,100%,62%)]');
            circles_id[i].classList.replace('text-white', 'text-black');
        }
    }
}

function validation() {
    let check = true;
    
    if(input_1.value == '' || input_1.value.length < 4){
        input_1.classList.add('border-red-500')
        req_1.classList.remove('hidden')
        check = false;
    }
    if(input_2.value == '' || !isValidEmail(input_2.value)){
        input_2.classList.add('border-red-500')
        req_2.classList.remove('hidden')
        check = false;
    }
    if(input_3.value == '' || input_3.value.length < 9){
        input_3.classList.add('border-red-500')
        req_3.classList.remove('hidden')
        check = false;
    }
    
    if(check){
        if(user_detils.length == 0){
            user_detils.push(input_1.value);
            user_detils.push(input_2.value);
            user_detils.push(input_3.value);
        }
        count++;
        choose_fun()
    }
}

function choose_fun(){
    for(let i = 0; i < circles_id.length; i++){
        if(count == i){
            circles_id[i].classList.add('bg-[hsl(205,61%,93%)]');
            circles_id[i].classList.remove('bg-[hsl(243,100%,62%)]');
            circles_id[i].classList.replace('text-white', 'text-black');
        }else{
            circles_id[i].classList.remove('bg-[hsl(205,61%,93%)]');
            circles_id[i].classList.add('bg-[hsl(243,100%,62%)]');
            circles_id[i].classList.replace('text-white', 'text-black');
        }
    }
    if(count == 1){
        second_div();
    }else if(count == 2){
        third_div();
    }else if(count == 3){
        fourth_div();
    }else if(count == 4){
        five_div();
    }
}

function create_ele(ele){
    return document.createElement(ele);
}

function addchild(parent,child){
    parent.appendChild(child);
}

function addclass(ele, style){
    ele.classList.add(...style)
}

function ele_text(ele,text){
    ele.innerText = text;
}

function second_div(){

    const new_div = create_ele('div');
    new_div.id = '2';

    const content_area = create_ele('div');

    const footer_area = create_ele('footer');

    const back_button = create_ele('button');
    back_button.id = 'go-back-btn'
    ele_text(back_button,'Go Back');

    const next_button = create_ele('button');
    next_button.id = 'next-btn'
    ele_text(next_button,'Next Step');

    addchild(footer_area,back_button);
    addchild(footer_area,next_button);

    addchild(new_div,content_area);
    addchild(new_div,footer_area);

    addclass(new_div,['px-15', 'pt-17', 'pb-8', 'w-full', 'h-full', 'flex', 'flex-col', 'justify-between'])

    addclass(content_area,['w-full', 'flex', 'flex-col', 'gap-2'])

    addclass(footer_area,['flex', 'justify-between', 'align-middle', 'p-5']);

    addclass(back_button,['text-gray-400', 'font-bold', 'py-3', 'px-5', 'rounded-xl'])
    addclass(next_button,['bg-[hsl(213,96%,18%)]', 'text-white', 'text-gray-400', 'font-bold', 'py-3', 'px-5', 'rounded-xl'])

    container.replaceWith(new_div);

    next_button.addEventListener( 'click', () => {
        validation();
    })

    back_button.addEventListener('click', () => {
        decerment_count();
        new_div.replaceWith(first_div);
    });

    const options_div = create_ele('div');
    addclass(options_div,['w-full', 'flex','flex-col', 'gap-1'])
        
    const h1 = create_ele('h1');
    ele_text(h1,'Select your plan');
    addclass(h1,['text-4xl', 'font-extrabold', 'text-[hsl(213,96%,18%)]']);
        
    const par = create_ele('p');
    ele_text(par, 'You have the option of monthly or yearly billing.');
    addclass(par,['text-gray-500', 'pl-0.5']);


    addchild(options_div,h1);
    addchild(options_div,par);

    addchild(content_area,options_div);

    const new_icons = create_ele('div');
    addclass(new_icons,['my-10', 'flex', 'flex', 'gap-4','h-full', 'w-full'])

    let container_1 = small_ele('bg-[url(./1.svg)]','Arcade','$9/mo','1');
    let container_2 = small_ele('bg-[url(./2.svg)]','Advance','$12/mo','2');
    let container_3 = small_ele('bg-[url(./3.svg)]','Pro','$15/mo','3');

    addchild(new_icons,container_1);
    addchild(new_icons,container_2);
    addchild(new_icons,container_3);

    addchild(content_area,new_icons);

    let toggle_line = create_toggle();

    addchild(content_area,toggle_line);
}

function small_ele(img, h_text, p_text,id) {
    const container = create_ele('div');
    container.id = id;
    
    if(id==1){
        addclass(container,['product-div', 'h-[190px]', 'w-[170px]', 'p-4', 'border-1', 'border-[hsl(243,100%,62%)]', 'rounded-xl', 'flex', 'flex-col', 'justify-between'])
    }else{
        addclass(container, ['product-div', 'h-[190px]', 'w-[170px]', 'p-4', 'border-1', 'border-gray-400', 'rounded-xl', 'flex', 'flex-col', 'justify-between']);
    }
    const content_div = create_ele('div');
    const h3 = create_ele('h3');
    ele_text(h3, h_text);
    addclass(h3, ['font-extrabold', 'text-[hsl(213,96%,18%)]']);

    const label = create_ele('label');
    ele_text(label, p_text);
    addclass(label, ['text-gray-400']);

    const year_details = create_ele('h5');
    ele_text(year_details,'2 months free')
    addclass(year_details, ['hidden', 'font-extrabold', 'text-[hsl(213,96%,18%)]']);

    addchild(content_div, h3);
    addchild(content_div, label);
    addchild(content_div,year_details)

    const bg_div = create_ele('div');
    const bg_icon = create_ele('p');
    addclass(bg_icon, ['w-10', 'h-10', img, 'bg-cover', 'bg-center', 'bg-no-repeat']);

    addchild(bg_div, bg_icon);
    addchild(container, bg_div);
    addchild(container, content_div);

    return container;
}

function create_toggle() {
    const div = create_ele('div');
    addclass(div, ['bg-[hsl(205,61%,93%)]', 'flex', 'items-center', 'justify-center', 'p-3', 'rounded-xl']);

    const h5 = create_ele('h5');
    ele_text(h5, 'Monthly');
    addclass(h5, ['font-extrabold', 'text-[hsl(213,96%,18%)]', 'p-1', 'text-center']);

    const toggle_btn = create_ele('div');
    addclass(toggle_btn, ['w-12', 'h-[25px]', 'bg-[hsl(213,96%,18%)]', 'rounded-full', 'mx-2', 'cursor-pointer', 'relative', 'flex', 'items-center']);

    const toggle_circle = create_ele('div');
    addclass(toggle_circle, ['w-4', 'h-4', 'bg-white','rounded-full', 'absolute', 'left-1', 'transition-all']);

    addchild(toggle_btn, toggle_circle);

    const h5_1 = create_ele('h5');
    ele_text(h5_1, 'Yearly');
    addclass(h5_1, ['font-extrabold', 'text-gray-400', 'p-1', 'text-center']);

    addchild(div, h5);
    addchild(div, toggle_btn);
    addchild(div, h5_1);
    toggle_btn.addEventListener('click', () => {
        if (toggle_circle.classList.contains('left-1')) {
            toggle_circle.classList.replace('left-1', 'left-7');
            year = true;
        } else {
            toggle_circle.classList.replace('left-7', 'left-1');
            year = false;
        }
        color_change(Array.from(toggle_circle.classList),h5,h5_1);
    });

    return div;
}

function color_change(arr,ele1,ele2){
    
    const parent = ele1.parentElement.previousElementSibling.children;
    if(arr.includes('left-7')){
        ele1.classList.replace('text-[hsl(213,96%,18%)]' ,'text-gray-400');
        ele2.classList.replace('text-gray-400','text-[hsl(213,96%,18%)]');
        if(plan_service_price.length > 0){
            plan_service_price = [
                {'plan': 'Arcade', 'price': '$90/yr'}];
        }
        add_year_price(parent);
    }else{
        ele2.classList.replace('text-[hsl(213,96%,18%)]' ,'text-gray-400');
        ele1.classList.replace('text-gray-400','text-[hsl(213,96%,18%)]');
        if(plan_service_price.length > 0){
            plan_service_price = [
                {'plan': 'Arcade', 'price': '$9/mo'}];
        }
        add_months_price(parent)
    }
}

function add_year_price(parent){
    let val = ['$90/yr','$120/yr','$150/yr'];
    let c = 0;
    for(let i of parent){
        let child =(i.lastElementChild)
        let ele1 = Array.from(child.children);
        ele1[ele1.length-1].classList.remove('hidden')
        ele1[1].innerText = val[c];
        c++;
    }
}

document.addEventListener('click', (event) => {
    // if(event.target.id == '1' || event.target.id == '2' || event.target.id == '3'){
    //     price_of_product(event.target);
    // }
    const parentDiv = event.target.closest('.product-div');

    if (parentDiv) {
        price_of_product(parentDiv);
    }
})

function price_of_product(ele){
    let parent = ele.parentElement.children;
    for(let i of parent){
        if(i.classList.contains('border-[hsl(243,100%,62%)]')){
            i.classList.replace('border-[hsl(243,100%,62%)]','border-gray-400');
        }
    }
    ele.classList.replace('border-gray-400', 'border-[hsl(243,100%,62%)]');

    const inner_ele = ele.children[1];
    let obj = {
        'plan' : inner_ele.children[0].innerText,
        'price' : inner_ele.children[1].innerText
    }
    if(plan_service_price.length > 0){
        plan_service_price = [];
        plan_service_price.push(obj);
    }else{
        plan_service_price.push(obj);
    }
}

function add_months_price(parent){
    let val = ['$9/mo','$12/mo','$15/mo'];
    let c = 0;
    for(let i of parent){
        let child =(i.lastElementChild)
        let ele1 = Array.from(child.children);
        ele1[ele1.length-1].classList.add('hidden')
        ele1[1].innerText = val[c];
        c++;
    }
}

function third_div(){
    const  older_div = document.getElementById('2');

    const new_div = create_ele('div');
    new_div.id = '3'

    const content_area = create_ele('div');

    const footer_area = create_ele('footer');

    const back_button = create_ele('button');
    ele_text(back_button,'Go Back');

    back_button.addEventListener('click', () => {
        decerment_count();
        new_div.replaceWith(older_div);
    })

    const next_button = create_ele('button');
    ele_text(next_button,'Next Step');

    next_button.addEventListener( 'click', () => {
        validation();
    })

    addchild(footer_area,back_button);
    addchild(footer_area,next_button);

    addchild(new_div,content_area);
    addchild(new_div,footer_area);

    addclass(new_div,['px-15', 'pt-17', 'pb-8', 'w-full', 'h-full', 'flex', 'flex-col', 'justify-between'])

    addclass(content_area,['w-full', 'flex', 'flex-col', 'gap-2'])

    addclass(footer_area,['flex', 'justify-between', 'align-middle', 'p-5']);

    addclass(back_button,['text-gray-400', 'font-bold', 'py-3', 'px-5', 'rounded-xl'])
    addclass(next_button,['bg-[hsl(213,96%,18%)]', 'text-white', 'text-gray-400', 'font-bold', 'py-3', 'px-5', 'rounded-xl'])

    older_div.replaceWith(new_div);


    const options_div = create_ele('div');
    addclass(options_div,['w-full', 'flex','flex-col', 'gap-1'])
        
    const h1 = create_ele('h1');
    ele_text(h1,'Pick add-ons');
    addclass(h1,['text-4xl', 'font-extrabold', 'text-[hsl(213,96%,18%)]']);
        
    const par = create_ele('p');
    ele_text(par, 'Add-ons help to enhance your gaming experience.');
    addclass(par,['text-gray-500', 'pl-0.5']);


    addchild(options_div,h1);
    addchild(options_div,par);

    addchild(content_area,options_div);

    const new_icons = create_ele('div');
    addclass(new_icons,['my-10', 'flex', 'flex-col', 'gap-4','h-full', 'w-full'])

    let container_1;
    let container_2;
    let container_3;

    if(!year){
        container_1 = pick_one('Online service','Access to multiplayer games','+$1/mo');
        container_2 = pick_one('Larger storage','Extra 1TB cloud save','+$2/mo');
        container_3 = pick_one('Customizable profile', 'Custom theme on your profile', '+$2/mo');
    }else{
        container_1 = pick_one('Online service','Access to multiplayer games','+$10/yr');
        container_2 = pick_one('Larger storage','Extra 1TB cloud save','+$20/yr');
        container_3 = pick_one('Customizable profile', 'Custom theme on your profile', '+$20/yr');
    }

    addchild(new_icons,container_1);
    addchild(new_icons,container_2);
    addchild(new_icons,container_3);

    addchild(content_area,new_icons);
}

function pick_one(text,para,rupee) {
    const div = create_ele('div')
    addclass(div,['flex','justify-between','border-1', 'border-gray-400', 'rounded-xl', 'p-4', 'align-middle', 'items-center']);
    const checked = create_ele('input')
    checked.type = 'checkbox';
    addclass(checked,['w-5','h-5']);
    div.addEventListener('click', (event) => {
        // Prevent checkbox click from toggling twice
        let obj = {
            'service' : text,
            'cost' : rupee
        }
        if (event.target !== checked) {
            checked.checked = !checked.checked;
        }
        let index = plan_service_price.findIndex(i => i.service === text);

        if (index !== -1) {
            // If found, remove it
            plan_service_price.splice(index, 1);
        } else {
            // If not found, add it
            plan_service_price.push(obj);
        }
    });

    const text_div = create_ele('div');
    addclass(text_div,['flex','flex-col','gap-2'])

    const title = create_ele('h4');
    ele_text(title,text);
    console.log(text.includes('L'))
    if(text.includes('L')){
        text_div.classList.add('pr-[52px]')
    }
    addclass(title,['text-xl','font-extrabold', 'text-[hsl(213,96%,18%)]']);

    const p = create_ele('p')
    ele_text(p,para);

    addchild(text_div,title);
    addchild(text_div,p);

    const price = create_ele('p');
    ele_text(price,rupee);
    addclass(price,['text-blue-500', 'font-bold', 'pt-4'])

    addchild(div,checked);
    addchild(div,text_div);
    addchild(div,price);
    return div;
}


function fourth_div(){
    const  older_div = document.getElementById('3');

    const new_div = create_ele('div');
    new_div.id = '4'

    const content_area = create_ele('div');

    const footer_area = create_ele('footer');

    const back_button = create_ele('button');
    ele_text(back_button,'Go Back');

    back_button.addEventListener('click', () => {
        decerment_count();
        new_div.replaceWith(older_div);
    })

    const next_button = create_ele('button');
    ele_text(next_button,'confirm');

    next_button.addEventListener('click', () => {
        validation();
    })

    addchild(footer_area,back_button);
    addchild(footer_area,next_button);

    addchild(new_div,content_area);
    addchild(new_div,footer_area);

    addclass(new_div,['px-15', 'pt-17', 'pb-8', 'w-full', 'h-full', 'flex', 'flex-col', 'justify-between']);

    addclass(content_area,['w-full', 'flex', 'flex-col', 'gap-2']);

    addclass(footer_area,['flex', 'justify-between', 'align-middle', 'p-5']);

    addclass(back_button,['text-gray-400', 'font-bold', 'py-3', 'px-5', 'rounded-xl']);
    addclass(next_button,['bg-[hsl(243,100%,62%)]', 'text-white', 'text-gray-400', 'font-bold', 'py-3', 'px-5', 'rounded-lg']);

    older_div.replaceWith(new_div);


    const options_div = create_ele('div');
    addclass(options_div,['w-full', 'flex','flex-col', 'gap-1']);
        
    const h1 = create_ele('h1');
    ele_text(h1,'Finishing up');
    addclass(h1,['text-4xl', 'font-extrabold', 'text-[hsl(213,96%,18%)]']);
        
    const par = create_ele('p');
    ele_text(par, 'Double-check everything looks OK before confirming.');
    addclass(par,['text-gray-500', 'pl-0.5']);


    addchild(options_div,h1);
    addchild(options_div,par);

    addchild(content_area,options_div);

    const new_icons = create_ele('div');
    addclass(new_icons,['my-10', 'flex', 'flex-col', 'gap-4','h-full', 'w-full']);
    let plan_options = plan_service_price.shift();
    let container_1 = price_chart(plan_options.plan,'Change',plan_options.price);
    plan_service_price.unshift(plan_options);
    addchild(new_icons,container_1);

    addchild(content_area,new_icons);
    const final_div = create_ele('div');
    addclass(final_div,['flex','justify-between','text-gray-400','p-4', 'font-bold']);
    const h2 = create_ele('h2');
    let total_price = sum_total_price();
    let months = total_price.includes('mo') ? 'Total (per month)' : 'Total (per year)';
    ele_text(h2,months);

    const p_2 = create_ele('p');
    addclass(p_2,['text-[20px]'])
    ele_text(p_2,total_price);
    addchild(final_div,h2);
    addchild(final_div,p_2);

    addchild(content_area,final_div);
}

function sum_total_price(){
    let check = true;
    let sum = 0;
    if(plan_service_price[0].price.includes('mo')){
        if(plan_service_price[0].plan.includes('Arcade')){
            sum = 9;
        }else if(plan_service_price[0].plan.includes('Advance')){
            sum = 12;
        }else if(plan_service_price[0].plan.includes('Pro')){
            sum = 15;
        }
    }else if(plan_service_price[0].price.includes('yr')){
        check = false;
        if(plan_service_price[0].plan.includes('Arcade')){
            sum = 90;
        }else if(plan_service_price[0].plan.includes('Advance')){
            sum = 120;
        }else if(plan_service_price[0].plan.includes('Pro')){
            sum = 150;
        }
    }
    console.log(plan_service_price)
    for(let i = 1; i < plan_service_price.length; i++){
        if(plan_service_price[i].cost.includes('mo')){
            if(plan_service_price[i].service.includes('Online')){
                sum += 1;
            }else {
                sum += 2;
            }
        }else if(plan_service_price[i].cost.includes('yr')){
            check = false;
            if(plan_service_price[i].service.includes('Online')){
                sum += 10;
            }else{
                sum += 20;
            }
        }
    }
    return check ? `$${sum}/mo` : `$${sum}/yr`
}

function price_chart(text,para,rupee) {
    const main_div = create_ele('div');
    addclass(main_div,['flex', 'flex-col','bg-[hsl(205,61%,93%)]', 'rounded-lg', 'p-4', 'align-middle'])
    const div = create_ele('div');
    addclass(div,['flex','justify-between','w-full', 'mb-4']);

    const text_div = create_ele('div');
    addclass(text_div,['flex','flex-col','gap-1'])

    const title = create_ele('h4');
    ele_text(title,text);
    addclass(title,['text-xl','font-extrabold', 'text-[hsl(213,96%,18%)]']);

    const p = create_ele('a')
    ele_text(p,para);

    addchild(text_div,title);
    addchild(text_div,p);

    const price = create_ele('p');
    ele_text(price,rupee);
    addclass(price,['text-blue-500', 'font-bold', 'pt-4', 'text-xl'])

    addchild(div,text_div);
    addchild(div,price);

    addchild(main_div,div);
    if(plan_service_price.length >= 1){
        add_service(main_div);
    }
    return main_div;
}

function add_service(parent){
    const hr = create_ele('hr');
    addchild(parent,hr);
    for(let i of plan_service_price){
        if(i.service != 'undefine'){
            addchild(parent,add_service_prices(i.service,i.cost));
        }
    }
}

function add_service_prices(text,price){
    const div = create_ele('div');
    addclass(div,['flex', 'flex-row', 'justify-between', 'p-4']);

    const h4 = create_ele('h4');
    h4.innerText = text;
     
    const p =  create_ele('p');
    p.innerText = price;

    addchild(div,h4);
    addchild(div,p);

    return div;
}


function five_div(){

    circles_id[3].classList.add('bg-[hsl(205,61%,93%)]');
    circles_id[3].classList.remove('bg-[hsl(243,100%,62%)]');
    circles_id[3].classList.replace('text-white', 'text-black');

    const container = document.getElementById('4');

    const new_div = create_ele('div');
    new_div.id = '5'

    const content_area = create_ele('div');

    addchild(new_div,content_area);

    addclass(new_div,['p-15', 'w-full', 'h-full', 'flex', 'flex-col', 'justify-center']);

    addclass(content_area,['w-full', 'flex', 'flex-col', 'gap-5','mb-30','justify-center', 'align-middle', 'text-center']);

    container.replaceWith(new_div);

    const div = create_ele('div');
    addclass(div,['flex','justify-center', 'w-full']);
    const img = create_ele('div');
    addclass(img,["bg-[url('./4.svg')]", 'w-[70px]', 'h-[70px]', 'bg-cover', 'bg-center', 'bg-no-repeat']);

    addchild(div,img);

    const h1 = create_ele('h1');
    addclass(h1,['text-[30px]','font-extrabold', 'w-full', 'text-[hsl(213,96%,18%)]'])
    h1.innerText = `Thankyou ${user_detils[0].toUpperCase()}`

    const h2 = create_ele('h2');
    addclass(h2,['text-[16px]', 'font-bold', 'w-full', 'text-green-400']);
    h2.innerText = `For any further information is shared with your \n ${user_detils[1]} or ${user_detils[2]}`;

    const p = create_ele('p');
    addclass(p,['text-[14px]', 'font-bold', 'w-full', 'text-gray-600']);
    p.innerText = 'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.'

    const footer = create_ele('footer');
    addclass(footer,['flex', 'justify-end', 'px-7'])
    const button = create_ele('button');
    button.innerText = 'home';
    button.addEventListener('click' ,() => {
        go_to_Home(new_div);
    })
    addchild(footer,button);

    addchild(content_area,div)
    addchild(content_area,h1)
    addchild(content_area,h2)
    addchild(content_area,p)

    addchild(new_div,footer);
    console.log(count);
}

function go_to_Home(ele){
    user_detils = [];
    plan_service_price = [{'plan': 'Arcade', 'price': '$9/mo'}];
    ele.replaceWith(first_div);
    count = 0;
    for(let i = 0; i < circles_id.length; i++){
        if(count == i){
            circles_id[i].classList.add('bg-[hsl(205,61%,93%)]');
            circles_id[i].classList.remove('bg-[hsl(243,100%,62%)]');
            circles_id[i].classList.replace('text-white', 'text-black');
        }else{
            circles_id[i].classList.remove('bg-[hsl(205,61%,93%)]');
            circles_id[i].classList.add('bg-[hsl(243,100%,62%)]');
            circles_id[i].classList.replace('text-white', 'text-black');
        }
    }
    input_1.value = '';
    input_2.value = '';
    input_3.value = '';
}