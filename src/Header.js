import './Header.css';
import { Button } from './Button';
import { VIEW_MODE_ICON } from './Button';

export function Header() {
    return (
        <header>
            <h1>Gallery</h1>

            <ul>
                <li><Button text="home" viewMode={VIEW_MODE_ICON} icon="fa-house" /></li>
                <li><Button text="favourites" viewMode={VIEW_MODE_ICON} icon="fa-heart" /></li>
            </ul>
        </header>
    )

}