import React from 'react'

const Content = ({ friend, size, changeHero }) => {

    const handleClick = () => {
        if (size) {
            changeHero();
        } else {
            changeHero(friend);
        }
    }
    return (
        <img onClick={handleClick} className={size || ''} src={friend} alt='friend' />
    )
}

export default Content