import React from 'react';
import Logo from './logo/logo';
import Searcher from './search/searcher';
import Filter from './filter/filter';
import './navigation.scss';


const Navigation = () => {

    return (
        <nav className="navigation">
            <Logo />
            <Searcher />
            <Filter />
        </nav>
    )
}

export default Navigation;
