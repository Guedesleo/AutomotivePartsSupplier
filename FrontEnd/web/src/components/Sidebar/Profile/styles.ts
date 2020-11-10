import styled from 'styled-components';
export const Container = styled.div`
    margin-top: 5rem;
`

export const ProfileImg = styled.img`
    height: 5rem;
`
export const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.textColor};
`