import styled from 'styled-components';

export const StyledButton=styled.button`
    background: ${props => props.primary ? "#bf2100" : "#fff"};
    color: ${props => props.primary ? "#fff" : "#bf2100"};
    font-size: 1em;
    border: 2px solid #bf2100;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    &:hover{
        background: ${props => props.primary ? "#d12302" : "#bf2100"};
        color: ${props => props.primary ? "#fff" : "#fff"};
        border: 2px solid #bf2100;
    }
    /* &:focus{
        border: none;
    } */
`