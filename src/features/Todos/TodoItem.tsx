import React, { FC } from 'react';
import { ToDo } from '../../App';
import { Button } from '../../components/button';

interface TodoItemProps extends ToDo {
	deleteTask: (id: number) => void;
	todoDone: (id: number) => void;
	className: string;
}

export const TodoItem: FC<TodoItemProps> = ({
	deleteTask,
	todoDone,
	className,
	...rest
}) => {
	return (
		<div className="li-todo-list">
			<li
				onClick={() => todoDone(rest.id)}
				style={{ textDecoration: rest.done ? 'line-through' : 'none' }}
				className="li-todos"
				key={rest.id}>
				{rest.id + '. ' + rest.value}
			</li>
			<Button
				className={className}
				clickHandler={() => deleteTask(rest.id)}>
				Delete
			</Button>
		</div>
	);
};
