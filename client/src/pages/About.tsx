import { useTranslation } from 'react-i18next';
import { tArray } from '../utils';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      <h1>{t('title')}</h1>
      {tArray(t, 'description').map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
};

export default About;
