import React from 'react';

interface ListItemProps {
    name: Name;
    removeName: RemoveName;
}

export const ListItem: React.FC<ListItemProps> = ({ name, removeName }) => {

    const handleRemove = () => {
        removeName(name.id);
    }

    return (
        <li className="app_list_item">
            <span className="app_list_item--name">{name.text}</span>
            <span className="app_list_item--remove" onClick={handleRemove}>Remove</span>
        </li>
    )
}
