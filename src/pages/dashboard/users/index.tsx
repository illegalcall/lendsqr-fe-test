import { NextPage } from 'next';
import { Users } from '@/pageComponents';
import { Layout } from '@/shared/templates';

const UsersPage: NextPage = () => {
  return (
    <Layout>
      <Users />
    </Layout>
  );
};
export default UsersPage;
