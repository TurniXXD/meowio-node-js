import { useTranslation } from 'react-i18next';

const EditArticle = () => {
  const { t } = useTranslation('articles');

  return (
    <div>
      <h1>{t('editArticle')}</h1>
    </div>
  );
};

export default EditArticle;
