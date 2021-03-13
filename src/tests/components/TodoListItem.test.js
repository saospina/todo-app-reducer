import react from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../components/TodoListItem';
import { demoTodos } from '../fixtures/demoTodos';

describe('Tests for TodoListItem componentw', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />);

    test('should be shown correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should handleDelete function', () => {
        wrapper.find('HighlightOffIcon').simulate('click')
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
    })


})
