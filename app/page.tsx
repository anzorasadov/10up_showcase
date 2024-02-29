import Link from "next/link";
import { Metadata } from "next";
import { promises as fs } from "fs";
import LinkPreview from "./components/LinkPreview/LinkPreview";
import CodeBlock from "./components/CodeBlock/CodeBlock";

export const metadata: Metadata = {
  title: "10up Technical Submission",
  description: "Collection of code examples for 10up recruitment process",
};

export default async function Home() {
  const [crowddeskService, crowddeskAdapter, elementorProjectsOverview, elementorProjectSingle] = await Promise.all([
    fs.readFile(process.cwd() + "/public/code/CrowddeskService.txt", "utf8"),
    fs.readFile(process.cwd() + "/public/code/CrowddeskAdapter.txt", "utf8"),
    fs.readFile(process.cwd() + "/public/code/ElementorProjectsOverview.txt", "utf8"),
    fs.readFile(process.cwd() + "/public/code/ElementorProjectSingle.txt", "utf8"),
  ]);

  return (
    <main className="container">
      <section>
        <h1>10up Technical Submission</h1>
        <p>This is a collection of code expamles that was requested by 10up Team to get a better understanding of my technical skills.</p>
        <h2>Requested Code Samples</h2>
        <p>10up Team has requested the following code examples:</p>
        <ul>
          <li>
            <a href="#semantic-html">Semantic HTML</a>
          </li>
          <li>
            <a href="#css">CSS and custom crafting of UI and component architecture (ideally without a CSS framework)</a>
          </li>
          <li>
            <a href="#design">Design & QA - good sense of design aesthetic in the context of a website</a>
          </li>
          <li>
            <a href="#javascript">JavaScript (ideally without jQuery)</a>
          </li>
          <li>
            <a href="#react">React</a>
          </li>
          <li>
            <a href="#wordpress">WordPress/PHP (recommended, but not required)</a>
          </li>
          <li>
            <a href="#gutenberg">Gutenberg / WordPress block editor (nice to have)</a>
          </li>
          <li>
            <a href="#a11y">Accessibility (nice to have)</a>
          </li>
        </ul>
      </section>

      <section id="semantic-html">
        <h2>Semantic HTML</h2>
        <p>
          This demo webpage was created with semantic HTML in mind consisting of <code className="inline">{"<header />"}</code>,{" "}
          <code className="inline">{"<nav />"}</code>, <code className="inline">{"<main />"}</code>,{" "}
          <code className="inline">{"<section />"}</code>s, <code className="inline">{"<figures />"}</code>s and{" "}
          <code className="inline">{"<article />"}</code>s.
        </p>
        <p>
          The source code for this demo can be viewed and downloaded from{" "}
          <Link href="https://github.com/anzorasadov/10up_showcase" target="new">
            this code repo
          </Link>{" "}
          on Github.
        </p>
      </section>

      <section id="css">
        <h2>CSS, UI, Components Architecture</h2>
        <p>
          As it is the case with semantic HTML, this website was set up without CSS frameworks in order to demonstrate my CSS abilities,
          which can be viewed in the same repo as stated in the previous section.
        </p>
        <p>
          The UI-Architecture for this website can be viewed <Link href="/ui-architecture">here</Link>
        </p>
        <p>Further demonstrations of my CSS abilities can be viewed here:</p>
        <div className="three-col py-1">
          <div>
            <LinkPreview url="https://www.saniadmina.com/" target="new" />
            <p className="px-1">
              Base theme: Storefront <br />
              CSS grid by Bootstrap <br />
              <a href="https://www.saniadmina.com/wp-content/themes/storefront-child-theme-master/style.css?ver=1.0.0" target="new">
                Around 50% custom CSS
              </a>
            </p>
          </div>

          <div>
            <LinkPreview url="https://birnleitner-immobilien.at/" target="new" />
            <p className="px-1">
              Base theme: MyHome <br />
              No CSS frameworks <br />
              <a href="https://birnleitner-immobilien.at/wp-content/themes/myhome-child/style.css?ver=3.1.66" target="new">
                Around 50% custom CSS
              </a>
            </p>
          </div>

          <div>
            <LinkPreview url="https://layered-2023.vercel.app/en" target="new" contain />
            <p className="px-1">
              [WIP] Own website <br />
              <a href="https://github.com/anzorasadov/layered-2023">Custom CSS based on Tailwind CSS (global.css and components)</a>
            </p>
          </div>
        </div>
      </section>

      <section id="design">
        <h2>Design</h2>
        <p>
          While Design is not my area of expertise, I do hope I could demonstrate my rudementary design skills well enough with this demo
        </p>
        <p>Further references:</p>
        <div className="three-col py-1">
          <div>
            <LinkPreview url="https://www.saniadmina.com/" target="new" />
            <p className="px-1">Styling in collaboration with the Client</p>
          </div>

          <div>
            <LinkPreview url="https://birnleitner-immobilien.at/" target="new" />
            <p className="px-1">Styling in collaboration with the my business Partner</p>
          </div>

          <div>
            <LinkPreview url="https://layered-2023.vercel.app/en" target="new" contain />
            <p className="px-1">Styling in collaboration with the my business partner</p>
          </div>

          <div>
            <LinkPreview url="https://castelloalba.at/" target="new" contain />
            <p className="px-1">Styling in collaboration with the my business partner</p>
          </div>

          <div>
            <LinkPreview url="https://gulz.at/" target="new" />
            <p className="px-1">Styling in collaboration with the my business partner</p>
          </div>
        </div>
      </section>

      <section id="javascript">
        <h2>JavaScript</h2>
        <p>Here is a summary of a few JS building blocks that I have setup for clients</p>
      </section>

      <section id="react">
        <h2>React</h2>
        <p>
          Most of my React Code has been produced as a part of proprietary software that I cannot show due to NDAs that I've signed.
          However, this page was set up in Next.js, which is based on React. Furthermore, the WIP website{" "}
          <a href="https://layered-2023.vercel.app/en" target="new">
            Layered Studio
          </a>{" "}
          <a href="https://github.com/anzorasadov/layered-2023" target="new">
            (repo)
          </a>{" "}
          is also built with Next.js. Although these Demos are rudementary, I do hope that they could provide some insight.
        </p>
      </section>

      <section id="wordpress">
        <h2>WordPress / PHP</h2>
        <p>
          Usually I am requested by my clients to implement some custom functions or connect a WP-Website to an API. As demonstrated in the
          following example, I have connected a Crowdfunding API to a clients website in order to display their current Crowdfunding
          Projects on thier website.
        </p>

        <CodeBlock className="my-1" isCollapsable title="Crowddesk Serice API">
          {crowddeskService}
        </CodeBlock>

        <CodeBlock className="my-1" isCollapsable title="Crowddesk Data Adapter">
          {crowddeskAdapter}
        </CodeBlock>

        <p>
          To allow this I had to write a custom building block for Elementor to give the user a toolbox for displaying and curating the
          contents.
        </p>

        <CodeBlock className="my-1" isCollapsable title="Elementor widget for displaying projects lists from Crowddesk">
          {elementorProjectsOverview}
        </CodeBlock>

        <CodeBlock className="my-1" isCollapsable title="Elementor widget for displaying single Project from Crowddesk">
          {elementorProjectSingle}
        </CodeBlock>
      </section>
    </main>
  );
}
