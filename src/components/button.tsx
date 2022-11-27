import React, { FC, ReactNode } from 'react';

interface Props {
	clickHandler: () => void;
	children: ReactNode;
}

export const Button: FC<Props> = ({ clickHandler, children }) => {
	return <button onClick={clickHandler}>{children}</button>;
};
