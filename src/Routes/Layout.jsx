import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Layout = () => {
  const { pathname } = useLocation();
  const [prevPath, setPrevPath] = useState(pathname);
  useEffect(() => {
    if (pathname !== prevPath) {
      setPrevPath(pathname);
      window.scrollTo(0, 0);
    }
  }, [pathname, prevPath]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
