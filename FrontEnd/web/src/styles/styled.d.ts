import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        tittle : string,

        colors :{
            primary: string,
            secondary: string,
            textColor: string,
            header: string,
            headerNumber: string,
            activeMenu: string,
            switchWidth: string,
            switchHeight: string,
            switchPadding: string,
            colorContrastLow: string,
            colorWhite: string,
            switchColorPrimary: string,
            switchAnimationDuration: string,
            gradient: string,
            colorGreen: string,
            colorGray: string,
        }
        
    }
}