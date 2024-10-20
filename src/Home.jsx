import './Home.css';
import TopBar from './TopBar';

function Home() {

  return (
    <>
      <div className='homePageBody'>
        <div className='topbar'>
          <TopBar />
        </div>
        <div className='homePageContent'>
          <div className='textBox'>
            <h3>
              Cornell's first student team dedicated to designing, building
              and launching liquid powered rockets. We compete annually in the FAROUT Tournament in California and
              become a Cornell Engineering Project Team.
            </h3>
          </div>
          <div className='textBox'>
            <h4>We are striving to be the first collegiate team to launch a turbopump fed liquid rocket</h4>
          </div>
          <div className='textBox'>
            <h5>Questions? Contact us at <a href="mailto:cornell.liquidpropulsion@gmail.com">cornell.liquidpropulsion@gmail.com</a></h5>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
