import React from 'react';
import style from './dropdown.module.css';

const Dropdown = props => {
    const [visibilityAnimation, setVisibilityAnimation] = React.useState(false);
    const [repeat, setRepeat] = React.useState(null);

    React.useEffect(() => {
        if (props.visibility) {
            setVisibilityAnimation(true);
        } else {
            setVisibilityAnimation(false);
        }
    }, [props.visibility]);

    return (
        <article className={`style.components-dropdown ${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
            { visibilityAnimation && props.children }
        </article>
    )
};
export default Dropdown;