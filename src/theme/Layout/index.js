import React, {useEffect} from 'react';
import Layout from '@theme-original/Layout';
import {ThemeProvider} from "next-themes";
import useSyncTailwindDarkMode from "../../hooks/useSyncTailwindDarkMode";
import {useColorMode} from "@docusaurus/theme-common";

export default function LayoutWrapper(props) {
    useSyncTailwindDarkMode();


    return (
        <ThemeProvider attribute="class">

      <Layout {...props} />

        </ThemeProvider>
  );
}
