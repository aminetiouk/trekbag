import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import ItemList from './ItemList';
import Sidebar from './Sidebar';
import ItemContextProvider from '../context/itemContextProvider';

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <ItemContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
