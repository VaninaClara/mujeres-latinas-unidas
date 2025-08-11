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
    fetch(`/blog/${slug}.md`)
      .then(r => r.text())
      .then(md => {
        const raw = marked.parse(md);
        const safe = DOMPurify.sanitize(raw);
        setHtml(safe);
      })
      .catch(() => setHtml("<p>No se encontró el artículo.</p>"));
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
