import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styles from './dropdown.module.css'

import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon
} from '@radix-ui/react-icons'

export default function DropdownSimple() {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <HamburgerMenuIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className={styles.dropDown} sideOffset={5}>
        <DropdownMenu.Item className={styles.ddItem}>
          Radix simple dropdown <div className={styles.ddItemRightSlot} >⌘+N</div>
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
      </DropdownMenu.Content>
    </DropdownMenu.Root >
  )
}
