import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './homepage.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div class="avatar avatar--vertical">
      <img
        class="avatar__photo avatar__photo--xl"
        src="https://github.com/Xeraphinite.png" />
      <div class="avatar__name padding-vert--md">{siteConfig.title}</div>
      </div>      
    </header>
  );
};