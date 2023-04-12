import { NextPage } from 'next';
import { UserDetails } from '@/pageComponents';
import { Layout } from '@/shared/templates';

const UserDetailsPage: NextPage = () => {
  return (
    <Layout>
      <UserDetails />
    </Layout>
  );
};
export default UserDetailsPage;
