import React from 'react';

import reactLogo from '../assets/react-logo-512.png';
import typescriptLogo from '../assets/typescript-logo-512.png';

export const Header: React.FC = () => {
    return (
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
    )
}
