import React, { useTransition } from 'react';

function MemberCard(props) {
    const {name, generation, birthday, debut, lore, image, color} = props.memberData;

    const cardStyle = {
        borderTop: `6px solid ${color}`,
        boxShadow: `0 4px 12px rgba(0,0,0,0.08)`,
        borderRadius: `12px`,
        padding: `20px`,
        backgroundColor: `#fff`,
        margin: `15px`,
        width: `280px`,
        height: `520px`,
        display: `flex`,
        flexDirection: `column`,
        textAlign: `left`,
        transition: `transform 0.2s ease-in-out`
    };

    return (
        <div style={cardStyle}>
            <img 
                src={image}
                alt={name}
                style={{ width: '100%', borderRadius: '4px', marginBottom: '15px' }}
            />
            <h3 style={{ margin: '0 0 5px 0', color: '#333'}}>{name}</h3>
            <h6 style={{ margin: '0 0 15px 0', color: color }}>{generation}</h6>
            <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#555' }}>
                {lore}
            </p>
        </div>
    );
}

export default MemberCard;