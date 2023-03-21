import React from 'react';

const DropdownBell = props => {
    const [visibilityAnimation1, setVisibilityAnimation1] = React.useState(false);
    const [repeat1, setRepeat1] = React.useState(null);

    React.useEffect(() => {
        if (props.visibility) {
            clearTimeout(repeat1);
            setRepeat1(null);
            setVisibilityAnimation1(true);
        } else {
            setRepeat1(setTimeout(() => {
                setVisibilityAnimation1(false);
            }, 400));
        }
    }, [props.visibility]);

    return (
        <article className={`components-dropdown ${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`} style={{ position:"absolute",marginLeft:"330px",marginTop:"50px"}}>
            { visibilityAnimation1 && props.children }
        </article>
    )
};

export default DropdownBell;