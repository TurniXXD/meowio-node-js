import { ArticleDto } from '../../api';
import { formatDate, resolveImageUrl } from '../../utils';
import styles from './article-detail.module.scss';
import { MarkdownResolver } from '../MarkdownResolver';

const Article = ({ props }: { props: ArticleDto }) => {
  const {
    articleId,
    perex,
    content,
    title,
    imageId,
    createdAt,
    lastUpdatedAt,
  } = props;

  if (
    articleId &&
    perex &&
    title &&
    content &&
    imageId &&
    createdAt &&
    lastUpdatedAt
  ) {
    return (
      <div className={styles.articleDetail}>
        <h1>{title}</h1>
        <div className={styles.info}>
          Elisabeth Strain •{' '}
          <span className={styles.date}>{formatDate(createdAt)}</span>
        </div>
        <div className={styles.imageWrapper}>
          <img src={resolveImageUrl(imageId)} alt={imageId} />
        </div>
        <div className={styles.content}>
          <MarkdownResolver text={content} />
        </div>
      </div>
    );
  }
  return null;
};

export default Article;
