import './Button.css';

export const VIEW_MODE_ICON = 'icon';
const BUTTON_CLASS = 'btn';
const ICON_BUTTON_CLASS = 'icon-btn';
const LARGE_ICON_CLASS = 'fa-2xl';
const DEFAULT_ICON_CLASS = 'fa-solid';

export function Button({ text, viewMode, icon }) {
    let buttonProps = getButtonProps(text, viewMode);

    return (
        <button className={buttonProps.class} title={text}>
            {icon ? <i className={`${DEFAULT_ICON_CLASS} ${LARGE_ICON_CLASS} ${icon}`} /> : ''}{buttonProps.text}
        </button> 
    );
}

function getButtonProps(text, viewMode) {
    let props = {};
    if (viewMode === VIEW_MODE_ICON) {
        props.text = '';
        props.class = `${BUTTON_CLASS} ${ICON_BUTTON_CLASS}` ;
    } else {
        props.class = BUTTON_CLASS;
        props.text = text;
    }
    return props;
}