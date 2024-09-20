// import BeforeAfter from '../../components/beforeAfter/BeforeAfter';
import Banner from './Banner';
// import FeedBack from './FeedBack';
import HelpDetails from './HelpDetails';
import ImageGallery from './ImageGallery';
import INTRODUCE_OURSELVES from './INTRODUCE_OURSELVES';
import OUROUTSTANDING from './OUROUTSTANDING';
import PRICEEXAMPLES from './PRICEEXAMPLES';
import STUDIOCLICK from './STUDIOCLICK';
// import OurREecentWorks from './OurREecentWorks';
// import Services from './Services';
// import Team from './Team';
import WHYCHOOSEUS from './WHYCHOOSEUS';

const Home = () => {
  return (
    <div>
      <Banner/>
      {/* <Services/> */}
      <OUROUTSTANDING/>
      <INTRODUCE_OURSELVES/>
      {/* <Team/> */}
      <PRICEEXAMPLES/>
      <HelpDetails/>
      <ImageGallery/>
      <WHYCHOOSEUS/>
      <STUDIOCLICK/>
      {/* <FeedBack/> */}
      {/* <OurREecentWorks/> */}
    </div>
  )
}

export default Home;