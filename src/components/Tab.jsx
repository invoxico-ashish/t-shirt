import React from 'react';
import { snapshot } from 'valtio';
import state from '../store';

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
    const snap = snapshot(state);
    const acticeStyles = isFilterTab && isActiveTab
    ? { backgroundColor: snap.color, opacity: 0.5 }
    : { backgroundColor: "transparent", opacity: 1 }
    return (
        <div
            key={tab.name}
            className={`tab-btn ${isFilterTab ? "rounded-full glassmorphism" : "rounded-4"}`}
            onClick={handleClick}
            style={acticeStyles}
        >
            <img
                src={tab.icon}
                alt={tab.name}
                className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`}
            />
        </div >
    )
};

export default Tab;