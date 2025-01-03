import React from 'react'
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // This is used to route between multiple pages withour refreshing
import Home from './Components/Home'
import About from './Components/about'
import Contact from './Components/Contact'
import Faq from './Components/Faq'
import Blog from './Components/Blog'
import Testimonial from './Components/Testimonial'
import Service from './Components/service'
import Footer from './Components/Footer'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/', //This is how we make multiple paths
      element:<> <Navbar/> <Home/></>
    },
    {
      path:'/About',
      element:<> <Navbar/> <About/></>

    },
    {
      path:'/Contact',
      element:<><Navbar/> <Contact/> </>
    },
    {
      path:'/Faq',
      element:<> <Navbar/> <Faq/> </>
    },
    {
      path:'/Blog',
      element:<> <Navbar/> <Blog/> </>
    },
    {
      path:'/Testimonial',
      element:<> <Navbar/> <Testimonial/> </>
    },
    {
      path:'/Service',
      element:<> <Navbar/> <Service/> </>
    }
])
  return (
    <div>
      
      <RouterProvider router={router}/> 
      <Footer/>
    </div>
  )
}

export default App