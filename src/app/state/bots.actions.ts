import { createAction, props } from '@ngrx/store';
import { Message } from './bots.model';

export const addMessage = createAction('[Bots] Add Message', props<{message: Message, botIndex: number}>())
export const remove = createAction('[Bots] Remove')