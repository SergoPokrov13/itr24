import './SlideMain.css'
import CenterPhotoMain from '../../../img/CenterPhotoMain.svg'
import LogoITR24 from '../../../img/LogoITR24.svg'

function SlideMain() {
    return (
      <div className="slidemain">
        <button className='slidemain__button-download'>Скачать RUSTDESK</button>
        <img className='slidemain__logo' src={LogoITR24}></img>
        <button className='slidemain__button-cabinet'>Личный кабинет</button>
        <img className='slidemain__photo' src={CenterPhotoMain}></img>
        <div className='slidemain__block'>
            <a className='slidemain__contact'>support@itr24.com</a>
            <a className='slidemain__contact'>8 4932 58 76 36</a>
        </div>
      </div>
    );
  }
  
  export default SlideMain;