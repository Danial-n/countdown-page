import Icons from './components/Icons';
import Stars from './components/Stars';
import Header from './components/Header';
import Footer from './components/Footer';
import Box from './components/Box';
import Timer from './components/Timer';

function App() {
  return (
    <div className='bg-mostly-black text-white text-center pt-20 md:pt-0 h-screen relative'>
      <Stars />
      <Header />
      <Timer />
      {/* <Box /> */}
      <Footer />
    </div>
  );
}

export default App;
