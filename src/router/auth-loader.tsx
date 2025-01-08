import { redirect } from 'react-router';

import { isAuthenticated } from './loader-utils';

const AuthLoader = () => {
  if (isAuthenticated()) {
    return redirect('/login');
  }

  return null;
};

export default AuthLoader;
