import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;

  align-items: center;

  background: gray;
`;

export const Header = styled.TouchableOpacity`
  background: #fff;
  width: 98%;
  height: 10%;

  border-bottom-width: 3px;
  border-color: #232129;

  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
`;

export const Block = styled.View`
  flex-direction: row;
  height: 50%;
  width: 98%;

  padding-top: 2%;

  background: #fff;
`;

export const Details = styled.View`
  flex: 1;
  flex-direction: column;

  justify-content: center;
  align-items: flex-start;
  margin-left: 2%;
`;

export const DetailsText = styled.Text`
  flex: 1;
  font-size: 20px;
`;

export const Historic = styled.View`
  flex: 1;
  background: #fff;

  width: 98%;
  border-top-width: 3px;
  border-color: #232129;

  padding-top: 0;
  padding-bottom: 3%;
  padding-left: 2%;
  padding-right: 2%;
`;

export const HistoricText = styled.Text`
  font-size: 25px;
  text-align: center;

  margin-bottom: 2%;
`;

export const HistoricView = styled.View`
  flex: 1;
  flex-wrap: wrap;

  align-items: center;
`;

export const HistoricBlock = styled.View`
  border-width: 2px;
  border-color: #232129;

  justify-content: center;
  align-items: center;
  width: 40%;

  margin-bottom: 1%;
  margin-left: 5%;
`;

export const ScoreText = styled.Text`
  font-size: 15px;
  text-align: center;
`;
