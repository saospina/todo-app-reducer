import { todoReducer } from '../../reducers/todoReducer';
import { demoTodos } from '../fixtures/demoTodos';



describe('Tests for todoReducer', () => {

    test('should return the state by default ', () => {
        const state = todoReducer(demoTodos, {})
        expect(state).toEqual(demoTodos)
    });

    test('should add a new task', () => {

        const newTodo = {
            id: 3,
            desc: 'Learn nodejs',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(demoTodos, action)
        expect(state).toEqual([...demoTodos, newTodo])
    });

    test('should delete a todo', () => {
        
        const action = {
            type: 'delete',
            payload: 2
        }
        const state = todoReducer(demoTodos, action)
        expect(state).toEqual([demoTodos[0]])
    })



})
