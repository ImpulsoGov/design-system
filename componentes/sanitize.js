import DOMPurify from "dompurify";

export const sanitize = (content) => {
  return typeof window !== "undefined" ? DOMPurify.sanitize(content, { ADD_TAGS: ["iframe"], ADD_ATTR: ['allow', 'allowFullScreen', 'frameBorder', 'scrolling','width','height','title','src'] }) : content;
};