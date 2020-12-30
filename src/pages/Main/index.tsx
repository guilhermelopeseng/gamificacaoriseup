import React, { useEffect } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  HeaderText,
  Block,
  Details,
  DetailsText,
  Historic,
  HistoricView,
  HistoricBlock,
  HistoricText,
  ScoreText,
} from './styles';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

const Main: React.FC = () => {
  const { signOut, token } = useAuth();

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const getHistoric = async () => {
      const historic = await api.get('/scores', config);
      console.log(historic.data);
    };
    getHistoric();
  }, [token]);
  return (
    <Container>
      <Header onPress={signOut}>
        <HeaderText>
          <Icon name="arrow-left" size={20} />
          MEU PERFIL
        </HeaderText>
      </Header>
      <Block>
        <Image source={logoImg} style={{ width: '35%', height: '100%' }} />
        <Details>
          <DetailsText>Nome: Guilherme</DetailsText>
          <DetailsText>Cargo: Assessor de Gestão de Pessoas</DetailsText>
          <DetailsText>Pontos: 10 pts</DetailsText>
        </Details>
      </Block>
      <Historic>
        <HistoricText>Histórico</HistoricText>
        <HistoricView>
          <HistoricBlock>
            <ScoreText>Elaboração</ScoreText>
            <ScoreText>100 pts</ScoreText>
          </HistoricBlock>
          <HistoricBlock>
            <ScoreText>Elaboração do App</ScoreText>
            <ScoreText>100 pts</ScoreText>
          </HistoricBlock>
          <HistoricBlock>
            <ScoreText>Elaboração do App</ScoreText>
            <ScoreText>100 pts</ScoreText>
          </HistoricBlock>
          <HistoricBlock>
            <ScoreText>Elaboração do App</ScoreText>
            <ScoreText>100 pts</ScoreText>
          </HistoricBlock>
          <HistoricBlock>
            <ScoreText>Elaboração do App</ScoreText>
            <ScoreText>100 pts</ScoreText>
          </HistoricBlock>
          <HistoricBlock>
            <ScoreText>Elaboração do App</ScoreText>
            <ScoreText>100 pts</ScoreText>
          </HistoricBlock>
          <HistoricBlock>
            <ScoreText>Elaboração do App</ScoreText>
            <ScoreText>100 pts</ScoreText>
          </HistoricBlock>
          <HistoricBlock>
            <ScoreText>Elaboração do App</ScoreText>
            <ScoreText>100 pts</ScoreText>
          </HistoricBlock>
          <HistoricBlock>
            <ScoreText>Elaboração do App</ScoreText>
            <ScoreText>100 pts</ScoreText>
          </HistoricBlock>
        </HistoricView>
      </Historic>
    </Container>
  );
};

export default Main;
