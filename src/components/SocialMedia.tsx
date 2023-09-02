import Image from 'next/image';

import IconeGithub from '../../public/imagens/gitHub.png';
import IconeYouTube from '../../public/imagens/youTube.png';
import IconeTwitter from '../../public/imagens/twiter.png';
import IconeLinkedin from '../../public/imagens/linkedin.png';
import IconeInstagram from '../../public/imagens/instagram.png';


// O componente SocialMedia rederiza os 5 icones das redes sociais
function SocialMedia() {
  return (
    <ul className='flex flex-row flex-wrap justify-center w-[320px]'>
      <li className='w-[20%]'>
        <a href="https://github.com/Null-Kc" target="_blank" rel="noopener noreferrer">
          <Image src={IconeGithub} alt="Ícone do GitHub" />
        </a>
      </li>
      <li className='w-[20%]'>
        <a href="https://www.youtube.com/@null-kc" target="_blank" rel="noopener noreferrer">
          <Image src={IconeYouTube} alt="Ícone do YouTube" />
        </a>
      </li>
      <li className='w-[20%]'>
        <a href="https://www.instagram.com/kurama.dev_/" target="_blank" rel="noopener noreferrer">
          <Image src={IconeInstagram} alt="Ícone do Instagram" />
        </a>
      </li>
      <li className='w-[20%]'>
        <a href="https://twitter.com/Null_Kc" target="_blank" rel="noopener noreferrer">
          <Image src={IconeTwitter} alt="Ícone do Twitter" />
        </a>
      </li>
      <li className='w-[20%]'>
        <a href="https://www.linkedin.com/in/pedro-lucas-macedo-de-moraes/" target="_blank" rel="noopener noreferrer">
          <Image src={IconeLinkedin} alt="Ícone do Linkedin" />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;