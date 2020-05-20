import React from 'react';
import { ListItem } from './ListItem';

interface ListProps {
    names: Array<Name>;
    removeName: RemoveName;
}

export const List: React.FC<ListProps> = ({ names, removeName }) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <ul>
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