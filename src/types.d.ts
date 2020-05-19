type Name = {
    id: string,
    text: string;
}

type AddName = (newName: string) => void;

type RemoveName = (id: string) => void;

type PickName = () => void;

type PickedName = string;