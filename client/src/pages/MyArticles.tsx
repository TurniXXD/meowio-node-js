import { useTranslation } from 'react-i18next';

const MyArticles = () => {
  const { t } = useTranslation('articles');

  return (
    <div>
      <h1>{t('myArticles.title')}</h1>
    </div>
  );
};

export default MyArticles;
