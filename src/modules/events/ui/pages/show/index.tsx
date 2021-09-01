import {RouteProp} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectEventEntity} from '../../../store/list/selectors';
import * as S from './style';

type Props = {
  route: RouteProp<{params: {itemId: string}}, 'params'>;
};

const ShowEventScreen = ({route}: Props) => {
  const {itemId} = route.params;
  const event = useSelector(selectEventEntity(itemId));

  return (
    <S.Container>
      <S.Title>Event №{event?.id}</S.Title>
      <Text>type: {event?.type}</Text>
      <Text>actor: {event?.actor.login}</Text>
      <Text>repo: {event?.repo.name}</Text>
    </S.Container>
  );
};
export default ShowEventScreen;
