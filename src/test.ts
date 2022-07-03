// interface isPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(n: number): number;
// }
// const me: isPerson = {
//     name: 'yasmen',
//     age: 20,
//     speak(text: string): void {
//         console.log(text)
//     },
//     spend(amount: number): number {
//         console.log(`i spent ${amount}`);
//         return amount;
//     }
// }
// console.log(me)
import { HasFormatter } from './interfaces/hasFormatter.js';

import {Invoice} from './classes/invoice.js'
import { Payment } from './classes/payment.js';
import { ListTemplate } from './classes/listTemplate.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs)

// const invOne = new Invoice('yasmen', 'work', 250);
// const invTwo = new Invoice('ahmed', 'work', 320);

// console.log(invOne, invTwo);
// // console.log(invOne.format());
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// // console.log(invoices);
// invoices.forEach(inv => console.log(inv.client, inv.amount, inv.format()));
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

const form = document.querySelector('.new-item-form') as HTMLFormElement;


const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end')
})
