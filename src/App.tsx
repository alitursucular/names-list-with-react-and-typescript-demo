import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { List } from './List';
import { initialNames } from './initialNames';
import { AddListItem } from './AddListItem';
import { PickRandomListItem } from './PickRandomListItem';

import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reactLogo from './assets/react-logo-512.png';
import typescriptLogo from './assets/typescript-logo-512.png';
import './App.scss';


const App: React.FC = () => {
  const [names, setNames] = useState(initialNames);
  const [pickedName, setPickedName] = useState("");

  const addName: AddName = newName => {
    newName.trim() !== "" &&
      setNames([...names, { id: uuidv4(), text: newName }]);
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

        {/* Header code - BEGIN */}
        <header className="app_header">
          <div className="row">
            <div className="col-sm-12 app_header_images">
              <img className="app_header_images--image" src={reactLogo} alt="React Logo" />
              <img className="app_header_images--image" src={typescriptLogo} alt="TypeScript Logo" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h1 className="app_header_title">Add, remove, and randomly pick from the list!</h1>
            </div>
          </div>
        </header>
        {/* Header code - END */}

        <main>
          <div className="app_list">
            <AddListItem addName={addName} />
            <List names={names} removeName={removeName} />
          </div>
          {names.length !== 0 &&
            <PickRandomListItem pickName={pickName} pickedName={pickedName} />
          }

          {/* Developer signature code - BEGIN */}
          <div className="row">
            <div className="col-sm-12 app_developer">
              <ul>
                <li className="app_developer--item">- Developed by <b>Ali Tursucular</b>&nbsp;</li>
                <li className="app_developer--item">
                  <a href="https://www.linkedin.com/in/alitursucular/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} color="#2867b2" />
                  </a>
                </li>
                <li className="app_developer--item">
                  <a href="https://alitursucular.github.io">
                    <FontAwesomeIcon icon={faLink} color="#212529" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Developer signature code - END */}
        </main>
      </div>
    </div>
  )
}

export default App;