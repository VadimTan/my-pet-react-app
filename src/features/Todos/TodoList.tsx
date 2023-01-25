import React, { FC } from 'react';
import { TodoItem } from './TodoItem';
import { ToDo } from '../../App';

interface TodoListProps {
	className: string;
	deleteHandler: (id: number) => void;
	todoDone: (id: number) => void;
	todos: ToDo[];
	children: React.ReactNode;
}

export const TodoList: FC<TodoListProps> = ({
	todoDone,
	deleteHandler,
	className,
	todos,
}) => {
	return (
		<ul>
			{todos.map((rest, i) => (
				<TodoItem
					{...rest}
					key={i}
					className={className}
					deleteTask={deleteHandler}
					todoDone={todoDone}
				/>
			))}
		</ul>
	);
};
