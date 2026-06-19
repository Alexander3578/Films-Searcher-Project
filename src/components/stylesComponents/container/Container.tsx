import React, {ReactNode} from 'react';
import styles from './Container.module.scss'
import clsx from 'clsx';

type Props = {
    children: ReactNode
    className?: string
}

export const Container = ({children, className}: Props) => {
    return (
        <div className={clsx(className,styles.container)}>
            {children}
        </div>
    );
};

