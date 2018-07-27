// Form Types
// All the types associated with the state from the social integrations

export interface UserData {
  // The users email address
  email: string;
  // The users steam id
  steamid: string;
}
export type ErrorTypes =
  | false
  | 'ALREADY_CLAIMED'
  | 'INCORRECT_EMAIL'
  | 'INVALID_STEAM_ID'
  | 'OTHER';

export interface FormState {
  // Is the form in the process of being sent off and validated
  submitting: boolean;
  // Has the form been submitted
  submitted: boolean;
  // Success! A skin was added to the steamid account
  success: boolean;
  // The type of error or false if there is no error
  error: ErrorTypes;
}

export interface UserAndFormState extends UserData, FormState {}
