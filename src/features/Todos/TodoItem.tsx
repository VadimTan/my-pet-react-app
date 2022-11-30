import React, { FC } from 'react';
import { ToDo } from '../../App';
import { Button } from '../../components/button';

interface TodoItemProps extends ToDo {
	deleteHandler: (val: number) => void;
	todoDone: (val: boolean) => void;
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
			onClick={() => todoDone(!rest)}
			className="li-todos"
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
