import React from 'react';
// Images
import bmwGIF from '../../assets/1003025_81_95134_9HZU0M0KR.gif';
import logo from '../../assets/Logo.png'
// Styles
import s from './index.module.scss';

export const Logo: React.FC = () => {
    return (
        <div className={s.logo}>
            <div>
                <div className={s.logo__container}>
                    <img 
                        src={bmwGIF}
                        alt='bmw'
                        className={s.logo__image}
                    />
                </div>
                <div>
                    <p>
                        Перша ітерація логотипу BMW,<br />
                        як ми знаємо його сьогодні, дебютувала 5 жовтня 1917 року.<br />
                        BMW виникла у фірми Rapp Motorenwerke GmbH, запозичивши круглу форму та чорне кільце навколо свого логотипу.<br />
                        Центр логотипу — синьо-біла частина, яка залишається впізнаваною й сьогодні — походить від прапора Баварії.<br />
                        Кольори інвертовані, оскільки місцеві торгові марки забороняють використовувати державну символіку тощо на комерційних логотипах.
                    </p>
                    <article className={s.logo__article}>
                        <h1 className={s.logo__article__title}>Спочатку не було потреби в символі BMW</h1>
                        <p className={s.logo__article__text}>Історія назви BMW – Bayerische Motoren Werke або Bavarian Motor Works – сягає 1917 року. BMW виникла в результаті перейменування виробника авіаційних двигунів Rapp Motorenwerke, розташованого в Мюнхені, столиці землі Баварія на півдні Німеччини. Незважаючи на зміну назви компанії, технічне оснащення, активи та робоча сила спочатку залишилися незмінними.</p>
                        <p className={s.logo__article__text}>Коли в липні 1917 року назва BMW була вперше включена в комерційний реєстр, логотипу компанії не було. Подібним чином, у першій рекламі того ж місяця також не було символу чи емблеми BMW. Проте поряд з авіаційними двигунами він показував запланований асортимент продукції: двигуни для автомобілів, сільського господарства та човнів. </p>
                        <p className={s.logo__article__text}>«У перші дні логотип і його значення аж ніяк не були такими присутніми для широкої громадськості, як сьогодні, оскільки у BMW не було кінцевих клієнтів, яких можна було б шукати», — пояснює Фред Якобс. Основним бізнесом було виробництво та обслуговування авіаційних двигунів для ВПС Німеччини.</p>
                    </article>
                </div>
            </div>
            <div className={s.logo__history}>
                <h2 className={s.logo__history__title}>Історя розвитку логотипу</h2>
                <img 
                    src={logo}
                    alt='logo'
                />
            </div>
            <div>
                <article className={s.logo__article}>
                    <h3 className={s.logo__article__title}>Логотип BMW має інверсні баварські кольори</h3>
                    <p className={s.logo__article__text}>Тим не менш, 5 жовтня 1917 року молода фірма отримала фірмовий знак. Цей перший значок BMW, зареєстрований у Німецькому імперському реєстрі торгових марок, зберіг круглу форму старого логотипу Rapp. Зовнішнє кільце символу тепер було обмежене двома золотими лініями та містило літери BMW.</p>
                    <p className={s.logo__article__text}>Баварська земля компанії також мала бути представлена на логотипі компанії. Чверті внутрішнього кола на значку BMW зображені державними кольорами землі Баварія – білим і синім. Але вони знаходяться в зворотному порядку (принаймні, що стосується геральдичних правил, де ви читаєте за годинниковою стрілкою з верхнього лівого кута). Причиною такого зворотного порядку синіх і білих кольорів у логотипі BMW став місцевий закон про товарні знаки того часу, який забороняв використання державних гербів чи інших символів суверенітету на комерційних логотипах.</p>
                </article>
            </div>
            <div>
                <article className={s.logo__article}>
                    <h3 className={s.logo__article__title}>Що означає логотип BMW?</h3>
                    <p className={s.logo__article__text}>Першим ключем до значення логотипу BMW є його кольори: білий і синій є кольорами землі Баварія в Німеччині, батьківщини BMW. Реклама BMW 1929 року зображує емблему BMW разом із чотирма кольоровими квадрантами на пропелері літака, що обертається. Інтерпретація того, що логотип BMW представляє пропелер, збереглася досі.</p>
                </article>
            </div>
            <div>
                <article className={s.logo__article}>
                    <h3 className={s.logo__article__title}>Тож звідки береться міф про пропелер про логотип BMW?</h3>
                    <p className={s.logo__article__text}>Навіть сьогодні багато людей все ще вважають, що логотип BMW зображує обертовий пропелер. Як так? Міф про пропелер BMW з’явився через роки після першого логотипу компанії. У рекламі BMW 1929 року був показаний літак із логотипом BMW у обертовому гвинті. На початку світової економічної кризи реклама намагалася прорекламувати новий авіаційний двигун, який BMW будувала за ліцензією Pratt & Whitney. Інтерпретація гвинта дуже добре вписалася в рекламний імідж молодої компанії, оскільки підкреслювала коріння компанії та її досвід у авіабудуванні.</p>
                </article>
            </div>
            <div>
                <article className={s.logo__article}>
                    <h3 className={s.logo__article__title}>Логотип BMW: значення та історія?</h3>
                    <p className={s.logo__article__text}>Таким чином, історія логотипу BMW заснована на легенді – легенді, яка живе й сьогодні. «Довгий час BMW докладала небагато зусиль, щоб виправити міф про те, що значок BMW — це пропелер», — пояснює Фред Якобс з BMW Group Classic. Тож, на думку експерта, дотримуватись історії про те, що емблема BMW – це пропелер, було б не зовсім неправильним. Проте те, що в логотипі компанії BMW є пропелер, не зовсім правда. Постійне повторення перетворило це пояснення на міський міф, що саморозповсюджується. «Це тлумачення було звичним протягом 90 років, тому тим часом воно набуло певного обґрунтування», — пояснює Якобс.</p>
                </article>
            </div>
        </div>
    );
};
