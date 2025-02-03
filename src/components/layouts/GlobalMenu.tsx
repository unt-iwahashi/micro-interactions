'use client';
import style from './GlobalMenu.module.scss';
import { useState } from 'react';
import Link from 'next/link';

export const GlobalMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const onClickMenuButton = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <>
      <button
        type='button'
        className={`${style.globalMenu_button} ${isOpen ? style.is_open : ''}`}
        onClick={onClickMenuButton}
      >
        <span className={style.globalMenu_button_inner}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav className={`${style.globalMenu} ${isOpen ? style.is_open : ''}`}>
        <div
          className={style.globalMenu_overlay}
          onClick={closeMenu}
        ></div>
        <div className={style.globalMenu_inner}>
          <ul className={style.globalMenu_list}>
            <li>
              <Link href='/'>menu1</Link>
            </li>
            <li>
              <Link href='/'>menu2</Link>
            </li>
            <li>
              <Link href='/'>menu3</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
