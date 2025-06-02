import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background: #181c25;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,255,247,0.06);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 2rem;
    font-family: 'Roboto Mono', 'Fira Mono', 'Courier New', Courier, monospace;
    margin-bottom: 12px;

    input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        text-align: right;
        padding: 0 18px;
        font-size: 2.2rem;
        font-family: inherit;
        color: #00fff7;
        letter-spacing: 2px;
        outline: none;
        box-shadow: none;
        font-weight: bold;
        user-select: none;
    }
`
