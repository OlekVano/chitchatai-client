import { createAction, props } from '@ngrx/store';
import { Message } from './bots.model';

export const addMessage = createAction('[Bots] Add Message', props<{message: Message, botName: string}>())
export const remove = createAction('[Bots] Remove')