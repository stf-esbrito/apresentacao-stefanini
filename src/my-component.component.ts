import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-component',
    template: `<p>Testando o component</p>`,
    styles: ['p {color:red}']
})

export class MyComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}