import { Layout } from 'antd';
import { AppHeader } from './Header';

export const AppLayout = ({ children }) => {
  const { Content } = Layout;

  return (
    <Layout>
      <AppHeader />
      <Content>{children}</Content>
    </Layout>
  );
};
