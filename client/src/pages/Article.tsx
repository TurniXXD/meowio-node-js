import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDto, ArticlesService } from '../api';
import { useParams } from 'react-router-dom';
import ArticleDetail from '../components/ArticleDetail';

const Article = () => {
  const { t } = useTranslation(['common', 'articles']);
  const { articleId } = useParams();
  const [article, setArticle] = useState<ArticleDto | null>(null);

  useEffect(() => {
    if (articleId) {
      const fetchArticle = async () => {
        const result = await ArticlesService.articles({
          id: articleId,
        });
        setArticle(result);
      };
      articleId && fetchArticle();
    }
  }, [articleId]);

  if (!article) {
    return <div>{t('loading')}</div>;
  }

  return <ArticleDetail props={article} />;
};

export default Article;
