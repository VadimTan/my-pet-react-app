import React, { FC } from 'react';
import { ToDo } from '../../App';
import { Button } from '../../components/button';
import DeleteIcon from '@mui/icons-material/Delete';

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
				onDoubleClick={() => todoDone(rest.id)}
				style={{ textDecoration: rest.done ? 'line-through' : 'none' }}
				className="li-todos"
				key={rest.id}>
				<p className="text-for-todo">{rest.id + '. ' + rest.value}</p>
			</li>
			<Button
				className={className}
				clickHandler={() => deleteTask(rest.id)}>
				<DeleteIcon />
			</Button>
		</div>
	);
};
