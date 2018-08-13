/** notify
 * project: eibot
 * author: Chris Sprance - csprance
 * description:
 */
import swal from 'sweetalert';

const config = {
  className: 'next-smrt-theme'
};

export const notify = (msg: string) => {
  swal(
    'Notification!',
    msg,
    'success',
    config
  );
};
