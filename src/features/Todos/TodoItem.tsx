import React, { FC } from 'react';
import { ToDo } from '../../App';
import { Button } from '../../components/button';

interface TodoItemProps extends ToDo {
	deleteHandler: (val: number) => void;
	todoDone: (val: boolean) => void;
}

export const TodoItem: FC<TodoItemProps> = ({
	deleteHandler,
	todoDone,
	...rest
}) => {
	return (
		<li
			onClick={() => todoDone(!rest)}
			className="li-todos"
			key={rest.id}>
			{rest.value}
			<Button clickHandler={() => deleteHandler(rest.id)}>delete</Button>
		</li>
	);
};
