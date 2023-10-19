import { useTranslation } from 'react-i18next';
import { ArticleDtoPreview, GlobalService } from '../api';
import { useEffect, useState } from 'react';
import Article from '../components/Article';

const Articles = () => {
  const { t } = useTranslation('common');
  const [articles, setArticles] = useState<Array<ArticleDtoPreview>>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const result = await GlobalService.articles1();
      setArticles(result);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>{t('recentArticles')}</h1>
      {articles.map((article, i) => (
        <Article key={i} props={article} />
      ))}
    </div>
  );
};

export default Articles;
