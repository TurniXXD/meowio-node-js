import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import styles from './markdown-resolver.module.scss'

export const MarkdownResolver = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  // external link resolver
  if (/\(http(.*?)\)/.test(text) && text !== null) {
    const linksRaw: Array<string> = [];
    let iWhile = 0;

    while (/\(http(.*?)\)/.test(text)) {
      const matchedLink = text.match(/\[(.*?)\]+\(http(.*?)\)/);
      let matchedLinkNotNull;
      matchedLink !== null && (matchedLinkNotNull = matchedLink[0]);
      text !== null && linksRaw.push(matchedLinkNotNull || '');
      text = text.replace(/\[(.*?)\]+\(http(.*?)\)/, `<<${iWhile}>>`);
      iWhile++;
    }

    linksRaw.forEach((linkRaw, i) => {
      const linkHref = linkRaw?.split(/\(/)[1].split(/\)/)[0];
      const linkText = linkRaw?.split(/\[/)[1].split(/\]/)[0];
      text = text.replace(
        `<<${i}>>`,
        ` <a href="${linkHref}" target="_blank">${linkText}</a>`
      );
    });
  }

  return (
    <div className={`${styles.markdownResolver} ${className}`}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{text || ''}</ReactMarkdown>
    </div>
  );
};
