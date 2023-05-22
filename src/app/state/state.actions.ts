import { createAction, props } from '@ngrx/store';
import { StateModel } from './state.model';

export const addObject = createAction('[Object] Add Object', props<{ bot: StateModel }>());
export const deleteObject = createAction('[Object] Delete Object', props<{ bitIndex: string }>());