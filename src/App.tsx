import React, { useState } from 'react';
import './App.css';
import { Button } from './components/button';
import { Input } from './components/input';
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
			id: todos.length + 1,
			value: newItem,
			done: false,
		};

		setTodos((oldTodos) => [...oldTodos, todo]);
		setNewItem('');
	};

	const todoClearAll = (): void => {
		setTodos([]);
	};

	const todoDone = (id: number): void => {
		const edited = todos.map((cur: ToDo) => {
			if (cur.id === id) return { ...cur, done: !cur.done };
			return cur;
		});
		setTodos(edited);
	};

	const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewItem(e.target.value);
	};

	const deleteTask = (id: number): void => {
		const filteredItems = todos.filter((item) => item.id !== id);
		setTodos(filteredItems);
	};

	return (
		<div className="App">
			<h1 className="h1-todo">To-Do List</h1>
			<Input
				className={'input'}
				type="text"
				placeholder="add new to-do..."
				value={newItem}
				onChange={changeInputHandler}
			/>
			<>
				<Button
					className={'button-todo'}
					clickHandler={addItem}>
					Add
				</Button>
				<Button
					className={'button-clear-all'}
					clickHandler={todoClearAll}
					children={'Clear all'}></Button>
			</>
			<TodoList
				className={'todo-list-button'}
				todoDone={todoDone}
				deleteHandler={deleteTask}
				todos={todos}>
				{/* error */}
			</TodoList>
		</div>
	);
};

export default App;
