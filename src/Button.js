import './Button.css';

export let VIEW_MODE_ICON = 'icon';

export function Button({ text, viewMode, icon }) {
    let buttonClass = "btn";
    let buttonTitle = text;
    let buttonText = text;
    let iClass;
    if (viewMode === VIEW_MODE_ICON) {
        buttonText = '';
        buttonClass = buttonClass + " icon-btn";
    }
    if (icon) {
        iClass = "fa-solid fa-2xl " + icon;
    }

    return (
        <button className={buttonClass} title={buttonTitle}>
            {iClass ? <i className={iClass} /> : ''}{buttonText}
        </button> 
    );
}