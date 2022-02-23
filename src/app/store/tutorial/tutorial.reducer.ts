import { UPDATE_TUTORIAL, ADD_TUTORIAL, REMOVE_TUTORIAL, RESET_TUTORIAL } from './tutorial.actions';
import { createReducer, on } from '@ngrx/store';
import { Tutorial } from './models/tutorial.model';

const initialState: Tutorial[] = [
  {
    id: 0,
    title: "Initial Tutorial Title",
    val: 0
  }
];

export const tutorialFeatureKey = 'tutorial';

const _tutorialDataReducer = createReducer(
  initialState,
  on(ADD_TUTORIAL, (state, action) => {
    const id = state.length;
    return [...state, { id: id, title: action.title, val: action.val }];
  }),
  on(REMOVE_TUTORIAL, (state, action) => state.filter(tutorial => tutorial.id !== action.id)),
  on(UPDATE_TUTORIAL, (state, action) => {
    return state.map(tutorial => {
      if (tutorial.id === action.id) {
        return {
          id: tutorial.id,
          title: action.title,
          val: action.val
        };
      } else {
        return tutorial;
      }
    });
  }),
  on(RESET_TUTORIAL, () => (
    [...initialState]
  ))
);

export function tutorialDataReducer(state, action) {
  return _tutorialDataReducer(state, action);
}
