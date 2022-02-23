import { createAction, props } from "@ngrx/store";
import { Tutorial } from "./models/tutorial.model";

export const ADD_TUTORIAL = createAction(
  '[Tutorial] Add',
  props<Tutorial>()
);

export const REMOVE_TUTORIAL = createAction(
  '[Tutorial] Remove',
  props<{ id: number; }>()
);

export const UPDATE_TUTORIAL = createAction(
  '[Tutorial] Update',
  props<Tutorial>()
);

export const RESET_TUTORIAL = createAction(
  '[Tutorial] Reset'
);
