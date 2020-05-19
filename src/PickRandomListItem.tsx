import React from 'react';

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
                <input className="app_randomgroup--button" type="button" value="Pick a random name!" onClick={handleRandomPick} />
                {pickedName !== "" &&
                    <p className="app_randomgroup--name">{pickedName}</p>
                }
            </div>
        </div>
    )
}
