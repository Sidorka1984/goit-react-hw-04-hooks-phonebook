import styled from '@emotion/styled'

export const Contact = styled.ul`
width: 350px;
padding: 0;
`

export const ContactItem = styled.li`
display: flex;
text-align:center;
align-items:center;
justify-content: space-around;
`

export const BtnDelete = styled.button`
background-color: #c8e7f9;
min-width: 40px;
height: 40px;
border: solid 2px #c8e7f9;
box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
border-radius: 10%;
padding: 3px;
&:hover{
    color: #79e000;
    border:  solid 2px #79e000;
    box-shadow: 1px 2px 2px 0 rgba(121, 224, 0, 0.5);
}
`

export const Text = styled.p`
font-size: 17px;
font-weight:400;
`