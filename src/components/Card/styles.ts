import { Box } from 'components/Common'
import styled from 'styled-components'

export const Container = styled(Box)`
  padding: 1.5rem 2rem;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.rounded};
  display: flex;
  gap: 24px;
  flex-direction: column;
`

export const Divider = styled.div`
  width: '100%';
  height: 0.1rem;
  /* background: ${({ theme }) => theme.colors.textMuted}; */
`
