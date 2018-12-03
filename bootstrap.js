import React from 'react'
import styled, { keyframes } from 'styled-components';
import style, { Breakpoints } from './style';

const ShowAnimBasic = keyframes`
    0% {
        opacity: 0;
        transform: translate(-20px);
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
`;

const UI = {
    breakpoints: Breakpoints || {
        smallMenu: `576px`,
        sm: {
            bp: `576px`,
            mw: `540px`,
        },
        md: {
            bp: `768px`,
            mw: `720px`,
        },
        lg: {
            bp: `992px`,
            mw: `960px`,
        },
        xl: {
            bp: `1200px`,
            mw: `1140px`,
        }
    },
    colors: {
        bgMenu: `rgba(36, 18, 54, 0.976)`
    }

}

export const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.color};

    ${({ full }) => (full ? `padding:0;` : `padding:0px 15px;`)}

    ${({ full }) => !full && Object.keys(UI.breakpoints).map(key => {
        return `
            @media only screen and (min-width: ${UI.breakpoints[key].bp} ) {
                max-width: ${UI.breakpoints[key].mw};
            }
        `
    })}
    
`

export const Row = styled.div`
    background-color: ${props => props.color};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: ${({ justify }) => (justify || `flex-start`)};
    ${({ padding }) => (padding && `padding: ${padding}`)};
    ${({ margin }) => (margin && `margin: ${margin}`)};
    >div {
        padding: ${props => props.columnPadding};
    }
`

export const Column = styled.div`
    background-color: ${props => props.color || (props.debug && '#d6d6ff')};

    ${({ padding }) => (padding && `padding: ${padding}`)};

    ${({ size }) => (typeof size === 'number' ? `flex: 0 0 ${size * 100}%` :
        size && typeof size.xs === 'number' ? size.xs > 0 ? `flex: 0 0 ${size.xs * 100}%` : `display:none` : `flex:1`
    )};

    ${({ size }) => Object.keys(UI.breakpoints).map(key => {
        return `
            @media only screen and (min-width: ${UI.breakpoints[key].bp} ) {
                ${ size && typeof size[key] === 'number' ? size[key] > 0 ? `flex: 0 0 ${size[key] * 100}%;display: initial;` : `display: none` : ``}
            }
        `
    })}
    ${({ offSets }) => Object.keys(UI.breakpoints).map(key => {
        return `
            @media only screen and (min-width: ${UI.breakpoints[key].bp} ) {
                ${ offSets && typeof offSets[key] === 'number' && offSets[key] > 0 ? `margin-left: ${offSets[key] * 100}%;` : ``}
            }
        `
    })}
  
`

export const Jumbotron = styled.div`
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: ${props => props.color};
    @media only screen and (min-width: ${UI.breakpoints.sm.bp}) {
        padding: 4rem 2rem;
    }
`

export const NavigationContainer = styled.nav`
    background: ${(props) => (props.showSmallMenu && (style.colors.bgMenu || props.bgColor || 'none'))};      
    >div {
        ${({ full }) => !full && Object.keys(UI.breakpoints).map(key => {
        return `
                    @media only screen and (min-width: ${UI.breakpoints[key].bp} ) {
                        max-width: ${UI.breakpoints[key].mw};
                    }
                `
    })}
        position: relative;
        display: flex;
        flex-wrap: wrap;
        padding: .5rem 1rem;
        margin: 0 auto;
        flex-direction: column;
        >div {
            display: flex;
            margin: 0px 0px 0px auto;
            width: 100%;
            display:${({ showSmallMenu }) => (showSmallMenu ? `initial` : `none`)};
            background: ${style.colors.bgMenu || UI.colors.bgMenu};            
            position: absolute;
            top: 40px;
            left: 0;
            right: 0;
            padding: 10px;
            ul {
                display: flex;
                padding-left: 0;
                margin: 0;
                list-style: none;
                flex-direction: column;
                
                li {
                    opacity: 0;
                    &:nth-child(1) {
                        animation: ${ShowAnimBasic} 0.2s ease 0.1s 1 normal forwards running;
                    }
                    &:nth-child(2) {
                        animation: ${ShowAnimBasic} 0.2s ease 0.11s 1 normal forwards running;
                    }
                    &:nth-child(3) {
                        animation: ${ShowAnimBasic} 0.2s ease 0.21s 1 normal forwards running;
                    }
                    &:nth-child(4) {
                        animation: ${ShowAnimBasic} 0.2s ease 0.31s 1 normal forwards running;
                    }
                    &:nth-child(5) {
                        animation: ${ShowAnimBasic} 0.2s ease 0.41s 1 normal forwards running;
                    }
                    &:nth-child(6) {
                        animation: ${ShowAnimBasic} 0.2s ease 0.51s 1 normal forwards running;
                    }
                    &:nth-child(7) {
                        animation: ${ShowAnimBasic} 0.2s ease 0.61s 1 normal forwards running;
                    }
                    &:nth-child(8) {
                        animation: ${ShowAnimBasic} 0.2s ease 0.71s 1 normal forwards running;
                    }
                    
                    a {
                        padding-right: .5rem;
                        padding-left: .5rem;
                        display: block;
                        color: white;
                    }
                }
            }
        }
    }
    @media only screen and (min-width: ${UI.breakpoints.smallMenu}) {
        background: transparent;    
        >div {
            flex-direction: row;  
            > div {
                width: initial;
                display: initial;
                position: relative;
                padding: initial;
                top: initial;
                background: transparent;    
                > ul {
                    flex-direction: row;
                    >li {
                        animation: none!important;
                        opacity: 1;
                        a {
                            color: black;
                        }
                    }
                }
            }
        }
    }
    
`

export const MenuBtn = styled.button`
    position: absolute;
    right: 0;
    padding: 9px 15px;
    top: 0;
    border-radius: 0;
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    outline: none;
    @media only screen and (min-width: ${UI.breakpoints.smallMenu}) {
        display: none;
    } 
    >div {
        width: 24px;
        height: 3px;
        position: relative;
        z-index: 1000;
        margin: 10px 0px;
        background: black;
        border-radius: 1px;
        transition: all 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s;
        &::before {
            content: " ";
            top: -7px;
            width: 20px;
            right: 0px;
            height: 3px;
            position: absolute;
            border-radius: 1px;
            background: black;
            transition: all 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s;
        }
        &::after {
            content: " ";
            top: 7px;
            width: 16px;
            right: 0px;
            height: 3px;
            position: absolute;
            border-radius: 1px;
            background: black;
            transition: all 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s;
        }
    }
    &.close {
        >div {
            background: 0px 0px;
            &::before {
                top: 0px;
                width: 24px;
                transform: rotate(45deg);
                background: white;
            }
            &::after {
                top: 0px;
                width: 24px;
                transform: rotate(-45deg);
                background: white;
            }
        }
    }
`

export class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: false
        };
    }
    toggleSmallMenu = () => {
        let { toggleMenu } = this.state;
        this.setState({ toggleMenu: !toggleMenu });
    }
    render() {
        return (
            <NavigationContainer showSmallMenu={this.state.toggleMenu}>
                <div>
                    {this.props.children}
                    <MenuBtn className={this.state.toggleMenu && 'close'} onClick={this.toggleSmallMenu}><div /></MenuBtn>
                </div>
            </NavigationContainer >
        )
    }
};

export default UI;