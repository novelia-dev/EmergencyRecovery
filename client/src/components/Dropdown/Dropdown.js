import React from 'react';
import './Bell.css';

const Dropdown = props => {
    const [visibilityAnimation, setVisibilityAnimation] = React.useState(false);
    const [repeat, setRepeat] = React.useState(null);

    React.useEffect(() => {
        if (props.visibility) {
            clearTimeout(repeat);
            setRepeat(null);
            setVisibilityAnimation(true);
        } else {
            setRepeat(setTimeout(() => {
                setVisibilityAnimation(false);
            }, 400));
        }
    }, [props.visibility]);

    return (
        <article className={`components-dropdown ${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}style={{position:'absolute', marginLeft:"350px"}} >
            { visibilityAnimation && props.children }
        </article>
    )
};

export default Dropdown;