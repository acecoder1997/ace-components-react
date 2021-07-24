import React, {ReactNode} from 'react';
import classnames from 'classnames';


interface BaseProps {
    type?: 'success' | 'info' | 'warning' | 'error';
    message?: ReactNode;
    closable?: boolean;
    className?: string;
    children?:ReactNode
}

export type AlertProps = Partial<BaseProps>

const Alert: React.FC<AlertProps> = (props) => {
    const {type, message, closable, className, ...restProps} = props
    const classNames = classnames('ace-alert', className, {
        [`ace-alert-${type}`]: type
    })
    return (
        <div className={classNames} {...restProps}>{message}</div>
    )
}

Alert.defaultProps = {
    type: 'info'
}

export default Alert
