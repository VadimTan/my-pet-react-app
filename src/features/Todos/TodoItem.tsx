import React, { FC } from 'react';
import { ToDo } from '../../App';
import { Button } from '../../components/button';

interface TodoItemProps extends ToDo {
	deleteHandler: (id: number) => void;
	todoDone: (id: number) => void;
	className: string;
}

export const TodoItem: FC<TodoItemProps> = ({
	deleteHandler,
	todoDone,
	className,
	...rest
}) => {
	return (
		<li
			onClick={() => todoDone(rest.id)}
			className="li-todos"
			style={{ textDecoration: rest.done ? 'line-through' : 'none' }}
			key={rest.id}>
			{rest.value}
			<Button
				className={className}
				clickHandler={() => deleteHandler(rest.id)}>
				Delete
			</Button>
		</li>
	);
};
