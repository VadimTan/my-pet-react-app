import React, { FC } from 'react';
import { TodoItem } from './TodoItem';
import { ToDo } from '../../App';

interface TodoItemProps extends ToDo {
	deleteTask: (id: number) => void;
	todoDone: (val: boolean) => void;
	todos: ToDo[];
}

export const TodoList: FC<TodoItemProps> = ({
	todoDone,
	deleteTask,
	todos,
	...rest
}) => (
	<ul>
		{todos.map((rest) => (
			<TodoItem
				{...rest}
				deleteHandler={deleteTask}
				todoDone={todoDone}
			/>
		))}
	</ul>
);
