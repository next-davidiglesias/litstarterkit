// Import lit-html functions
import {html, render} from 'lit-html';

const myTemplate = (name) => 
   html`<div>Hello ${name}</div>`;

render(myTemplate('lit-html'), document.body);
