import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { languages, nav_items } from '../../data';
import { CgSelect } from "react-icons/cg";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./MobileNav.css";

export default function MobileNav({ showNav, toggleNav }) {
  const { t } = useTranslation();

  return (
    <>
      <div className={`mobile-nav ${!showNav ? "hide" : null}`}>
        <ul>
          {nav_items.map((item, i) => (
            <li key={i}>
              {item.includes("#") ? (
                <a onClick={() => toggleNav(false)} href={item}>
                  {t(`nav_item_${i + 1}`)}
                </a>
              ) : (
                <Link onClick={() => toggleNav(false)} to={item}>
                  {t(`nav_item_${i + 1}`)}
                </Link>
              )
              }
            </li>
          ))}
        </ul>
        <div>
          <select onChange={e => i18next.changeLanguage(e.target.value)}>
            {languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
          <CgSelect />
        </div>
        <button onClick={() => toggleNav(false)}>
          <RiCloseLine />
        </button>
      </div>
      <div onClick={() => toggleNav(false)} className={`mobile-nav-bg ${!showNav ? "hide" : null}`} />
    </>
  )
}
