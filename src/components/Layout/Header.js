import { Fragment } from "react";

import mealsImage from '../../assets/foods.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>YourFood</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!'/>
            </div>
        </Fragment>
    );
};

export default Header;