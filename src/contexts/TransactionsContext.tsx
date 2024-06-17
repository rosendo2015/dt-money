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
    fetchTransactions: (query ?: string) => Promise<void>
}
export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionsProviderProps {
    children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, SetTransactions] = useState<Transactions[]>([])
    
    async function fetchTransactions(query?: string) {
        const url = new URL('http://localhost:3333/transactions')
        if (query) {
            url.searchParams.append('q', query);
        }
        const response = await fetch(url)
        const data = await response.json()
        SetTransactions(data)
    }
    useEffect(() => {
        fetchTransactions()
    }, [])
    return (
        <TransactionsContext.Provider value={{
            transactions,
            fetchTransactions
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}