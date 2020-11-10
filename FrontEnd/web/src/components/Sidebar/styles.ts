import styled from 'styled-components';

export const Container = styled.div `
background:${({theme}) => theme.colors.secondary};
position :fixed;
left :0;
top :0;
bottom : 0;
width:16rem;
display : flex;
align-items :center;
flex-direction : column;
`

export const Switch = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: ${({ theme }) => theme.colors.switchWidth};
    height: ${({ theme }) => theme.colors.switchHeight};
    border-radius: 50em;
    padding: ${({ theme }) => theme.colors.switchPadding} 0;
    .switch__input, .switch__label {
        position: absolute;
        left: 0;
        top: 0;
    }
    .switch__input {
        margin: 0;
        padding: 0;
        opacity: 0;
        height: 0;
        width: 0;
        pointer-events: none;
        &:checked + .switch__label {
            background-color: ${({ theme }) => theme.colors.colorWhite};
        }
        &:checked + .switch__label + .switch__marker {
            left: calc(100% - ${({ theme }) =>  theme.colors.switchHeight} + ${({ theme }) => theme.colors.switchWidth});
        }
        &:focus + .switch__label,
        &:active + .switch__label {
            box-shadow: 0 0 0 3px alpha(${({ theme }) => theme.colors.primary}, 0.2);
        }
    }
    .switch__label {
        width: 100%;
        height: 100%;
        color: transparent;
        user-select: none;
        background-color: ${({ theme }) => theme.colors.textColor};
        border-radius: inherit;
        z-index: 1;
        transition: background ${({ theme }) => theme.colors.switchAnimationDuration};
    }
    .switch__marker {
        position: relative;
        background-color: ${({ theme }) => theme.colors.primary};
        width: calc(${({ theme }) => theme.colors.switchHeight} - ${({ theme }) => theme.colors.switchPadding} * 2);
        height: calc(${({ theme }) => theme.colors.switchHeight} - ${({ theme }) => theme.colors.switchPadding} * 2);
        border-radius: 50%;
        z-index: 2;
        pointer-events: none;
        box-shadow: 0 1px 1px hsla(0, 0%, 0%, 0.25);
        left: ${({ theme }) => theme.colors.switchPadding};
        transition: left ${({ theme }) => theme.colors.switchAnimationDuration};
        will-change: left;
    }
`