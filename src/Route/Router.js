import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout";
import HomePage from "../Pages/HomePage";
import KatalogPage from "../Pages/KatalogPage";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/AboutPage";
import DetailProduct from "../Component/DetailProduct";

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
        element: <KatalogPage />,
        children:[
          {
            path: 'detail/:id',
            element: <DetailProduct />
          }
        ]
      },
      {
        path: 'contact', // Halaman kontak
        element: <ContactPage />
      },
      {
        path: 'about', // Halaman tentang
        element: <AboutPage />
      }
    ]
  }
]);

export default router;
