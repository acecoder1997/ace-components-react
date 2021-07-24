import React, {useState, createContext} from 'react';
import classnames from 'classnames';
import {MenuItemProps} from "./Item";

type Mode = 'vertical' | 'horizontal'

export interface MenuProps {
    mode?: Mode;
    defaultIndex?: number;
    className?: string;
    style?: React.CSSProperties;
    onSelect?: (selectedIndex: number) => void;
}

export interface IMenuContext {
    index?: number;
    mode?: Mode;
    onSelect?: (selectedIndex: number) => void;
}

export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: React.FC<MenuProps> = (props) => {
    const {mode, defaultIndex, className, style, onSelect, children} = props
    const [currentIndex, setIndex] = useState(defaultIndex)
    const handleClick = (index: number) => {
        setIndex(index)
        if (onSelect) onSelect(index)
    }
    const contentProps: IMenuContext = {
        index: currentIndex,
        mode,
        onSelect: handleClick
    }

    const classNames = classnames('ace-menu', className, {
        [`ace-menu-${mode}`]: mode
    })

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childEL = child as React.FunctionComponentElement<MenuItemProps>
            const displayName = childEL.type.displayName
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childEL, {index})
            } else {
                throw new Error('Warning: Menu has a child which is not a MenuItem component.')
            }
        })
    }
    return (
        <MenuContext.Provider value={contentProps}>
            <ul className={classNames} style={style} data-testid='menu'>
                {renderChildren()}
            </ul>
        </MenuContext.Provider>
    )
}

Menu.defaultProps = {
    mode: "horizontal",
    defaultIndex: 0
}

export default Menu
