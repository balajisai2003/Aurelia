/* eslint-disable no-undef */
import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe('TodoList',() =>{
    let component;
    let todos = [
        { title: 'Item 1', done: false},
        { title: 'Item 2', done: false},
        { title: 'Item 3', done: true},
        { title: 'Item 4', done: false},
        { title: 'Item 5', done: true}
    ];

    beforeEach(() => {
        component = StageComponent
        .withResources('./resources/elements/todo-list')
        .inView('<todo-list todos.bind="todos"></todo-list>')
        .boundTo({todos});
    });

    it('should render the todos',done =>{
        component.create(bootstrap).then(()=>{
            const listElements = document.querySelectorAll('.item');
            expect(listElements[0].innerHTML).toBe('Item 1')
            done();
        }).catch(e =>{
            console.log(e.toString());
        })
    })

    afterEach(()=>{
        component.dispose();
    })
})
