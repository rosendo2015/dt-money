import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${({ theme }) => theme.colors['gray-900']};
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NewTransactionButton = styled.button`
  padding: 0.75rem 1.25rem;
  height: 50px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['green-500']};

  border: 0;

  color: ${({ theme }) => theme.colors.white};
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  transition: 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors['green-300']};
  }
`
