import { PanelTop, Smartphone } from "lucide-react";
import type { ReactElement } from "react";

export default function About() {
  return (
    <main className="containerShadow grid w-full scroll-mt-24 gap-6 px-8 py-14 md:grid-cols-2">
      <section className="flex flex-col gap-6">
        <Card className="bg-myPrimary grid justify-items-center text-white">
          <div className="flex items-center gap-5">
            <PanelTop className="size-16" />
            <div>
              <h1 className="text-start text-2xl font-medium">
                Web Development
              </h1>
              <h2 className="text-start">Build responsive websites</h2>
            </div>
          </div>
        </Card>
        <Card className="bg-myPrimary grid justify-items-center">
          <div className="flex items-center gap-3 text-white">
            <Smartphone className="size-16" />
            <div>
              <h1 className="text-start text-2xl font-medium">
                Mobile Development
              </h1>
              <h2 className="text-start">Cross-platform mobile apps</h2>
            </div>
          </div>
        </Card>
      </section>

      <Card className="bg-customWhite flex flex-col justify-center px-12 py-12">
        <div>
          <h1 className="text-font-dark row-col-2 mb-2 text-2xl font-bold">
            About me
          </h1>
          <h2 className="text-font-dark">
            Hey I’m Eric a self-taught web developer driven by curiosity and a
            passion for building clean, functional, and user-friendly
            applications.
          </h2>
          <br />
          <h2 className="text-font-dark">
            I focus on writing maintainable code and creating practical
            solutions through hands-on projects and continuous learning.
          </h2>
        </div>
      </Card>
    </main>
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
      className={`${className} h-full justify-items-center rounded-lg p-8 text-center md:text-start`}
    >
      {children}
    </div>
  );
}
