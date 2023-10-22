import './SlideCompany.css'


function SlideCompany() {
    return (
      <div className="slidecompany">
        <div className='slidecompany__block_link'>
            <div className='slidecompany__logo'></div>
            <a className='slidecompany__link'>Золотой партнер<br/>Битрикс 24</a>
        </div>
        <div className='slidecompany__block'>
            <p className='slidecompany__title'>О компании</p>
            <p className='slidecompany__subtitle'>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <button className='slidecompany__button-link'>Скачать презентацию</button>
            <ul className="slidecompany__list">
              <li className='slidecompany__item'>
              </li>
              <li className='slidecompany__item'>
              </li>
              <li className='slidecompany__item'>
              </li>
              <li className='slidecompany__item'>
              </li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default SlideCompany;