"use server";

type JsonLinkResponse = {
  title?: string;
  description?: string;
  images?: string[];
  sitename?: string;
  favicon?: string;
  domain: string;
  url: string;
  error?: string;
};

export async function fetchPreviewforUrl(url: string) {
  const link = `https://jsonlink.io/api/extract?url=${url}&api_key=${process.env.JSONLINK_API_KEY}`;

  const response = await fetch(link);
  const rawData = await response.text();
  const data = JSON.parse(rawData) as JsonLinkResponse;
  return data;
}
