import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";

import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import styles from './dropdown.module.css'


export default function NextUIDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button id="basic-button">
          <HamburgerMenuIcon />
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static actions">
        <DropdownItem key="title">NextUI Dropdown</DropdownItem>
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="edit">Edit FIle</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete File 
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
