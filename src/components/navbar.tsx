export default function Navbar() {
  return (
    <div className="p-3">
      <div className="navbar bg-white/10 shadow-sm backdrop-blur-3xl">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Eric Man</a>
        </div>
        <div className="hidden flex-1 justify-between px-4 sm:flex">
          <Button>About</Button>
          <Button>Projects</Button>
          <Button>Skills</Button>
          <Button>Contact</Button>
        </div>
        <DropDownMenu />
      </div>
    </div>
  );
}

function Button({ children }: { children: string }) {
  return (
    <button className="rounded-md px-4 py-2 text-lg duration-300 hover:cursor-pointer hover:bg-amber-50 hover:text-black">
      {children}
    </button>
  );
}

function DropDownMenu() {
  return (
    <div className="dropdown dropdown-end sm:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}
