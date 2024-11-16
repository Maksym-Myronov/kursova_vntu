import React from 'react';
// Images
import companyLogo from '../../assets/10.png';
import bmwGroup from '../../assets/NEW_BMW_Group_Press.jpg';
import motorcycle from '../../assets/1.png';
// Styles
import s from './index.module.scss';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
    return (
        <div className={s.home}>
            <div className={s.home__container}>
                <div className={s.home__container__block}>
                    <Link to='logo'>
                        <img 
                            src={bmwGroup}
                            alt='bmwGroup'
                            className={s.home__container__block__image}
                        />
                    </Link>
                    <p className={s.home__container__text}>
                        <span>Логотип BMW</span> <br />
                        Логотип BMW є одним із найвпізнаваніших у світі,<br />
                        символізуючи надійність, інновації та спортивний дух.<br />
                        Він відображає багаторічну спадщину компанії та її прихильність до якості та передових технологій.
                        <Link to='logo'>
                            {' '}
                            <span className={s.home__container__span}>
                                Детальніше про Логотип.
                            </span>
                        </Link>
                    </p>
                </div>
                <div className={s.home__container__block}>
                    <Link to='cars'>
                        <img 
                            src={companyLogo} 
                            alt='companyLogo' 
                            className={s.home__container__block__image}
                        />
                    </Link>
                    <p className={s.home__container__text}>
                        <span>Автомобілі BMW</span> <br />
                        BMW пропонує широкий асортимент преміальних автомобілів,<br /> 
                        що поєднують елегантний дизайн, потужні двигуни та найновіші інновації у світі мобільності.<br /> 
                        Кожна модель розроблена для забезпечення максимального комфорту та захоплюючого водіння.
                        <Link to='cars'>
                            {' '}
                            <span className={s.home__container__span}>
                                Детальніше про Автомобілі.
                            </span>
                        </Link>
                    </p>
                </div>
                <div className={s.home__container__block}>
                    <Link to='motorcycle'>
                        <img 
                            src={motorcycle}
                            alt='motorcycle'
                            className={s.home__container__block__image}
                        />
                    </Link>
                    <p className={s.home__container__text}>
                        <span>Мотоцикли BMW Motorrad</span> <br />
                        BMW Motorrad є синонімом свободи на дорогах.<br />
                        Мотоцикли BMW поєднують у собі передові технології,
                        безпеку та неперевершену потужність, щоб кожна подорож була не просто поїздкою, а справжньою пригодою.
                        <Link to='motorcycle'>
                            {' '}
                            <span className={s.home__container__span}> 
                                Детальніше про Мотоцикли BMW Motorrad.
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
