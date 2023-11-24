import React, {useEffect} from 'react';
import {useColorMode, useThemeConfig} from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';
import styles from './styles.module.css';
import {useTheme} from "next-themes";
export default function NavbarColorModeToggle({className}) {
  const navbarStyle = useThemeConfig().navbar.style;
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const {colorMode, setColorMode} = useColorMode();
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect(() => {
  //   if (colorMode.toString() !==  systemTheme) {
  //     setTheme(systemTheme)
  //   }
  //
  // }, [colorMode, systemTheme, setTheme]);

  function updateColorMode(colorMode) {
    // if (colorMode.toString()!==systemTheme) {
    //   setTheme(colorMode.toString())
    //
    // }

    setColorMode(colorMode)
  }

  if (disabled) {
    return null;
  }
  return (
    <ColorModeToggle
      className={className}
      buttonClassName={
        navbarStyle === 'dark' ? styles.darkNavbarColorModeToggle : undefined
      }
      value={colorMode}
      onChange={updateColorMode}
    />
  );
}
