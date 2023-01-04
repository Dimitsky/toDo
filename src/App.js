import { useState } from 'react';

// uuid
import { v4 as uuidv4 } from 'uuid';

// mui
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// my coms
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';

function App() {
	const [ todos, setTodos ] = useState([{_id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', text: 'First todo', isDone: true}]);

	// handlers
	const saveTodoHandle = text => {
		setTodos([
			...todos, 
			{
				_id: uuidv4(), 
				text, 
				isDone: false, 
			}
		]);
	}
	const toggleTodoHandle = id => {
		setTodos((prev => {
			const toggledTodo = prev.find(todo => todo._id === id);

			if (toggledTodo) toggledTodo.isDone = !toggledTodo.isDone;

			return [...prev];
		}));
	}
	const removeTodoHandle = (id) => {
		console.log(id);
	}

	return (
		<Container>
			<Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
				<Typography variant='h1'>
					ToDo
				</Typography>
				<TodoForm saveTodo={saveTodoHandle}/>
				<TodoList todos={todos} toggleTodo={toggleTodoHandle} removeTodo={removeTodoHandle}/>
			</Box>
		</Container>
	);
}

export default App;