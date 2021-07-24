import React, {useContext} from 'react';
import {MenuContext} from "./index";
import classnames from 'classnames';

export interface MenuItemProps {
    index?: number;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const context = useContext(MenuContext);
    const {index, disabled, className, style, children} = props
    const classNames = classnames('ace-menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    })
    const handleClick = () => {
        if (!disabled && context.onSelect && typeof index === 'number') {
            context.onSelect(index)
        }
    }
    return (
        <li className={classNames} style={style} onClick={handleClick}>
            {children}
        </li>
    )
}

MenuItem.defaultProps = {
    disabled: false
}
MenuItem.displayName = 'MenuItem'
export default MenuItem
