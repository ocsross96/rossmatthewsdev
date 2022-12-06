import { NavLink } from '@remix-run/react';

export default function Footer() {
  const navLinkClassName = 'text-gray-500 transition hover:text-teal-500 dark:hover:text-teal-400';

  return (
    <footer class="mt-auto pt-32">
      <div class="mx-auto max-w-7xl lg:px-0">
        <div class="border-grey-400 border-t pt-10 pb-16 dark:border-zinc-700/40">
          <div class="relative px-0">
            <div class="mx-auto max-w-prose">
              <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div class="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  <NavLink to="/" className={navLinkClassName}>
                    Home
                  </NavLink>
                  <NavLink to="/resume" className={navLinkClassName}>
                    Resume
                  </NavLink>
                  <NavLink to="/blog" className={navLinkClassName}>
                    Blog
                  </NavLink>
                </div>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">© 2022 Ross Matthews. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
