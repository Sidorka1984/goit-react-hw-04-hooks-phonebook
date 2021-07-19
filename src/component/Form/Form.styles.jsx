import styled from "@emotion/styled";


export const TitleSecond = styled.h2`
font-size: 17px;
font-weight: 500;
margin: 0;
justify-content:center;
padding-bottom: 10px;
`
export const Input = styled.input`
max-width:350px;
display: flex;
padding:5px;
margin-bottom: 20px;
cursor: pointer;
border:  solid 2px #c8e7f9;
box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
border-radius:5px;
&:hover{
    border:  solid 2px #79e000;
    box-shadow: 0 0 20px rgba(121, 224, 0, 0.5);
}`

export const Button = styled.button`
padding: 5px;
border:  solid 2px #6b6a6a4c;
border-radius:5px;
&:hover{
    color: #09c3e4;
    border: solid 2px #79e000;
    box-shadow: 0 0 20px rgba(121, 224, 0, 0.5); 
}
`