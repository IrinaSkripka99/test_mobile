import {createSelector, EntityId} from '@reduxjs/toolkit';
import {eventsStoreSelector} from '../selectors';
import {eventsAdapter} from './adapter';

const {selectById} = eventsAdapter.getSelectors();

export const eventsListStoreSelector = createSelector(
  eventsStoreSelector,
  state => state.list,
);

export const eventsEntitiesSelector = createSelector(
  eventsListStoreSelector,
  state => eventsAdapter.getSelectors().selectAll(state),
);

export const selectEventEntity = (id: EntityId) => {
  return createSelector(eventsListStoreSelector, state =>
    selectById(state, id),
  );
};

export const loadingEntitiesSelector = createSelector(
  eventsListStoreSelector,
  state => state.isLoading,
);
