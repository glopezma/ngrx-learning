import { tutorialFeatureKey } from './tutorial.reducer';
import { Tutorial } from './models/tutorial.model';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const selectTutorialState = createFeatureSelector<Tutorial[]>(tutorialFeatureKey);

export const selectTutorials = createSelector(selectTutorialState, state => state);
