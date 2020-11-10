import React, {useContext}from 'react'
import {Switch} from './styles';
import { ThemeContext } from '../../context/Themecontext';

const ToggleSwitch : React.FC =() => {
    const {  toggleTheme } = useContext(ThemeContext);
    return (
        <Switch  >
           <input className="switch__input" type="checkbox" id="switchCheckbox1" onClick={toggleTheme} />
            <label aria-hidden="true" className="switch__label" htmlFor="switchCheckbox1">On</label>
            <div aria-hidden="true" className="switch__marker"></div>
        </Switch>
    );
}
 export default ToggleSwitch 