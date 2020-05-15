import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { hinge } from 'react-animations';
import './App.css';


const Hinge = styled.div`animation 5s ${keyframes`${hinge}`} infinite`;

export default class ReactAnimations extends Component {
    render() {
        return( 
            <Hinge><div>Buying Crypto the old way is Tired.....</div></Hinge>
        );
    }
}