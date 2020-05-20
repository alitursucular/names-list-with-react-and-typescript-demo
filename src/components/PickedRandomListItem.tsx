import React from 'react';

interface PickedRandomListItemProps {
    pickedName: PickedName;
}

export const PickedRandomListItem: React.FC<PickedRandomListItemProps> = ({ pickedName }) => {
    return (
        <div className="app_randomgroup_result">
            <p>Picked name:</p>
            <p className="app_randomgroup_result--name">{pickedName}</p>
        </div>
    )
}
