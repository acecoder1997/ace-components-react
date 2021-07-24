import React, {useState, useContext} from "react";
import classnames from 'classnames';
import {MenuContext} from "./index";
import {MenuItemProps} from "./Item";

interface SubMenuProps {
    index?: number;
    title?: string;
    disabled?: boolean;
    className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
    const [open, setOpen] = useState(false)
    const {index, title, className, disabled, children} = props
    const context = useContext(MenuContext)
    const classNames = classnames('ace-menu-item ace-sub-menu', className, {
        'is-active': index === context.index,
        'is-disabled': disabled
    })

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!open)
    }

    let timer: any
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => setOpen(toggle), 200)
    }

    const clickEvent = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {}

    const hoverEvent = context.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
        onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
    } : {}

    const renderChildren = () => {
        const classNames = classnames('ace-sub-menu-content', {
            'open': open
        })
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const displayName = childElement.type.displayName
            if (displayName === 'MenuItem') {
                return childElement
            } else {
                throw new Error('Warning: Menu has a child which is not a MenuItem component.')
            }
        })
        return (
            <ul className={classNames}>
                {childrenComponent}
            </ul>
        )
    }
    return (
        <li key={index} className={classNames} {...hoverEvent}>
            <div className='ace-sub-menu-title' {...clickEvent}>
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
