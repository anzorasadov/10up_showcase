"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./LinkPreview.module.css";
import { fetchPreviewforUrl } from "@/app/actions";

type LinkPreviewProps = {
  url: string;
  target?: "new" | "_blank";
};

type PreviewData = {
  title?: string;
  description?: string;
  image?: string;
};

function LinkPreview({ url, target }: LinkPreviewProps) {
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPreviewforUrl(url);
        if (data.error) {
          throw data.error;
        }
        setPreviewData({ title: data.title, description: data.description, image: data.images?.[0] });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const handleClick = () => {
    if (target === "new" || target === "_blank") {
      window.open(url, target);
    } else {
      window.location.href = url;
    }
  };

  return (
    <article className={styles.linkPreview} onClick={handleClick}>
      <figure>
        {previewData?.image && (
          <Image loader={() => previewData.image!} fill src={previewData.image} alt={`${previewData.title} preview`} />
        )}
        {!previewData?.image && <Image fill src="/placeholder-image.jpg" alt={`${url} preview`} />}
      </figure>
      <div className={styles.linkMeta}>
        <h4>
          {loading && "Loading..."}
          {previewData?.title && previewData.title}
          {!loading && !previewData?.title && url}
        </h4>
        <Link className="text-hint" href={url} target={target}>
          {url}
        </Link>
      </div>
    </article>
  );
}

export default LinkPreview;
