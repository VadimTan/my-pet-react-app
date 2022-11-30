import React, { FC } from 'react';

interface Props {
	value: string;
	type: string;
	placeholder: string;
	onChange: (event: any) => void;
	className: string;
}

export const Input: FC<Props> = ({
	className,
	type,
	placeholder,
	value,
	onChange,
}) => {
	return (
		<input
			className={className}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};
