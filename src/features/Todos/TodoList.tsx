import React, { FC } from 'react';
import { TodoItem } from './TodoItem';
import { ToDo } from '../../App';

interface TodoListProps {
	className: string;
	deleteTask: (id: number) => void;
	todoDone: (val: boolean) => void;
	todos: ToDo[];
	children: React.ReactNode;
}

export const TodoList: FC<TodoListProps> = ({
	todoDone,
	className,
	deleteTask,
	todos,
}) => (
	<ul>
		{todos.map((rest, i) => (
			<TodoItem
				{...rest}
				key={i}
				className={className}
				deleteHandler={() => deleteTask(rest.id)}
				todoDone={(rest) => todoDone(!rest)}
			/>
		))}
	</ul>
);
