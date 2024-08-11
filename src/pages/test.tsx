import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ToolsSection from '@site/src/components/ToolsSection';

import styles from './test.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
      <header className={clsx('hero', styles.heroBanner)}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <div className="container">
          <h1 className="hero__title">🌟 Subscriber Benefits 🌟</h1>
          <p className="hero__subtitle">
            Unlock exclusive tools and resources with a Discord or Patreon subscription!
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="https://discord.com/servers/the-content-cult-673733355950571531">
              Join & subscribe on Discord
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://www.patreon.com/BlackJaxVR">
              Join & subscribe on Patreon
            </Link>
          </div>
        </div>
      </header>
      <ToolsSection />
    </div>
  );
}
