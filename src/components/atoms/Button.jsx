import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 80%;
    height: 50px;
    margin-top:15px;
    margin-bottom:15px;
    background-color: #a54aff;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    box-shadow: 2px 2px 2px 0px rgba(5,5,5,0);  

    &:hover {
        background-color:#801da7;
    }
`;

function Button({title, onclick}){
    return(
        <ButtonStyled onClick={onclick}>{title}</ButtonStyled>
    )
}

export default Button;