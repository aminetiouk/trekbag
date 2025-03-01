import BackgroundHeading from "./BackgroundHeading"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <Sidebar />
      </main>

      <Footer/>
    </>
  )
}

export default App
