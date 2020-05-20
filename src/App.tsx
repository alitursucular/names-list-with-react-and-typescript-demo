import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { initialNames } from './initialNames';
import { Header } from './components/Header';
import { AddListItem } from './components/AddListItem';
import { List } from './components/List';
import { PickRandomListItem } from './components/PickRandomListItem';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [names, setNames] = useState(initialNames);
  const [pickedName, setPickedName] = useState("");

  const addName: AddName = newName => {
    newName.trim() !== "" &&
      setNames([{ id: uuidv4(), text: newName }, ...names]);
    setPickedName("");
  }

  const removeName: RemoveName = id => {
    setNames(names.filter(name => name.id !== id));
  }

  const pickName: PickName = () => {
    let mutatedNames = names;

    const recursivePickName = () => {
      if (mutatedNames.length !== 0) {
        const randomName = mutatedNames[Math.floor(Math.random() * mutatedNames.length)];

        if (randomName.text.toUpperCase() === pickedName.toUpperCase()) {
          mutatedNames = mutatedNames.filter(name => name.text !== randomName.text);
          recursivePickName();
        } else {
          setPickedName(randomName.text);
        }
      } else {
        setPickedName("");
        alert("\"The same name should not be picked twice in a row\" criteria cannot be met.");
      }
    }

    recursivePickName();
  }

  return (
    <div className="container">
      <div className="app">
        <Header />
        <main>
          <div className="app_list">
            <AddListItem addName={addName} />
            <List names={names} removeName={removeName} />
          </div>
          {names.length !== 0 &&
            <PickRandomListItem pickName={pickName} pickedName={pickedName} />
          }
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App;