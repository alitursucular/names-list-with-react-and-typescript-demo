import React from 'react';
import { PickedRandomListItem } from './PickedRandomListItem';

interface PickRandomListItemProps {
    pickName: PickName;
    pickedName: PickedName;
}

export const PickRandomListItem: React.FC<PickRandomListItemProps> = ({ pickName, pickedName }) => {

    const handleRandomPick = () => {
        pickName();
    }

    return (
        <div className="row">
            <div className="col-sm-12 app_randomgroup">
                {pickedName !== "" &&
                    <PickedRandomListItem pickedName={pickedName} />
                }
                <input className="app_randomgroup--button" type="button" value="Pick a random name!" onClick={handleRandomPick} />
            </div>
        </div>
    )
}
