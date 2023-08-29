"use client";

import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styles from './dropdown.module.css'

import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon
} from '@radix-ui/react-icons'
export default function Dropdown() {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
  const [urlsChecked, setUrlsChecked] = React.useState(true)

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <HamburgerMenuIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropDown} sideOffset={5}>
          <DropdownMenu.Item className={styles.ddItem}>
            Radix Complex Dropdown
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.ddItem}>
            New Tab <div className={styles.ddItemRightSlot} >⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.ddItem}>
            New Window <div className={styles.ddItemRightSlot}>⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.ddItem} disabled>
            New Private Window <div className={styles.ddItemRightSlot}>⇧+⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Sub >
            <DropdownMenu.SubTrigger className={styles.ddItem}>
              More Tools
              <div className={styles.ddItemRightSlot}>
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className={styles.dropDownSubMenu}
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Item className={styles.ddItem}>
                  Save Page As… <div className={styles.ddItemRightSlot}>⌘+S</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className={styles.ddItem}>Create Shortcut…</DropdownMenu.Item>
                <DropdownMenu.Item className={styles.ddItem}>Name Window…</DropdownMenu.Item>
                <DropdownMenu.Separator className="DropdownMenu.Separator" />
                <DropdownMenu.Item className={styles.ddItem}>Developer Tools</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.CheckboxItem
            className={styles.ddItem}
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Bookmarks <div className={styles.ddItemRightSlot}>⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            className={styles.ddItem}
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

      
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root >
  )
}
