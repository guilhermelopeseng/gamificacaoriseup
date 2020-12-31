import React, { useCallback, useEffect, useState } from 'react';
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

interface HistoricData {
  id: string;
  title: string;
  points: number;
}

interface Request {
  data: HistoricData[];
}

const Main: React.FC = () => {
  const [historic, setHistoric] = useState<HistoricData[]>([]);
  const [score, setScore] = useState<Number>(0);
  const { signOut, token, user } = useAuth();

  const signOutApp = useCallback(() => {
    setHistoric([]);
    signOut();
  }, [signOut]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    api
      .get('/scores', config)
      .then((response) => {
        const { data }: Request = response;

        setHistoric(data);
      })
      .catch((err) => {
        throw new Error('Erro na requisição');
      });
    const scores = historic.map((item) => {
      return item.points;
    });
    if (scores[0]) {
      const totalScores = scores.reduce((total, next) => {
        return total + next;
      });
      setScore(totalScores);
    }
  }, [token, historic]);

  return (
    <Container>
      <Header onPress={signOutApp}>
        <HeaderText>
          <Icon name="arrow-left" size={20} />
          MEU PERFIL
        </HeaderText>
      </Header>
      <Block>
        <Image source={logoImg} style={{ width: '35%', height: '100%' }} />
        <Details>
          <DetailsText>Nome: {user.name}</DetailsText>
          <DetailsText>Cargo: {user.directorship}</DetailsText>
          <DetailsText>Pontos: {score} pts</DetailsText>
        </Details>
      </Block>
      <Historic>
        <HistoricText>Histórico</HistoricText>
        <HistoricView>
          {historic.map((item) => (
            <HistoricBlock key={item.id}>
              <ScoreText>{item.title}</ScoreText>
              <ScoreText>{item.points} pontos</ScoreText>
            </HistoricBlock>
          ))}
        </HistoricView>
      </Historic>
    </Container>
  );
};

export default Main;
