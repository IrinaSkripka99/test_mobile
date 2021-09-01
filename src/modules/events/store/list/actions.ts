import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {EventModel} from '../../domain/interfaces/Event';
import eventsRepository from '../../domain/repositories/EventsRepository';

const PREFIX = 'EVENTS';

export const loadEvents = createAsyncThunk<AxiosResponse<EventModel[]>>(
  `${PREFIX}/loadEvents`,
  () => eventsRepository.load(),
);
