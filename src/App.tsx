import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";

function App() {

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);

    const installSettings = () => {
        console.log('installSettings')
    }

    return (
        <div className="App">
            <SettingsCounter
                startValue={startValue}
                maxValue={maxValue}
                changeStartValue={setStartValue}
                changeMaxValue={setMaxValue}
                installSettings={installSettings}
            />
            <Counter
                startValue={startValue}
                maxValue={maxValue}
            />
        </div>
    );
}

export default App;
