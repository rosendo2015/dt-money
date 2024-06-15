import { ReactNode, createContext } from "react";
import { useEffect, useState } from "react";

interface Transactions {
    id: number,
    description: string,
    type: 'income' | 'outCome',
    category: string,
    price: number,
    createdAt: string

}

interface TransactionContextType {
    transactions: Transactions[]
}
export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionsProviderProps{
    children: ReactNode
}

export function TransactionsProvider({children}:TransactionsProviderProps) {

    const [transactions, SetTransactions] = useState<Transactions[]>([])
    async function loadTransactions() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json()
        SetTransactions(data)
    }
    useEffect(() => {
        loadTransactions()
    }, [])
    return (
        <TransactionsContext.Provider value={{
            transactions
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}