import React from 'react';
import Stats from './Stats'
import Stopwatch from './StopWatch'
import PropTypes from 'prop-types';


const Header = ({players, title}) => {
    // const {players, title } = props
    return (    
        <header>
            <Stats 
            players={players}/>
            <h1>{title}</h1>
            <Stopwatch />
        </header>
    );
  }

  Header.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
}

    Header.defaultProps = {
        title: "Scoreboard"
    }

  export default Header;