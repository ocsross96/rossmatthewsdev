import { NewspaperIcon } from '@heroicons/react/24/outline';

export default function Blog() {
  return (
    <div className="container prose mx-auto pt-8">
      <div className="mb-8 flex h-[75px] w-[75px] items-center justify-center rounded-full border-4 border-solid border-[#374151] bg-white">
        <NewspaperIcon className="h-[45px] w-[45px]" />
      </div>
      <h1>Blog</h1>
      <p>Coming soon...</p>
    </div>
  );
}
