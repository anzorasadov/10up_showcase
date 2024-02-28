import Link from "next/link";
import LinkPreview from "./components/LinkPreview/LinkPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "10up Technical Submission",
  description: "Collection of code examples for 10up recruitment process",
};

export default function Home() {
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
          This demo webpage was created with semantic HTML in mind consisting of <code>{"<header />"}</code>, <code>{"<nav />"}</code>,{" "}
          <code>{"<main />"}</code>, <code>{"<section />"}</code>s, <code>{"<figures />"}</code>s and <code>{"<article />"}</code>s.
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
              Around 50% custom CSS <br />
              CSS grid by Bootstrap
            </p>
          </div>

          <div>
            <LinkPreview url="https://birnleitner-immobilien.at/" target="new" />
            <p className="px-1">
              Base theme: MyHome <br />
              Around 60% custom CSS <br />
              No CSS frameworks
            </p>
          </div>

          <div>
            <LinkPreview url="https://layered-2023.vercel.app/en" target="new" contain />
            <p className="px-1">
              [WIP] Own website <br />
              Custom CSS based on Tailwind CSS
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
        <p className="three-col py-1">
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
        </p>
      </section>

      <section id="javascript">
        <h2>JavaScript</h2>
        <p>...</p>
      </section>

      <section id="react">
        <h2>React</h2>
        <p>...</p>
      </section>

      <section id="wordpress">
        <h2>WordPress / PHP</h2>
        <p>...</p>
        <p></p>
      </section>
    </main>
  );
}
