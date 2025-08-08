// cSpell: disable

// starbucks
import project1Logo from '@/assets/images/logo/STARBUCKS.png';
import project1Pc from '@/assets/images/project-01/starbucks_pc.png';
import project1Mobile from '@/assets/images/project-01/starbucks_mobile.png';
import project1StickyVisual from '@/assets/images/project-01/stickyVisual.jpg';
import project1VideoPc from '@/assets/video/project-01/starbucks-pc.mov';
import project1VideoMobile from '@/assets/video/project-01/starbucks-mobile.mov';
import project1Img01 from '@/assets/images/project-01/starbucks_1.png';
import project1Img02 from '@/assets/images/project-01/starbucks_2.png';

// ZORA
import project2Logo from '@/assets/images/logo/ZORA.png';
import project2Pc from '@/assets/images/project-02/zora_pc.png';
import project2Mobile from '@/assets/images/project-02/zora_mobile.png';
import project2StickyVisual from '@/assets/images/project-02/stickyVisual.jpg';

// Portfolio
import project3Logo from '@/assets/svg/LOGO_B.svg';

// LO-FI Wines
import project4Logo from '@/assets/svg/LoFi.svg';
import project4Pc from '@/assets/images/project-04/lofi_pc.png';
import project4Mobile from '@/assets/images/project-04/lofi_mobile.png';
import project4StickyVisual from '@/assets/images/project-04/stickyVisual.jpg';


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
    pc: project1Pc,
    module: project1Mobile,
    gallery: [
      project2Pc, project2Mobile
    ]
  },
  project3: {
    logo: project3Logo,
    pc: project1Pc,
    module: project1Mobile,
    gallery: [
    ]
  },
  project4: {
    logo: project4Logo,
    stickyVisual: project4StickyVisual,
    pc: project1Pc,
    module: project1Mobile,
    gallery: [
      project4Pc, project4Mobile
    ]
  },
  project5: {
    logo: project5Logo,
    stickyVisual: project5StickyVisual,
    pc: project1Pc,
    module: project1Mobile,
    gallery: [
      project5Pc, project5Mobile
    ]
  },
  project6: {
    logo: project6Logo,
    stickyVisual: project6StickyVisual,
    pc: project1Pc,
    module: project1Mobile,
    gallery: [
      project6Pc, project6Mobile
    ]
  },
  project7: {
    stickyVisual: project7StickyVisual,
    pc: project1Pc,
    module: project1Mobile,
    gallery: [
      project7Pc, project7Mobile
    ]
  },
}

export default imageData