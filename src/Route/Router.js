import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout";
import HomePage from "../Pages/HomePage";
import KatalogPage from "../Pages/KatalogPage";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/AboutPage";
import AnjayPage from "../Pages/AnjayPage";

const router = createBrowserRouter([
  {
    path: '/', // Root path
    element: <MainLayout />, // Gunakan layout utama
    children: [
      {
        path: '', // Halaman utama
        element: <HomePage />
      },
      {
        path: 'katalog', // Halaman katalog
        element: <KatalogPage />
      },
      {
        path: 'contact', // Halaman kontak
        element: <ContactPage />
      },
      {
        path: 'about', // Halaman tentang
        element: <AboutPage />
      },
      {
        path: 'anjay', // Halaman tentang
        element: <AnjayPage />
      },
    ]
  }
]);

export default router;
