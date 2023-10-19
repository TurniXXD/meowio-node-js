import './App.scss';
import styles from './styles/global.module.scss';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Articles from './pages/Articles';
import Login from './pages/Login';
import CreateArticle from './pages/CreateArticle';
import MyArticles from './pages/MyArticles';
import EditArticle from './pages/EditArticle';
import Article from './pages/Article';
import Nav from './components/Nav';
import { ProtectedRoute } from './auth';
import { initAxiosInstance } from './api/config';
import { EnumCookies, useCookie } from './auth/cookies';

const App = () => {
  const [authCookie] = useCookie(EnumCookies.Auth, '');
  initAxiosInstance(authCookie && authCookie);

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/articles"
            element={
              <ProtectedRoute>
                <Articles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles/:articleId"
            element={
              <ProtectedRoute>
                <Article />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-article"
            element={
              <ProtectedRoute ownerProtected>
                <CreateArticle />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-article"
            element={
              <ProtectedRoute ownerProtected>
                <EditArticle />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-articles"
            element={
              <ProtectedRoute ownerProtected>
                <MyArticles />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
