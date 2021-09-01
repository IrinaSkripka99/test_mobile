import {createEntityAdapter} from '@reduxjs/toolkit';
import {EventModel} from '../../domain/interfaces/Event';

export const eventsAdapter = createEntityAdapter<EventModel>();
