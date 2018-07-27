// social store
import { ActionType, getType } from 'typesafe-actions';
import * as formActions from './form-actions';
import { default as defaultState } from './state';
import { UserAndFormState as ReduxFormState } from './types';

export type FormState = ReduxFormState;
export type FormActions = ActionType<typeof formActions>;

export const reducer = (
  state: FormState = defaultState,
  action: FormActions
) => {
  switch (action.type) {
    case getType(formActions.request):
      return defaultState;
    case getType(formActions.success):
      return {
        ...state,
        submitting: false,
        submitted: true,
        success: true
      };
    case getType(formActions.failed):
      return {
        ...state,
        submitting: false,
        submitted: true,
        success: false,
        error: action.payload
      };
    default:
      return state;
  }
};
