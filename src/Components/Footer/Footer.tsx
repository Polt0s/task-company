import React from 'react';
import { getInfoUser } from '../../Api/getDataUser';
import useAppDispatch from '../../Hooks/useAppDispatch';
import useAppSelector from '../../Hooks/useAppSelector';
import './footer.sass';

const Footer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.dataUsers);

  React.useEffect(() => {
    dispatch(getInfoUser());
  }, []);

  return (
    <footer className={'footer-main'}>
      <img src={user.avatar} className={'footer-main__img'} />
      <h6 className={'footer-main__text'}>{user.name}</h6>
      <h6 className={'footer-main__text'}>{user.company}</h6>
      <h6 className={'footer-main__text'}>{user.followers}</h6>
    </footer>
  );
};

export default Footer;