import React from 'react';
import { getInfoUser } from '../../Api/getDataUser';
import useAppDispatch from '../../Hooks/useAppDispatch';
import useAppSelector from '../../Hooks/useAppSelector';
import { useFetching } from '../../Hooks/useFetching';
import { IUserInfo } from '../../Models/IUserInfo';
import { setUser } from '../../Store/reducer/dataUser';
import Footer from './Footer';

const FooterContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.dataUsers);
  const [fetchInfoUser] = useFetching(async () => {
    const response = await getInfoUser();
    const result: IUserInfo = {
      name: response.name,
      company: response.company,
      avatar_url: response.avatar_url,
      followers: response.followers,
    };
    dispatch(setUser(result));
  })

  React.useEffect(() => {
    fetchInfoUser();
  }, []);

  return (
    <Footer userData={user} />
  );
};

export default FooterContainer;