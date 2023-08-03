import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"
import HomePage from "./pages/HomePage/HomePage"
import BasketPage from "./pages/BasketPage/BasketPage"
import PaymentPage from "./pages/PaymentPage/PaymentPage"
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import SummaryPage from "./pages/SummaryPage/SummaryPage"

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
                    element: <ProductDetailsPage />,
                },
                {
                    path: "/summary",
                    element: <SummaryPage />
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