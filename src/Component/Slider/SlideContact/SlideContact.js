import './SlideContact.css'


function SlideContact() {
    return (
      <div className="slidecontact">
        <div className='slidecontact__block'>
            <p className='slidecontact__title'>О компании</p>
            <p className='slidecontact__subtitile'>Свяжитесь с нами</p>
            <p className='slidecontact__text'>Звоните, пишите,<br/>подписывайтесь в соцсетях</p>
            <ul className="slidecontact__list">
              <li className='slidecontact__item'>
                <p className='slidecontact__item_title'>E-mail:</p>
                <p className='slidecontact__item_subtitle'>8 800 555 35 35</p>
              </li>
              <li className='slidecontact__item'>
                <p className='slidecontact__item_title'>Номер телефона: </p>
                <p className='slidecontact__item_subtitle'>+7 (4932) 58 76 36</p>
              </li>
              <li className='slidecontact__item'>
                <p className='slidecontact__item_title'>Наш адрес:</p>
                <p className='slidecontact__item_subtitle'>153000 Иваново, ул. Бубнова, д. 40А, БЦ "ПАРУС", офис 605</p>
              </li>
            </ul>
            <div className='slidecontact__block-icon'>
                <button href='' className='slidecontact__icon' id='telegram'></button>
                <button href='' className='slidecontact__icon' id='vk'></button>
            </div>
        </div>
      </div>
    );
  }
  
  export default SlideContact;