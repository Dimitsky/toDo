import { useState } from 'react';

// mui
import TextField from '@mui/material/TextField';

function TodoForm({ saveTodo }) {
    const [value, setValue] = useState('');
    const changeHandle = event => setValue(event.target.value);
    const submitHandle = event => {
        event.preventDefault();
        saveTodo(value);
    }

    return (
        <form onSubmit={submitHandle}>
            <TextField id="todo" label="enter todo" variant="outlined" defaultValue={value} onChange={changeHandle}/>
        </form>
    )
}

export {
    TodoForm, 
}