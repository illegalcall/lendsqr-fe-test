import { NextPage } from 'next';
import { Dashboard, Users } from '@/pageComponents';
import { Layout } from '@/shared/templates';

const DashboardPage: NextPage = () => {
  return (
    <Layout>
      <Users />
    </Layout>
  );
};
export default DashboardPage;
