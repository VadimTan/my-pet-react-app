import React, { FC } from 'react';

interface Props {
	value: string;
	type: string;
	placeholder: string;
	onChange: (event: any) => void;
}

export const Input: FC<Props> = ({ type, placeholder, value, onChange }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};
