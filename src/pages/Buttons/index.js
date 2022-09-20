import React from 'react';
import { Button } from './Button';

const Buttons = ({ header }) => {
    return (
        <>
            <div className="main-content">
                <div className="components">
                    <div className="component-item">
                        <div className="component-show">
                            <Button variant="outline"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export { Buttons };