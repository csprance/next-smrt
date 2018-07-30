/** notify
 * project: eibot
 * author: Chris Sprance - csprance
 * description:
 */
import swal from 'sweetalert';

const config = {
  className: 'mis-theme-swal'
};

export const notify = ({ success, error }) => {
  if (success) {
    swal(
      'Success!',
      'We have succesffully added the skin to your steam inventory.',
      'success',
      config
    );
  }
  if (error) {
    if (error == 'ALREADY_CLAIMED') {
      swal(
        'Already Claimed!',
        `You've already claimed your skin. Check out your steam inventory for the goods!`,
        'error',
        config
      );
    }
    if (error == 'INCORRECT_EMAIL') {
      swal(
        'Incorrect Email!',
        `This email isn't in our database. Make sure to use the email you signed up with for your original purchase and check to make sure the order was not cancelled.`,
        'error',
        config
      );
    }
    if (error == 'INVALID_STEAM_ID') {
      swal(
        'Invalid Steam ID!',
        'This steam id is invalid. Please reenter your Steam 64 bit ID and try again.',
        'error',
        config
      );
    }
    if (error == 'OTHER') {
      swal(
        'Hmmmm...',
        'Something went wrong. Please try again later.',
        'error',
        config
      );
    }
  }
};
