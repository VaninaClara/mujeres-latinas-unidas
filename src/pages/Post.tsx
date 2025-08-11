import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "./Post.css";

export default function Post() {
  const { slug } = useParams();
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    if (!slug) return;

    (async () => {
      try {
        const res = await fetch(`/blog/${slug}.md`);
        const md = await res.text();

        // 👇 OJO: await porque parse puede ser async
        const raw = await marked.parse(md);
        const safe = DOMPurify.sanitize(raw as string);
        setHtml(safe);
      } catch {
        setHtml("<p>No se encontró el artículo.</p>");
      }
    })();
  }, [slug]);

  return (
    <section className="post">
      <div className="post__container">
        <div className="post__back">
          <Link to="/blog">← Volver al blog</Link>
        </div>
        <article className="post__content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  );
}

