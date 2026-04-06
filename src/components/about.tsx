import { PanelTop, Smartphone } from "lucide-react";
import type { ReactElement } from "react";
import VisibilityWrapper from "./itemcard/visibility_wrapper";

export default function About() {
  return (
    <div className="containerShadow grid w-full scroll-mt-24 gap-6 px-8 py-14 md:grid-cols-2 lg:px-38">
      <section className="flex flex-col gap-6">
        <VisibilityWrapper className="h-full">
          <Card className="bg-myPrimary grid justify-items-center text-white">
            <div className="flex items-center gap-5">
              <PanelTop className="size-16" />
              <div>
                <h3 className="text-start text-2xl font-medium">
                  Web Development
                </h3>
                <p className="text-start">
                  Modern, accessible, and responsive web apps
                </p>
              </div>
            </div>
          </Card>
        </VisibilityWrapper>
        <VisibilityWrapper className="h-full">
          <Card className="bg-myPrimary grid justify-items-center">
            <div className="flex items-center gap-3 text-white">
              <Smartphone className="size-16" />
              <div>
                <h3 className="text-start text-2xl font-medium">
                  Mobile Development
                </h3>
                <p className="text-start">
                  Cross-platform apps with clean performance
                </p>
              </div>
            </div>
          </Card>
        </VisibilityWrapper>
      </section>

      <VisibilityWrapper className="h-full">
        <Card className="bg-customWhite flex flex-col justify-center px-12 py-12">
          <div>
            <h2 className="text-font-dark row-col-2 mb-2 text-2xl font-bold">
              About me
            </h2>
            <p className="text-font-dark">
              Hi, I'm Eric Man, a self-taught frontend developer who enjoys
              building clean and practical digital products. I focus on
              interfaces that feel smooth, readable, and reliable across
              devices.
            </p>
            <br />
            <p className="text-font-dark">
              I mainly work with React, Next.js, TypeScript, and Tailwind CSS.
              Through personal projects, I turn ideas into production-ready
              experiences while continuously improving code quality, UX, and
              performance.
            </p>
          </div>
        </Card>
      </VisibilityWrapper>
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
      className={`${className} h-full justify-items-center rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:text-start`}
    >
      {children}
    </div>
  );
}
