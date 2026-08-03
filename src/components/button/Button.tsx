import { ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef } from 'react'

import s from './Button.module.scss'
import {Icon} from '../icon';


type InferType<T> = T extends ElementType<infer U> ? U : never

export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T
    buttonImg?: 'buttonIcon' | 'trash' | 'search'
    isFullWidth?: boolean
    isImg?: boolean
    variant?: 'primary' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
    <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: ForwardedRef<InferType<T>>) => {
        const {
            as: Component = 'button',
            buttonImg = 'buttonIcon',
            children,
            className,
            isFullWidth,
            isImg,
            variant = 'primary',
            size = 'sm',
            ...rest
        } = props

        return (
            <Component
                className={`${s[variant]} ${isFullWidth ? s.fullWidth : ''} ${s[size]} ${s.button} ${className}`}
                ref={ref}
                {...rest}
            >
        <span className={s.buttonContent}>
          {isImg && (
              <Icon
                  height={'24px'}
                  iconId={`${buttonImg}`}
                  width={'24px'}
              />
          )}
            {children}
        </span>
            </Component>
        )
    }
)