import styled from "styled-components";
import * as  Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
position: fixed;
width: 100vw;
height: 100vh;
inset: 0;
background: rgba(0, 0, 0, 0.75);
transition: all 0.4s;
`
export const Content = styled(Dialog.Content)`
 min-width: 32rem;
 border-radius: 6px;
 padding: 2.5rem 3rem;
 background: ${({ theme }) => theme.colors["gray-800"]};

 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);


form{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    gap: 1rem;

    input{
        border-radius: 6px;
        border: 0;
        background: ${({ theme }) => theme.colors["gray-900"]};
        color: ${({ theme }) => theme.colors["gray-300"]};
        padding: 1rem;

        &::placeholder{
            color: ${({ theme }) => theme.colors["gray-500"]};
        }
    }
        button[type="submit"]{
    	    height: 58px;
            border: 0;
            border-radius: 6px;
            cursor: pointer;
            background: ${({ theme }) => theme.colors["green-500"]};
            color: ${({ theme }) => theme.colors["white"]};
            margin-top: 1.5rem;
            transition: 0.4s;
            

            &:hover{
                background: ${({theme})=>theme.colors["green-700"]};
            }
    }
}
`
export const Close = styled(Dialog.Close)`
position: absolute;
top: 1.5rem;
right: 1.5rem;
background: transparent;
border: 0;
line-height: 0;
color: ${({theme})=>theme.colors["gray-500"]};

`
export const TransactionType = styled(RadioGroup.Root)`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1rem;
margin-top: 0.5rem;
`
interface TransactionTypeButtonProps{
    variant: "income" | "outcome"
}
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
background: ${({theme})=>theme.colors["gray-700"]};
padding: 1rem;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
border-radius: 6px;
cursor: pointer;
border: 0;
color: ${({theme})=>theme.colors["gray-300"]};
transition: 0.4s;
svg{
color: ${props => props.variant === "income" ? props.theme.colors["green-300"] : props.theme.colors["red-300"]};
}
&[data-state='checked']{
    color: ${({theme}) => theme.colors['white']};
    background: ${({theme, variant})=> variant === 'income' ? theme.colors["green-500"] : theme.colors["red-500"]};

    svg{
        color: ${({theme})=>theme.colors['white']};
    }
}
`