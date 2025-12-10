import { SideContact } from "./hero/hero";

export default function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-8">
        <aside className="flex grid-flow-col flex-col items-center">
          <p>
            © {new Date().getFullYear()} Eric Man. All rights reserved.
            <br />
            Built with React + Tailwinds + a lots of coffee ☕.
          </p>
        </aside>
        <h1>Thanks for visiting!</h1>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <SideContact />
        </nav>
      </footer>
    </>
  );
}
