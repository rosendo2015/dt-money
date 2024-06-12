import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import Logo from '../../assets/Logo.svg'
import * as  Dialog from "@radix-ui/react-dialog";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={Logo} alt="logo" />
                <Dialog.Root>
                    <Dialog.Trigger>
                        <Dialog.Portal>
                            <NewTransactionButton>
                                Nova transação
                            </NewTransactionButton>
                        </Dialog.Portal>
                    </Dialog.Trigger>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}
