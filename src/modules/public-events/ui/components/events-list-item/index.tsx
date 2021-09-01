import React, {useCallback} from 'react';
import {Text} from 'react-native';
import {navigate} from '../../../../navigation/RootNavigation';
import screenNames from '../../../../navigation/screen-names';
import {EventModel} from '../../../domain/interfaces/Event';
import * as S from './style';

type Props = {
  item: EventModel;
};

const EventsListItem = ({item}: Props) => {
  const onItemPressed = useCallback(() => {
    navigate(screenNames.SHOW_EVENTS, {
      itemId: item.id,
    });
  }, []);

  return (
    <S.Container onPress={onItemPressed}>
      <Text>Event №{item.id}</Text>
    </S.Container>
  );
};
export default EventsListItem;
