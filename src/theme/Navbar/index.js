import React, {useEffect} from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import {useColorMode} from "@docusaurus/theme-common";
import {useTheme} from "next-themes";
export default function Navbar() {
    const { colorMode, setColorMode } = useColorMode();
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        const htmlRoot = document.documentElement;
        console.log("test", colorMode)
        if (colorMode === "dark") {
            setColorMode(colorMode)
            setTheme(colorMode)

            htmlRoot.classList.add('dark');
        } else {
            setTheme(colorMode)

            htmlRoot.classList.remove('dark');
        }
    }, [colorMode]);

    return (
    <NavbarLayout>
      <NavbarContent />
    </NavbarLayout>
  );
}
