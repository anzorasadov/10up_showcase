import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <section>
        <h1>10up Technical Submission</h1>
        <div>This is a showcase of code expamles that was requested by 10up Team to get a better understanding of my technical skills.</div>
        <h2>Requested Code Samples</h2>
        <div>
          10up Team has requested the following code examples:
          <ul>
            <li>Semantic HTML</li>
            <li>CSS and custom crafting of UI and component architecture (ideally without a CSS framework)</li>
            <li>Design & QA - good sense of design aesthetic in the context of a website</li>
            <li>JavaScript (ideally without jQuery)</li>
            <li>React</li>
            <li>WordPress/PHP (recommended, but not required)</li>
            <li>Gutenberg / WordPress block editor (nice to have)</li>
            <li>Accessibility (nice to have)</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
