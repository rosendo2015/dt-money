import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Close, Content, Overlay, TransactionTypeButton, TransactionType } from "./styles";
import * as  Dialog from "@radix-ui/react-dialog";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { api } from "../../lib/axios";

const NewTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof NewTransactionFormSchema>

export function NewTransactionsModal() {
    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(NewTransactionFormSchema)
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        const { description, price, type, category } = data

        await api.post('transactions', {
            description,
            price,
            type,
            category,
            createdAt: new Date()
        })
        reset()
    }

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

                        <Controller
                            control={control}
                            name="type"
                            render={({ field }) => {
                                return (
                                    <TransactionType
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <TransactionTypeButton variant="income" value="income">
                                            <ArrowCircleUp size={24} />
                                            Entrada
                                        </TransactionTypeButton>

                                        <TransactionTypeButton variant="outcome" value="outcome">
                                            <ArrowCircleDown size={24} />
                                            Saída
                                        </TransactionTypeButton>
                                    </TransactionType>
                                )
                            }}
                        />


                        <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                    </form>

                </Content>
            </Dialog.Portal>
        </>
    )
}