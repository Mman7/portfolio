import { PanelTop, Smartphone } from "lucide-react";
import type { ReactElement } from "react";

export default function About() {
  return (
    <div className="containerShadow flex w-full flex-col justify-between gap-12 px-8 py-12 md:flex-row">
      <Card className="bg-myPrimary">
        <main className="flex flex-col justify-center gap-10">
          <div className="flex items-center gap-5">
            <PanelTop className="size-16" />
            <section>
              <h1 className="text-2xl font-medium">Web Development</h1>
              <h2>Build responsive websites</h2>
            </section>
          </div>
          <div className="flex items-center gap-5">
            <Smartphone className="size-16" />
            <section>
              <h1 className="text-2xl font-medium">Mobile Development</h1>
              <h2>Cross-platform mobile apps</h2>
            </section>
          </div>
        </main>
      </Card>
      <Card className="bg-customWhite">
        <div>
          <h1 className="text-font-dark mb-2 text-2xl font-bold">About me</h1>
          <h2 className="text-font-dark">
            I’m a self-taught web developer driven by curiosity and a passion
            for building clean, functional, and user-friendly applications.
          </h2>
          <br />
          <h2 className="text-font-dark">
            I focus on writing maintainable code and creating practical
            solutions through hands-on projects and continuous learning.
          </h2>
        </div>
      </Card>
    </div>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactElement;
  className?: string;
}) {
  return (
    <div
      className={`${className} grid w-full flex-1 justify-items-center space-y-5 rounded-lg p-8`}
    >
      {children}
    </div>
  );
}
