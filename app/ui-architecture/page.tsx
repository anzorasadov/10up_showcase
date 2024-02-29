import { Metadata } from "next";
import ColorSwatch from "../components/ColorSwatch/ColorSwatch";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import LinkPreview from "../components/LinkPreview/LinkPreview";
import PageAnimations from "../components/PageAnimations";

export const metadata: Metadata = {
  title: "UI Architecture",
  description: "Collection of UI Elements and Components used on this webpage",
};

export default function Page() {
  return (
    <main className="container">
      <PageAnimations />
      <h1>UI Architecture</h1>

      <section>
        <h2>Typography</h2>
        <div>
          <h1>H1 Heading</h1>
          <h2>H2 Heading</h2>
          <h3>H3 Heading</h3>
          <h4>H4 Heading</h4>
          <h5>H5 Heading</h5>
          <h6>H6 Heading</h6>

          <p>Paragraph body</p>
        </div>
      </section>

      <section>
        <h2>Colors</h2>

        <div className="three-col">
          <article>
            <code className="inline">--color-sage-100</code>
            <ColorSwatch className="my-1" color="--color-sage-100" />
          </article>

          <article>
            <code className="inline">--color-sage-200</code>
            <ColorSwatch className="my-1" color="--color-sage-200" />
          </article>

          <article>
            <code className="inline">--color-sage-300</code>
            <ColorSwatch className="my-1" color="--color-sage-300" />
          </article>
        </div>

        <div className="three-col">
          <article>
            <code className="inline">--color-sunset-100</code>
            <ColorSwatch className="my-1" color="--color-sunset-100" />
          </article>

          <article>
            <code className="inline">--color-sunset-200</code>
            <ColorSwatch className="my-1" color="--color-sunset-200" />
          </article>

          <article>
            <code className="inline">--color-sunset-300</code>
            <ColorSwatch className="my-1" color="--color-sunset-300" />
          </article>
        </div>

        <div className="three-col">
          <article>
            <code className="inline">--color-black-50</code>
            <ColorSwatch className="my-1" color="--color-black-50" />
          </article>

          <article>
            <code className="inline">--color-black-100</code>
            <ColorSwatch className="my-1" color="--color-black-100" />
          </article>
        </div>
      </section>

      <section>
        <h2>Components</h2>

        <article>
          <h2>CodeBlock</h2>
          <CodeBlock>Code here</CodeBlock>
          <CodeBlock isCollapsable title="Collapsable CodeBlock">
            Code here
          </CodeBlock>
        </article>

        <article>
          <h2>LinkPreview</h2>
          <div className="three-col">
            <LinkPreview contain url="https://10up.com/" />
          </div>
        </article>
      </section>
    </main>
  );
}
