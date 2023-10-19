import { Link } from 'react-router-dom';
import { ArticleDtoPreview } from '../../api';
import { formatDate, resolveImageUrl } from '../../utils';
import styles from './article.module.scss';
import globalStyles from '../../styles/global.module.scss';
import { useTranslation } from 'react-i18next';

const Article = ({ props }: { props: ArticleDtoPreview }) => {
  const { articleId, perex, title, imageId, createdAt, lastUpdatedAt } = props;
  const { t } = useTranslation('articles');

  if (articleId && perex && title && imageId && createdAt && lastUpdatedAt) {
    return (
      <div className={styles.articlePreview}>
        <div className={styles.imageCol}>
          <img src={resolveImageUrl(imageId)} alt={imageId} />
        </div>
        <div className={styles.contentCol}>
          <span className={globalStyles.subTitle}>{title}</span>
          <div className={styles.articleInfo}>
            Elisabeth Strain • {formatDate(createdAt)}
          </div>
          <p>{perex}</p>
          <Link to={`/articles/${articleId}`}>
            <span className={styles.articleDetailLink}>
              {t('readWholeArticle')}
            </span>
          </Link>
        </div>
      </div>
    );
  }
  return null;
};

export default Article;
