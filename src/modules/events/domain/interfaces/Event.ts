import {Actor} from './Actor';
import {Payload} from './Payload';
import {Repository} from './Repository';

export interface EventModel {
  id: string;
  type: string;
  actor: Actor;
  repo: Repository;
  payload: Payload;
  public: true;
  created_at: string;
}
