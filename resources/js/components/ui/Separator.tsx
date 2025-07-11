import React from 'react';

interface Props {
    color?: string;
}

function Separator(props: Props) {
    return (
        <div
            style={{
                width: '100%',
                height: '1px',
                backgroundColor: props.color || '#1C6B9AFF',
                margin: '10px 0',
            }}
        ></div>
    );
}

export default Separator;
