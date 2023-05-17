import React from 'react';
import './header.css'
import { Component } from 'react';
import MenuItem from './MenuItem';

export default class Header extends Component {
    render() {
        var menuItems = [];
        menuItems.push(<MenuItem link='/' text='Home' key='home' > </MenuItem>);
        menuItems.push(<MenuItem link='/info' text='Info' key='info' > </MenuItem>);
        menuItems.push(<MenuItem link='/dialog' text='Dialog' key='dialog' > </MenuItem>);

        return (
            <div className='header-wrapper'>
                {menuItems}
            </div>
        );
    }
}

