import ericmanDev from "../assets/showcase/ericman.dev.png";

export default function SeoHead() {
  return (
    <>
      <title>Eric Man | Web Developer Portfolio</title>
      <meta
        name="description"
        content="Hi, I'm Eric Man — a frontend developer specializing in React and modern web design. Check out my projects!"
      />
      <meta
        name="keywords"
        content="Eric Man, web developer, React, portfolio, frontend developer"
      />
      <meta name="author" content="Eric Man" />
      <meta property="og:title" content="Eric Man | Web Developer Portfolio" />
      <meta
        property="og:description"
        content="Frontend developer building clean, modern, and responsive web apps with React."
      />
      <link rel="icon" type="image/png" href="/favicon.png?v=2" />
      <meta property="og:image" content={ericmanDev} />
      <meta property="og:url" content="https://ericman.dev" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content={ericmanDev} />
      <meta name="twitter:title" content="Eric Man | Web Developer Portfolio" />
      <meta
        name="twitter:description"
        content="Frontend developer specializing in modern React web design."
      />
      <meta name="twitter:image" content={ericmanDev} />
    </>
  );
}
