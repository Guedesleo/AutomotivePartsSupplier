import React from 'react';
import {Container,ProfileName, ProfileImg} from './styles';
import Image from '../../../assets/volvo.svg';

const Profile: React.FC = () => {
    return (
        <Container>
            <ProfileImg src= {Image}/>
           <ProfileName>Leonardo Guedes</ProfileName>
        </Container>
    );
}
 export default Profile