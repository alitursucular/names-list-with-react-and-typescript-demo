import React from 'react';

interface ListErrorProps {
    names: Array<Name>;
}

export const ListError: React.FC<ListErrorProps> = ({ names }) => {

    if (names.length !== 0) return null;

    return (
        <li className="text-danger">Your list is empty!</li>
    )
}