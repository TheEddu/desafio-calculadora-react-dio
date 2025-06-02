import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background: rgba(20, 30, 48, 0.95);
    width: 350px;
    border-radius: 18px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    padding: 32px 24px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 1.5px solid rgba(255,255,255,0.08);
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-top: 8px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
