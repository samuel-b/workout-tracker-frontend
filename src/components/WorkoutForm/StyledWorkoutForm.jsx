import styled from "styled-components";

//TODO Re-factor media-query
export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const StyledInput = styled.input`
    margin: 2px 0;
    border: 1px solid ${(props) => props.theme.colors.primary};
    &:focus {
        outline: none;
        box-shadow: 1px 1px 1px 1px ${(props) => props.theme.colors.primary};
    }
`;

export const StyledSelect = styled.select`
    margin: 2px 0;
    background-color: ${(props) => props.theme.colors.lightBg};
    border: 1px solid ${(props) => props.theme.colors.primary};
    &:focus {
        outline: none;
        box-shadow: 1px 1px 1px 1px ${(props) => props.theme.colors.primary};
    }
`;

export const StyledButton = styled.button`
    background-color: ${(props) => props.theme.colors.lightBg};
    color: ${(props) => props.theme.colors.primary};
    &:hover {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.lightBg};
    }
`;

export const StyledTextArea = styled.textarea`
    border: 1px solid ${(props) => props.theme.colors.primary};
    &:focus {
        outline: none;
        box-shadow: 1px 1px 1px 1px ${(props) => props.theme.colors.primary};
    }
`;

export const StyledError = styled.span`
    color: ${(props) => props.theme.colors.error};
`

export const StyledSuccess = styled.span`
    color: ${(props) => props.theme.colors.success};
`