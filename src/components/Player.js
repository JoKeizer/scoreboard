import React, {PureComponent} from 'react';
import Counter from './Counter'
import PropTypes from 'prop-types';
import Icon from './Icon';

// PureComponent render only if someting changed preformance issues

class Player extends PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        score: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired,
        removePlayer: PropTypes.func,
        changeScore: PropTypes.func,
    }

    render() {
        const {
            name,
            id,
            score,
            index,
            removePlayer,
            changeScore
        } = this.props
        console.log(name + ' rendered')
        return(
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(this.props.id)}>✖</button>
                    <Icon isHighScore={this.props.isHighScore} /> // true or false
                    {name}
                </span>
        
            <Counter 
            score={score}
            changeScore={changeScore}
            index={index}
            />
            </div>
        );
    }
  }



export default Player;