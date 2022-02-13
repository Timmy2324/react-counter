import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";

function App() {

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [isChangeValue, setIsChangeValue] = useState<boolean>(false);

    useEffect(() => {
        setIsChangeValue(true);
    }, [startValue, maxValue]);

    useEffect(() => {
        let startValue = localStorage.getItem('startValue');
        let maxValue = localStorage.getItem('maxValue');

        if(startValue && maxValue) {
            setIsChangeValue(false);
            setStartValue(JSON.parse(startValue));
            setMaxValue(JSON.parse(maxValue));
        }
    }, []);

    const installSettings = () => {
        setIsChangeValue(false);
        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
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
                isChangeValue={isChangeValue}
            />
        </div>
    );
}

export default App;
