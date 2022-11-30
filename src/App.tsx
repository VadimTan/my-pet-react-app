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

	const todoClearAll = (): void => {
		setTodos([]);
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

	const deleteTask = (): void => {
		setTodos((oldTodos) =>
			oldTodos.filter((todo: ToDo) => oldTodos.splice(todo.id, 1))
		);
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
				deleteTask={deleteTask}
				todos={todos}>
				<TodoItem
					className={'todo-items'}
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
