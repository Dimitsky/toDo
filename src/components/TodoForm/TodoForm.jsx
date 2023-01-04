import { useState } from 'react';

// mui
import TextField from '@mui/material/TextField';

function TodoForm({ saveTodo }) {
    const [value, setValue] = useState('');

    // handlers
    const changeHandle = event => {
        setValue(event.target.value);
    }
    const submitHandle = event => {
        event.preventDefault();
        saveTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={submitHandle}>
            <TextField id="todo" label="enter todo" variant="outlined" value={value} onChange={changeHandle}/>
        </form>
    )
}

export {
    TodoForm, 
}