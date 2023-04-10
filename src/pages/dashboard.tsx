import { NextPage } from 'next';
import { Dashboard } from '../pageComponents';
import { Layout } from '@/shared/templates';

const DashboardPage: NextPage = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};
export default DashboardPage;
