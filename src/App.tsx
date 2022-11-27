import React, { useState } from 'react';
import './App.css';
import { Button } from './components/button';
import { Input } from './components/input';
import { TodoItem } from './features/Todos/TodoItem';
import { TodoList } from './features/Todos/TodoList';

export interface ToDo {
	id: number;
	value: string;
	done: boolean;
}

const App = () => {
	const [newItem, setNewItem] = useState('');
	const [todos, setTodos] = useState<ToDo[]>([]);

	const addItem = () => {
		if (!newItem) {
			return;
		}

		const todo: ToDo = {
			id: Math.floor(Math.random() * 100),
			value: newItem,
			done: false,
		};

		setTodos((oldTodos) => [...oldTodos, todo]);
		setNewItem('');
	};

	const todoDone = (done: boolean): void => {
		const edited = todos.map((cur: ToDo) =>
			done === cur.done ? { ...cur, done: !cur.done } : cur
		);
		setTodos(edited);
	};

	const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewItem(e.target.value);
	};

	const deleteTask = (id: number): void => {
		setTodos((oldTodos) =>
			oldTodos.filter((todo: ToDo) =>
				todo.id > -1 ? oldTodos.slice(todo.id, 1) : null
			)
		);
	};

	return (
		<div className="App">
			<h1>ToDo List</h1>
			<Input
				type="text"
				placeholder="add new to-do"
				value={newItem}
				onChange={changeInputHandler}
			/>
			<Button clickHandler={addItem}>Add</Button>
			<TodoList
				deleteTask={deleteTask}
				todoDone={todoDone}
				todos={todos}
				id={Math.floor(Math.random() * 100)}
				value={newItem}
				done={false}>
				<TodoItem
					deleteHandler={deleteTask}
					todoDone={todoDone}
					id={Math.floor(Math.random() * 100)}
					value={newItem}
					done={false}
				/>
			</TodoList>
		</div>
	);
};

export default App;

//components/input.tsx

//TodoList.tsx
