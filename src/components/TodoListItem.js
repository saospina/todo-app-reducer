import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { makeStyles } from '@material-ui/core/styles';
import './todo.css';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));



export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {

    const complete = {
        textDecoration: todo.done ? 'line-through' : 'none'
    }
    const classes = useStyles();

    const labelId = `checkbox-list-secondary-label-${todo.id}`;

    return (
        <List dense className={classes.root}>
            <ListItem
                key={todo.id} button
                style={complete}>
                <ListItemText id={labelId} primary={`${index + 1}. ${todo.desc}`} />
                <HighlightOffIcon
                    color="secondary"
                    onClick={() => handleDelete(todo.id)}
                />
                <ListItemSecondaryAction>
                    <Checkbox
                        color="primary"
                        edge="end"
                        onChange={() => handleToggle(todo.id)}
                        checked={todo.done}
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemSecondaryAction>
            </ListItem>

        </List>
    )
}