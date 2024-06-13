import { X } from "phosphor-react";
import { Close, Content, Overlay } from "./styles";
import * as  Dialog from "@radix-ui/react-dialog";

export function NewTransactionsModal() {
    return (
        <>
            <Dialog.Portal>
                <Overlay />
                <Content>
                    <Dialog.Title>
                        Nova transação
                    </Dialog.Title>
                    <Close>
                        <X size={24}/>
                    </Close>
                    <form action="">
                        <input type="text" placeholder="Descrição" required />
                        <input type="number" placeholder="Preço" required />
                        <input type="text" placeholder="Categoria" required />

                        <button type="submit">Cadastrar</button>
                    </form>
                    
                </Content>
            </Dialog.Portal>
        </>
    )
}