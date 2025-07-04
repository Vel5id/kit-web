import React from 'react';
// import treeImage from '../../images/tree.webp'; // Импортируем изображение, если понадобится
import './SubmitSection.css';

const SubmitSection = () => {
  return (
    <div className="submit-section-container" style={{display:"flex",alignItems:"center", alignContent:"center"}}>
      <section className="registration-section">
        <div className="registration-image-wrapper">
          {/* Здесь можно разместить <img src={treeImage} ... />, если потребуется */}
          <p className="image-placeholder">img</p>
        </div>
        <div className="registration-content-container">
          <div className="registration-headline">
            Присоединяйтесь к <br />
            150+ мероприятиям в год!<br />
            
          </div>
          <div className="registration-form-content">
            Получите ценнейший опыт, поддержку от <br/> единомышленников и новые деловые контакты
            <input
              type="text"
              name="name"
              placeholder="Имя"
              required
              className="registration-form-input"
            />
            <input
              type="text"
              name="phone"
              placeholder="Телефон"
              required
              className="registration-form-input"
            />
            <input
              type="text"
              name="company"
              placeholder="Название компании"
              required
              className="registration-form-input"
            />
            <select
              name="activity"
              required
              defaultValue=""
              className="registration-form-input"
            >
              <option value="" disabled>
                Вид деятельности
              </option>
              <option value="Строительство">Строительство</option>
              <option value="Логистика">Логистика</option>
              <option value="Экспортеры">Экспортеры</option>
              <option value="Образование">Образование</option>
              <option value="Здравоохранение">Здравоохранение</option>
              <option value="HORECA">HORECA</option>
              <option value="Консалтинг">Консалтинг</option>
              <option value="IT">IT</option>
              <option value="Прочие услуги">Прочие услуги</option>
            </select>
            <button type="submit" className="registration-submit-btn">
              Отправить
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmitSection;
