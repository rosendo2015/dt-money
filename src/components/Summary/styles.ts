import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: -5rem;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  border-radius: 6px;
`
interface SummaryCardProps {
  variant?: 'income' | 'outcome' | 'common'
}
export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${({ theme }) => theme.colors['gray-600']};
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  > span {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['gray-300']};
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 130%;
  }

  > strong {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    line-height: 140%;
  }
  ${(props) =>
    props.variant === 'income' &&
    css`
      background: ${({ theme }) => theme.colors['green-500']};
    `}
  ${(props) =>
    props.variant === 'common' &&
    css`
      background: ${({ theme }) => theme.colors['gray-600']};
    `}
  ${(props) =>
    props.variant === 'outcome' &&
    css`
      background: ${({ theme }) => theme.colors['red-500']};
    `}
`
