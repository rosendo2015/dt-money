import styled, { css } from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`
export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1.5rem;
  margin-top: 1.5rem;
  td {
    padding: 1.25rem 2rem;
    background: ${({ theme }) => theme.colors['gray-700']};
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`
interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}
export const PriceHighLight = styled.span<PriceHighLightProps>`
  ${({ variant, theme }) =>
    variant === 'income' &&
    css`
      color: ${theme.colors['green-300']};
    `}
  ${({ variant, theme }) =>
    variant === 'outcome' &&
    css`
      color: ${theme.colors['red-300']};
    `}
`
