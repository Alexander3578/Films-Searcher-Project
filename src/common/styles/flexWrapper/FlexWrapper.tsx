import React from 'react';

type Props = React.ComponentProps<'div'> & {
    children: React.ReactNode
    className?: string
    justify?: React.CSSProperties['justifyContent']
    align?: React.CSSProperties['alignItems']
    direction?: React.CSSProperties['flexDirection']
    gap?: string
}

export const FlexWrapper = ({
                                children,
                                className,
                                justify = 'flex-start',
                                align = 'stretch',
                                direction = 'row',
                                gap = '0',
                                ...rest
                            }: Props) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: justify,
            alignItems: align,
            flexDirection: direction,
            gap,
        }} {...rest} className={className}>
            {children}
        </div>
    );
};

