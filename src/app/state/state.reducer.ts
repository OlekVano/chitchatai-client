import { createReducer, on } from '@ngrx/store';
import { addObject, deleteObject } from './state.actions';
import { StateModel } from './state.model';

export interface ObjectState {
  objects: StateModel[];
}

export const initialState: ObjectState = {
  objects: []
};

export const objectReducer = createReducer(
  initialState,
  on(addObject, (state, { object }) => ({ ...state, objects: [...state.objects, object] })),
  on(deleteObject, (state, { objectId }) => ({ ...state, objects: state.objects.filter(obj => obj.id !== objectId) }))
);