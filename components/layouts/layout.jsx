import {Fragment} from 'react';
import MainNavigation from './main-navigation';
import Logo from './logo';

const Layout = function (props) {
  return (
      <Fragment>
        <MainNavigation />
        <main>{props.children}</main>
      </Fragment>
  );
};

export default Layout;
