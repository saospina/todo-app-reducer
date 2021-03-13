import React from 'react'
import { useForm } from '../hooks/useForm';
import { TextField, Button } from '@material-ui/core';


export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset();

    }


    return (
        <>
            <h4>Adding TODO's</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <TextField
                    name="description"
                    label="Add a new task"
                    type="search"
                    autoComplete="off"
                    variant="outlined"
                    value={description}
                    onChange={handleInputChange}

                />

                <Button
                    style={{marginLeft: '20px'}}
                    variant="contained"
                    size="large"
                    type="submit"
                    color="primary"
                >
                    Add

                </Button>

            </form>

        </>
    )
}