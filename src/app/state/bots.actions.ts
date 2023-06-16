import { createAction, props } from '@ngrx/store';
import { Bot, Message } from './bots.model';

export const addMessage = createAction('[Bots] Add Message', props<{message: Message, botIndex: number}>());
export const addBot = createAction('[Bots] Add Bot', props<{bot: Bot}>());