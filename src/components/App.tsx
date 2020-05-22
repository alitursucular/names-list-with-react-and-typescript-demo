import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { initialNames } from '../initialNames';
import { GitHubCorner } from './GitHubCorner/GitHubCorner';
import { Header } from './Header/Header';
import { AddListItem } from './AddListItem';
import { List } from './List';
import { PickRandomListItem } from './PickRandomListItem';
import { Footer } from './Footer/Footer';

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
    <>
      {console.log('\nDeveloped by Ali Tursucular\n\nLinkedIn: https://www.linkedin.com/in/alitursucular/\nPersonal Portfolio: https://alitursucular.github.io')}
      <div className="container">
        <div className="app mt-5 mb-4">
          <Header />
          <main>
            <div className="app_list">
              <AddListItem addName={addName} />
              <List names={names} removeName={removeName} />
            </div>
            {names.length !== 0 && (
              <PickRandomListItem pickName={pickName} pickedName={pickedName} />
            )}
            <Footer />
          </main>
        </div>
      </div>
      <GitHubCorner />
    </>
  )
}

export default App;