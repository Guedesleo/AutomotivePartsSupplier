import React from 'react';
import {Container} from './styles';
import Profile from './Profile/profile';
import Menu from './Menu/menu';
import ToggleSwitch from './Toggleswitch';

const Sidebar = () => {
    return (
        <Container>
            <Profile/>
            <Menu/>
            <ToggleSwitch/>
        </Container>
    );
}
 export default Sidebar