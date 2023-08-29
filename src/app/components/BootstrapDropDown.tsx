import Dropdown from 'react-bootstrap/Dropdown';
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export default function BootstrapDropDown() {
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                <HamburgerMenuIcon />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Bootstrap Dropdown</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}