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

    const imageContainerStyle = {
        width: '100%',
        height: '240px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: '15px',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa'
    };

    const imageStyle = {
        maxHeight: '100%',
        maxWidht: '100%',
        objectFit: 'contain'
    };

    return (
        <div style={cardStyle} className="member-card">
            <div style={imageContainerStyle}>
                <img
                    src={process.env.PUBLIC_URL + '/' + image}
                    alt={name}
                    style={imageStyle}
                />
            </div>

            {/* Teks */}
            <h3 style={{ margin: '0 0 5px 0', color: '#2c3e50', fontSize: '18px', fontWeight: 'bold'}}>{name}</h3>
            <h6 style={{ margin: '0 0 12px 0', color: color, fontSize: '13px', letterSpacing: '0.5px' }}>{generation}</h6>

            <div style={{
                fontSize: '13.5px',
                lineHeight: '1.6',
                color: '#555',
                overflow: 'auto',
                paddingRight: '5px',
                flexGrow: 1
            }}>
                {lore}
            </div>
        </div>
    );
}

export default MemberCard;