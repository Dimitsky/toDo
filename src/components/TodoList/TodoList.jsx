import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList({ todos, toggleTodo, removeTodo }) {
    // handlers
    const clickHandle = (id) => {
        toggleTodo(id);
    }

    return (
        <List>
            {todos.map(todo => (
                <ListItem
                    key={todo._id}
                    sx={todo.isDone ? {opacity: '0.5'} : null}
                    secondaryAction={
                        <IconButton 
                            edge={'end'} 
                            onClick={() => removeTodo(todo._id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    }
                >
                    <ListItemButton onClick={() => clickHandle(todo._id)}>
                        <ListItemIcon>
                            <Checkbox 
                                checked={todo.isDone}
                            />
                        </ListItemIcon>
                        <ListItemText primary={todo.text}/>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}

export {
    TodoList, 
}