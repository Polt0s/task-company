import React from 'react';
import { getInfoUser } from '../../Api/getDataUser';
import useAppDispatch from '../../Hooks/useAppDispatch';
import useAppSelector from '../../Hooks/useAppSelector';
import Footer from './Footer';

const FooterContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.dataUsers);

  React.useEffect(() => {
    dispatch(getInfoUser());
  }, []);

  return (
    <Footer userData={user} />
  );
};

export default FooterContainer;