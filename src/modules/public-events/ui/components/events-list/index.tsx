import React, {useCallback} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useSelector} from 'react-redux';
import {
  eventsEntitiesSelector,
  loadingEntitiesSelector,
} from '../../../store/list/selectors';
import EventsListItem from '../events-list-item';

type Props = {
  loadList: () => void;
  canRefresh: boolean;
};

const EventsList: React.FC<Props> = ({loadList, canRefresh}: Props) => {
  const entities = useSelector(eventsEntitiesSelector);
  const isLoading = useSelector(loadingEntitiesSelector);
  const keyExtractor = useCallback(item => item.id, []);

  return (
    <FlatList
      data={entities}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <EventsListItem item={item} />}
      refreshControl={
        canRefresh ? (
          <RefreshControl refreshing={isLoading} onRefresh={loadList} />
        ) : undefined
      }
    />
  );
};
export default EventsList;
