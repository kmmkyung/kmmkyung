// cSpell: disable

// starbucks
import project1Logo from '@/assets/images/logo/STARBUCKS.png';
import project1Pc from '@/assets/images/project-01/starbucks_pc.png';
import project1Mobile from '@/assets/images/project-01/starbucks_mobile.png';
import project1StickyVisual from '@/assets/images/project-01/stickyVisual.jpg';
import project1Img01 from '@/assets/images/project-01/starbucks_1.png';
import project1Img02 from '@/assets/images/project-01/starbucks_2.png';
import project1VideoPc from '@/assets/video/project-01/starbucks-pc.mov';
import project1VideoMobile from '@/assets/video/project-01/starbucks-mobile.mov';

// ZORA
import project2Logo from '@/assets/images/logo/ZORA.png';
import project2Pc from '@/assets/images/project-02/zora_pc.png';
import project2Mobile from '@/assets/images/project-02/zora_mobile.png';
import project2StickyVisual from '@/assets/images/project-02/stickyVisual.jpg';
import project2Img01 from '@/assets/images/project-02/zora_1.png';
import project2Img02 from '@/assets/images/project-02/zora_2.png';
import project2Img03 from '@/assets/images/project-02/zora_3.png';
import project2Img04 from '@/assets/images/project-02/zora_4.png';
import project2VideoPc from '@/assets/video/project-02/zora-pc.mov';
import project2VideoMobile from '@/assets/video/project-02/zora-mobile.mov';

// Portfolio
import project3Logo from '@/assets/svg/LOGO_B.svg';

// LO-FI Wines
import project4Logo from '@/assets/svg/LoFi.svg';
import project4Pc from '@/assets/images/project-04/lofi_pc.png';
import project4Mobile from '@/assets/images/project-04/lofi_mobile.png';
import project4StickyVisual from '@/assets/images/project-04/stickyVisual.jpg';
import project4Img01 from '@/assets/images/project-04/lofi_4.png';
import project4Img02 from '@/assets/images/project-04/lofi_5.png';
import project4Img03 from '@/assets/images/project-04/lofi_6.png';
import project4VideoPc from '@/assets/video/project-04/lofi-pc.mov';
import project4VideoMobile from '@/assets/video/project-04/lofi-mobile.mov';


// Dalba
import project5Logo from '@/assets/svg/Dalba/Dalba_B.svg';
import project5Pc from '@/assets/images/project-05/dalba_pc.png';
import project5Mobile from '@/assets/images/project-05/dalba_mobile.png';
import project5StickyVisual from '@/assets/images/project-05/stickyVisual.jpg';

// Disney
import project6Logo from '@/assets/svg/Disney.svg';
import project6Pc from '@/assets/images/project-06/disney_pc.png';
import project6Mobile from '@/assets/images/project-06/disney_mobile.png';
import project6StickyVisual from '@/assets/images/project-06/stickyVisual.jpg';

// Carrot Market
import project7Pc from '@/assets/images/project-07/carrot_pc.png';
import project7Mobile from '@/assets/images/project-07/carrot_mobile.png';
import project7StickyVisual from '@/assets/images/project-07/stickyVisual.jpg';

const imageData = {
  project1: {
    logo: project1Logo,
    stickyVisual: project1StickyVisual,
    pc: project1Pc,
    module: project1Mobile,
    gallery: [
      project1Img01, project1Img02
    ],
    videoPc: project1VideoPc,
    videoMobile: project1VideoMobile
  },
  project2: {
    logo: project2Logo,
    stickyVisual: project2StickyVisual,
    pc: project2Pc,
    module: project2Mobile,
    gallery: [
      project2Img01, project2Img02, project2Img03, project2Img04
    ],
    videoPc: project2VideoPc,
    videoMobile: project2VideoMobile
  },
  project3: {
    logo: project3Logo,
    pc: '',
    module: '',
    gallery: [],
    videoPc: '',
    videoMobile: ''
  },
  project4: {
    logo: project4Logo,
    stickyVisual: project4StickyVisual,
    pc: project4Pc,
    module: project4Mobile,
    gallery: [project4Pc, project4Img01, project4Img02, project4Img03],
    videoPc: project4VideoPc,
    videoMobile: project4VideoMobile
  },
  project5: {
    logo: project5Logo,
    stickyVisual: project5StickyVisual,
    pc: project1Pc,
    module: project1Mobile,
    gallery: [],
    videoPc: project2VideoPc,
    videoMobile: project2VideoMobile
  },
  project6: {
    logo: project6Logo,
    stickyVisual: project6StickyVisual,
    pc: project1Pc,
    module: project1Mobile,
    gallery: [],
    videoPc: project2VideoPc,
    videoMobile: project2VideoMobile
  },
  project7: {
    stickyVisual: project7StickyVisual,
    pc: project1Pc,
    module: project1Mobile,
    gallery: [],
    videoPc: project2VideoPc,
    videoMobile: project2VideoMobile
  },
}

export default imageData