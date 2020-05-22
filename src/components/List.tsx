import React from 'react';
import { ListItem } from './ListItem';
import { ListError } from './ListError';

interface ListProps {
    names: Array<Name>;
    removeName: RemoveName;
}

export const List: React.FC<ListProps> = ({ names, removeName }) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <ul>
                    <ListError names={names} />
                    {names.map((name, index) => (
                        <ListItem
                            key={index}
                            name={name}
                            removeName={removeName} />
                    ))}
                </ul>
            </div>
        </div>
    )
}