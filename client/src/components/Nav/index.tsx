import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.scss';
import globalStyles from '../../styles/global.module.scss';
import { useAuth } from '../../auth';

const Nav = () => {
  const { t } = useTranslation('common');
  const { authCookie: isLoggedIn, isOwner } = useAuth();

  return (
    <nav className={`${styles.nav} ${globalStyles.container}`}>
      <div className={globalStyles.row}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <img src="logo.png" alt="Meowio" height={50} width={50} />
        </NavLink>
        {!!isLoggedIn && (
          <NavLink
            to="/articles"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            {t('recentArticles')}
          </NavLink>
        )}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          {t('about')}
        </NavLink>
      </div>
      {!!isLoggedIn ? (
        isOwner() && (
          <div>
            <NavLink
              to="/my-articles"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              {t('myArticles')}
            </NavLink>
            <NavLink
              to="/create-article"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              {t('createArticle')}
            </NavLink>
          </div>
        )
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          {t('login')}
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;
