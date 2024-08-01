import css from './AppBar.module.css';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import SearchBox from '../SearchBox/SearchBox';
import { useLocation } from 'react-router-dom';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';


export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return (
    <header className={css.header}>
      <Navigation />
      {location.pathname === '/contacts' && <SearchBox />}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};




