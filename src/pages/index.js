import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageHeader from '../components/homepage/HomepageHeader';
import Layout from '@theme/Layout';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="I cannot explain how">
      <HomepageHeader />
    </Layout>
  );
}
