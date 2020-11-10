import React from 'react';
import {Container} from './styles';
import MenuItems  from './Menuitem'


const Menu = () => {
    return (
        <Container>
            <MenuItems title = "Parts" icon={'home'} active={false} />
            <MenuItems title="Register Manufacture" icon={'yurt'} active={true} />
            <MenuItems title="Register Cars" icon={'car'} active={false} />
            <MenuItems title="Register Suppliers" icon={'warehouse'} active={false} />
            <MenuItems title="Register Parts Levels " icon={'bookshelf'} active={false} />
            <MenuItems title="Register Parts Types" icon={'car-sports'} active={false} />
            <MenuItems title="Register Parts Manufacture" icon={'wrench-outline'} active={false} />

        </Container>
    );  
}
 export default Menu