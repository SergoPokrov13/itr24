import './SlideMain.css'
import CenterPhotoMain from '../../../../../public/CenterPhotoMain.svg'
import LogoITR24 from '../../../../../public/LogoITR24.svg'
import Image from 'next/image';

function SlideMain() {
    return (
      <div className="slidemain">
        <button className='slidemain__button-download'>Скачать RUSTDESK</button>
        <Image className='slidemain__logo' src={LogoITR24}/>
        <button className='slidemain__button-cabinet'>Личный кабинет</button>
        <Image className='slidemain__photo' src={CenterPhotoMain}/>
        <div className='slidemain__block'>
            <a className='slidemain__contact'>support@itr24.com</a>
            <a className='slidemain__contact'>8 4932 58 76 36</a>
        </div>
      </div>
    );
  }
  
  export default SlideMain;