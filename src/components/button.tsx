import React, { FC, ReactNode } from 'react';

interface Props {
	className: string;
	clickHandler: () => void;
	children: ReactNode;
}

export const Button: FC<Props> = ({ className, clickHandler, children }) => {
	return (
		<button
			className={className}
			onClick={clickHandler}>
			{children}
		</button>
	);
};
