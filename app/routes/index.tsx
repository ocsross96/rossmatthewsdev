import RossAvatar from '../../public/rossmatthewsdev/images/ross-avatar.jpeg';

export default function Index() {
  return (
    <div className="container prose mx-auto pt-8">
      <img src={RossAvatar} height="75" width="75" className="pborder-4 rounded-full border-solid border-gray-400" />
      <h1>Hello 👋</h1>
      <p>I'm Ross Matthews, a Senior Frontend Developer living and working remotely in London, UK.</p>
      <p>
        I currently work at Rated People. Welcome to my personal site, it's still under construction, but feel free to
        have a poke around. You can find me on{' '}
        <a
          href="https://www.linkedin.com/in/rossmatthewsdev"
          target="_blank"
          rel="noreferrer noopener"
          className="text-teal-500 no-underline hover:underline"
        >
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
}
