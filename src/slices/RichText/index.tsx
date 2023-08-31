import type { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";
import styles from "../../scss/_a-rich-text.module.scss";

const components: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function RichText({ slice }: RichTextProps) {
  return (
    <section className={styles.richtext}>
      <PrismicRichText field={slice.primary.content} components={{
        heading1: ({ children}) => <h1 className="title-1">{children}</h1>,
        paragraph: ({ children }) => <p className="paragraph">{children}</p>,
      }} />
    </section>
  );
}
