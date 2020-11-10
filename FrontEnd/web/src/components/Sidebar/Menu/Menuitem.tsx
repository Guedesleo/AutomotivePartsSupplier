import React from 'react';
import styled from 'styled-components';

type propsA = {title:string, icon:string , active:boolean};


export const Container = styled.div<{ active: boolean }>`
    border-left: 3px solid ${props => props.active ? props.theme.colors.activeMenu: "transparent"};
    width:100%;
    padding :0.3rem;
    padding-left:2rem;
    cursor : pointer;
    display:flex;
    flex-direction : row ;
    align-items:center;
    margin-bottom:1rem;
    transition: 0.2s all ease-in-out;


    &:hover{
        background-color : rgba(0,0,0,0.1);
    }
`
const Icon = styled.span <{ active: boolean }>`
    color: ${props =>!props.active && props.theme.colors.textColor}; 
    font-size: 1rem;
    margin-right: 1rem;
`

const Title = styled.h1 <{ active: boolean }>`
    font-size: 0.9rem;
    font-weight: 300;
    color: ${props =>  props.active ? props.theme.colors.activeMenu : "#AAA5A5"}; 
`
const MenuItems:  React.FC<propsA> =({title , icon,active}) => {
    return (
        <Container active={active}>
             <Icon active={active} className="iconify" data-inline="false" data-icon={`mdi:${icon}`}></Icon>
            <Title active={active}>{title}</Title>
        </Container>
    );
}
 export default MenuItems