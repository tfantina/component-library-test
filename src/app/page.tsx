"use client";

import * as React from 'react'
import { NextUIProvider } from "@nextui-org/react"
import Dropdown from './components/Dropdown'
import DropdownSimple from './components/DropdownSimple'
import NextUIDropdown from './components/NextUIDropdown'
import MuiDropDown from './components/muiDropDown'
import BootstrapDropDown from './components/BootstrapDropDown';
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <NextUIProvider>
      <h1 className={`mb-3 text-2xl font-semibold text-emerald-600`}>
        Exprements with different libraries
      </h1>
      <div className={styles.dropdownContainer} >
        <Dropdown />
        <DropdownSimple />
        <NextUIDropdown />
        <MuiDropDown />
        <BootstrapDropDown />
      </div>
    </NextUIProvider>
  )
}
