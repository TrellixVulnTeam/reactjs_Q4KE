import { useState } from 'react'
import Modal from 'react-modal';
import logImg from '../../assets/Logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header ({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logImg} alt="dtmoney" />
        <button type="button" onClick={onOpenNewTransactionModal}
        >
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}