import {useIsFocused} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {useAppDispatch} from '../../../../../store/store';
import {loadEvents} from '../../../store/list/actions';
import EventsList from '../../components/events-list';
import * as S from './style';

const AUTO_UPDATE = 60000;
const REFRESH_TIME = 15000;

const EventsListScreen = () => {
  let intervalId: NodeJS.Timeout;
  let timerId: NodeJS.Timeout;

  const isFocused = useIsFocused();
  const dispatch = useAppDispatch();
  const [canRefresh, setCanRefresh] = useState<boolean>(false);

  useEffect(() => {
    if (isFocused) {
      loadList();
      startAutoReloadInterval();
    }
    return () => {
      clearInterval(intervalId);
      clearTimeout(timerId);
    };
  }, [isFocused]);

  const loadList = useCallback(() => {
    setCanRefresh(false);
    dispatch(loadEvents()).then(() => startRefreshTimer());
  }, []);

  const startRefreshTimer = useCallback(() => {
    timerId = setTimeout(() => {
      setCanRefresh(true);
    }, REFRESH_TIME);
  }, []);

  const startAutoReloadInterval = useCallback(() => {
    intervalId = setInterval(() => {
      loadList();
    }, AUTO_UPDATE);
  }, []);

  return (
    <S.Container>
      <EventsList canRefresh={canRefresh} loadList={loadList} />
    </S.Container>
  );
};
export default EventsListScreen;
