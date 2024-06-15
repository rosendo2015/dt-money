import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Close, Content, Overlay, TransactionTypeButton, TransactionType } from "./styles";
import * as  Dialog from "@radix-ui/react-dialog";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


export function NewTransactionsModal() {

    const NewTransactionFormSchema = z.object({
        description: z.string(),
        price: z.number(),
        category: z.string(),
        //type: z.enum(['income', 'outcome'])
    })

    type NewTransactionFormInputs = z.infer<typeof NewTransactionFormSchema>

    function handleCreateNewTransaction(data:NewTransactionFormInputs){
        console.log(data)
    }

    const { register, handleSubmit } = useForm<NewTransactionFormInputs>({
            resolver: zodResolver(NewTransactionFormSchema)
        })
    return (

        <>
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>
                    Nova transação
                </Dialog.Title>
                <Close>
                    <X size={24} />
                </Close>
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input type="text" placeholder="Descrição" required
                        {...register('description')}
                    />
                    <input type="number" placeholder="Preço" required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input type="text" placeholder="Categoria" required
                        {...register('category')}
                    />

                    <TransactionType>

                        <TransactionTypeButton variant="income" value="income">
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButton>

                        <TransactionTypeButton variant="outcome" value="outcome">
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit">Cadastrar</button>
                </form>

            </Content>
        </Dialog.Portal>
        </>
    )
}