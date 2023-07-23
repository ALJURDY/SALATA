import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"
import HomePage from "./pages/HomePage"
import BasketPage from "./pages/BasketPage"
import PaymentPage from "./pages/PaymentPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import ErrorPage from "./pages/ErrorPage"

const AppRouter = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: "/basket",
                    element: <BasketPage />
                },
                {
                    path: "/payment",
                    element: <PaymentPage />
                },
                {
                    path: "/products/:id",
                    loader: ProductDetailsPage,
                    element: <ProductDetailsPage />
                },
                {
                    path: "/payment",
                    element: <PaymentPage />
                }
            ]
        }
    ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default AppRouter