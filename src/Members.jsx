import React, { useState, useEffect, useRef } from 'react';
import './Members.css';

function Members() {
  const [currentStage, setCurrentStage] = useState(0);
  const sections = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.current.indexOf(entry.target);
          setCurrentStage(index);
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, { threshold: 0.1 });

    const validSections = sections.current.filter(section => section !== null);

    validSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      validSections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="progress-bar">
        {sections.current.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentStage ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="memberOverview">
        <div
          className="section"
          ref={(el) => sections.current[0] = el}
        >
          <div className="text-photo-container">
            <div className="textIntro">
              <h1>Meet The Team</h1>
              <div className="statement">
                <p>
                  Liquid Propulsion at Cornell (LPC) is a newly founded undergraduate group at
                  Cornell University interested in the research and development of liquid rockets. We seek to provide meaningful opportunities for applied learning to our 28 team members across subteams focused on propulsion, structures, electrical, and business.
                </p>
              </div>
            </div>

            <div className="team_photo">
              <img src="team_photo.jpeg" alt="Team" />
              <p className="imageCaption">The LPC Team at the inaugural general meeting</p>
            </div>
          </div>
          <div className='scrollText'>
            Scroll to learn more about the team!
          </div>
        </div>

        <div
          className="section full-height-section"
          ref={(el) => sections.current[1] = el}
        >
          <h1 className='teamName'>Team Leads</h1>
          <div className='picGrid'>
            <div className='pic'>
              <img src='LPC_Carson.jpg' />
              <p>Carson Wolber</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Carson Wolber</p>
                  <p>Major: Computer Science and Economics</p>
                  <p>Graduation Year: 2026</p>
                  <p>Email: <a href="mailto:ctw54@cornell.edu">ctw54@cornell.edu </a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Ahanaf.jpg' />
              <p>Ahanaf Zaman</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Ahanaf Zaman</p>
                  <p>Major: Mechanical Engineering</p>
                  <p>Graduation Year: 2028</p>
                  <p>Email: <a href="mailto:az476@cornell.edu">az476@cornell.edu </a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Derek.png' />
              <p>Derek Zhang</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Derek Zhang</p>
                  <p>Major: Mechanical Engineering</p>
                  <p>Graduation Year: 2026</p>
                  <p>Email: <a href="mailto:dbz7@cornell.edu">dbz7@cornell.edu</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div
          className="section full-height-section"
          ref={(el) => sections.current[2] = el}
        >
          <h1 className='teamName'>Propulsion</h1>
          <div className='picGrid'>


            <div className='pic'>
              <img src='LPC_Ahanaf.jpg' />
              <p>Ahanaf Zaman</p>
              <p className='subteamLeadTitle'>Subteam Lead</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Ahanaf Zaman</p>
                  <p>Major: Mechanical Engineering</p>
                  <p>Graduation Year: 2028</p>
                  <p>Email: <a href="mailto:az476@cornell.edu">az476@cornell.edu </a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Derek.png' />
              <p>Derek Zhang</p>
              <p className='subteamLeadTitle'>Subteam Lead</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Derek Zhang</p>
                  <p>Major: Mechanical Engineering</p>
                  <p>Graduation Year: 2026</p>
                  <p>Email: <a href="mailto:dbz7@cornell.edu">dbz7@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Brian.jpg' />
              <p>Brian Lin</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Brian Lin</p>
                  <p>Major: Mechanical Engineering</p>
                  <p>Graduation Year: 2028</p>
                  <p>Email: <a href="mailto:bl766@cornell.edu">bl766@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Jackie.jpg' />
              <p>Jacquelyn Monahan</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Jacquelyn Monahan</p>
                  <p>Major: Mechanical Engineering</p>
                  <p>Graduation Year: 2028</p>
                  <p>Email: <a href="mailto:jm2875@cornell.edu">jm2875@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Kimari.jpg' />
              <p>Kimari Jackson</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Kimari Jackson</p>
                  <p>Major: Mechanical Engineering</p>
                  <p>Graduation Year: 2025</p>
                  <p>Email: <a href="mailto:kdj33@cornell.edu">kdj33@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Peter.jpg' />
              <p>Peter Nguyen</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Peter Nguyen</p>
                  <p>Major: Mechanical Engineering</p>
                  <p>Graduation Year: 2028</p>
                  <p>Email: <a href="mailto:ptn28@cornell.edu">ptn28@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Wasif.jpg' />
              <p>Wasif Atcha</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Wasif Atcha</p>
                  <p>Major: Mechanical Engineering</p>
                  <p>Graduation Year: 2028</p>
                  <p>Email: <a href="mailto:wa79@cornell.edu">wa79@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_William.jpg' />
              <p>William Liaw</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>William Liaw</p>
                  <p>Major: Applied Engineering Physics and Computer Science</p>
                  <p>Graduation Year: 2027</p>
                  <p>Email: <a href="mailto:wjl86@cornell.edu">wjl86@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Xia.jpg' />
              <p>Xia Yan Zhao</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Xiayan Zhao</p>
                  <p>Major: Mechanical Engineering</p>
                  <p>Graduation Year: 2027</p>
                  <p>Email: <a href="mailto:xz834@cornell.edu">xz834@cornell.edu</a></p>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div className="section full-height-section" ref={(el) => sections.current[3] = el}>
          <h1 className='teamName'>Structures</h1>
          <div className='picGrid'>

            <div className='pic'>
              <img src='LPC_Matt.jpg' />
              <p>Matt Shen</p>
              <p className='subteamLeadTitle'>Subteam Lead</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Matt Shen</p>
                  <p>Major: Applied Engineering Physics</p>
                  <p>Graduation Year: 2026</p>
                  <p>Email: <a href="mailto:mls538@cornell.edu">mls538@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Andrea.jpg' />
              <p>Andrea Reina</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Andrea Reina</p>
                  <p>Major: Mechanical Engineering</p>
                  <p>Graduation Year: 2026</p>
                  <p>Email: <a href="mailto:agr82@cornell.edu">agr82@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Andy.jpg' />
              <p>Andy Yang</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Andy Yang</p>
                  <p>Major: Math and Physics</p>
                  <p>Graduation Year: 2027</p>
                  <p>Email: <a href="mailto:hy586@cornell.edu">hy586@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Jonathan.jpg' />
              <p>Jonathan Lee</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Jonathan Lee</p>
                  <p>Major: Applied Engineering Physics</p>
                  <p>Graduation Year: 2026</p>
                  <p>Email: <a href="mailto:jjl335@cornell.edu">jjl335@cornell.edu</a></p>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className="section full-height-section" ref={(el) => sections.current[4] = el}>
          <h1 className='teamName'>Electrical</h1>
          <div className='picGrid'>

            <div className='pic'>
              <img src='LPC_Bryan.jpg' />
              <p>Bryan Kim</p>
              <p className='subteamLeadTitle'>Subteam Lead</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Bryan Kim</p>
                  <p>Major: Mechanical Engineering</p>
                  <p>Graduation Year: 2027</p>
                  <p>Email: <a href="mailto:bjk228@cornell.edu">bjk228@cornell.edu</a></p>
                </div>
              </div>
            </div>


            <div className='pic'>
              <img src='LPC_Mark.jpg' />
              <p>Mark Lohatepanont</p>
              <p className='subteamLeadTitle'>Subteam Lead</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Mark Lohatepanont</p>
                  <p>Major: Mechanical Enigneering PhD</p>
                  <p>Email: <a href="mailto:ml2828@cornell.edu">ml2828@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Emma.jpg' />
              <p>Emma Li</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Emma Li</p>
                  <p>Major: Computer Science</p>
                  <p>Graduation Year: 2026</p>
                  <p>Email: <a href="mailto:ejl258@cornell.edu">ejl258@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Henry.jpg' />
              <p>Henry Calderon</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Henry Calderon</p>
                  <p>Major: Electrical and Computer Engineering</p>
                  <p>Graduation Year: 2026</p>
                  <p>Email: <a href="mailto:hcc54@cornell.edu">hcc54@cornell.edu</a></p>
                </div>
              </div>
            </div>


            <div className='pic'>
              <img src='LPC_Irene.jpg' />
              <p>Irene Xu</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Irene Xu</p>
                  <p>Major: Electrical and Computer Engineering</p>
                  <p>Graduation Year: 2028</p>
                  <p>Email: <a href="mailto:iax2@cornell.edu">iax2@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Kyle.jpg' />
              <p>Kyle Nadel</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Kyle Nadel</p>
                  <p>Major: Electrical and Computer Engineering</p>
                  <p>Graduation Year: 2028</p>
                  <p>Email: <a href="mailto:kdn35@cornell.edu">kdn35@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Xinrong.jpg' />
              <p>Xinrong Zhu</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Xinrong Zhu</p>
                  <p>Major: Electrical and Computer Engineering</p>
                  <p>Graduation Year: 2028</p>
                  <p>Email: <a href="mailto:xz875@cornell.edu">xz875@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Yan.jpg' />
              <p>Yanchun Lai</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Yanchun Lai</p>
                  <p>Major: Computer Science</p>
                  <p>Graduation Year: 2028</p>
                  <p>Email: <a href="mailto:yl3796@cornell.edu">yl3796@cornell.edu</a></p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="section full-height-section" ref={(el) => sections.current[5] = el}>
          <h1 className='teamName'>Business</h1>
          <div className='picGrid'>

            <div className='pic'>
              <img src='LPC_Carson.jpg' />
              <p>Carson Wolber</p>
              <p className='subteamLeadTitle'>Subteam Lead</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Carson Wolber</p>
                  <p>Major: Computer Science and Economics</p>
                  <p>Graduation Year: 2026</p>
                  <p>Email: <a href="mailto:ctw54@cornell.edu">ctw54@cornell.edu </a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Ana.jpg' />
              <p>Ana Mahuad</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Ana Mahuad</p>
                  <p>Major: Material Science</p>
                  <p>Graduation Year: 2028</p>
                  <p>Email: <a href="mailto:acm363@cornell.edu">acm363@cornell.edu</a></p>
                </div>
              </div>
            </div>

            <div className='pic'>
              <img src='LPC_Anu.jpg' />
              <p>Anurag Koyyada</p>
              <div className='picOverlay'>
                <div className='extraInfo'>
                  <p>Anurag Koyyada</p>
                  <p>Major: Law School</p>
                  <p>Email: <a href="mailto:ak2542@cornell.edu">ak2542@cornell.edu</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Members;
