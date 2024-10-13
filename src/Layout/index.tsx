import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// Styles
import s from './index.module.scss';

export const Layout: React.FC = () => {
    return (
        <div className={s.layout}>
            <div className={s.layout__container}>
                <ul className={s.layout__ul}>
                    <Link to='/kursova_vntu/'>
                        <li>Home</li>
                    </Link>
                    <Link to='logo'>
                        <li>Logo</li>
                    </Link>
                    <Link to='cars'>
                        <li>Cars</li>
                    </Link>
                    <Link to='motorcycle'>
                        <li>Motorcycle</li>
                    </Link>
                </ul>
                <Outlet />
            </div>
        </div>
    );
};
