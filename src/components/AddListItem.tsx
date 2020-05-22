import React, { useState, ChangeEvent, FormEvent } from 'react';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AddListItemProps {
    addName: AddName;
}

export const AddListItem: React.FC<AddListItemProps> = ({ addName }) => {
    const [newName, setNewName] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addName(newName);
        setNewName("");
    }

    return (
        <div className="row">
            <div className="col-sm-12">
                <form className="app_list_form" onSubmit={handleSubmit}>
                    <input className="app_list_form--input" type="text" value={newName} onChange={handleChange} placeholder="Please type a name..." autoFocus />
                    <button className="app_list_form--button" type="submit" >
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                </form>
            </div>
        </div>
    )
}