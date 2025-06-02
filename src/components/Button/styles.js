import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 18px 0;
    border: none;
    background: linear-gradient(90deg, #232526 0%, #414345 100%);
    color: #00fff7;
    font-size: 1.3rem;
    font-family: inherit;
    font-weight: 700;
    flex: 1;
    border-radius: 10px;
    margin: 2px;
    box-shadow: 0 2px 8px rgba(0,255,247,0.08);
    transition: 
        background 0.2s,
        color 0.2s,
        box-shadow 0.2s,
        transform 0.1s;

    &:hover, &:focus {
        background: linear-gradient(90deg, #00fff7 0%, #232526 100%);
        color: #232526;
        box-shadow: 0 0 12px #00fff7, 0 0 24px #00fff7;
        outline: none;
        transform: translateY(-2px) scale(1.04);
        cursor: pointer;
    }

    &:active {
        transform: scale(0.98);
    }
`
