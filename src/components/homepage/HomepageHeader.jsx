import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="flex flex-col items-center">
      <div className="my-8">
        <img
          className="rounded-full max-w-sm mx-auto"
          src="https://github.com/Xeraphinite.png"
        />
      </div>
      <h2 
        className="font-bold text-5xl bg-clip-text text-transparent"
        style={{backgroundImage: 'linear-gradient(135deg, #379588 0%, #50c9c3 25%, #9dceff 50%, #B6A6CA 75%, #d1d1e0 100%)'}}
      >
        {siteConfig.title}
      </h2>
      <div className='my-4 font-bold'>A Pananoid Rhythm Game Lover. </div>
    </header>
  );
};