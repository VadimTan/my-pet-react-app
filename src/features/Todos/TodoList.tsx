import React, { FC } from 'react';
import { TodoItem } from './TodoItem';
import { ToDo } from '../../App';

interface TodoListProps {
	className: string;
	deleteTask: (id: number) => void;
	todoDone: (id: number) => void;
	todos: ToDo[];
	children: React.ReactNode;
}

export const TodoList: FC<TodoListProps> = ({
	todoDone,
	className,
	deleteTask,
	todos,
}) => {
	return (
		<ul>
			{todos.map((rest, i) => (
				<TodoItem
					{...rest}
					key={i}
					className={className}
					deleteHandler={() => deleteTask(rest.id)}
					todoDone={() => todoDone(rest.id)}
				/>
			))}
		</ul>
	);
};
