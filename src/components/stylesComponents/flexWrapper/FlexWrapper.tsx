import React from 'react';

type Props = React.ComponentProps<'div'> & {
    children: React.ReactNode
    className?: string
    justify?: React.CSSProperties['justifyContent']
    align?: React.CSSProperties['alignItems']
    direction?: React.CSSProperties['flexDirection']
    gap?: string
    wrap?: React.CSSProperties['flexWrap']
}

export const FlexWrapper = ({
                                children,
                                className,
                                justify = 'flex-start',
                                align = 'stretch',
                                direction = 'row',
                                gap = '0',
                                wrap = 'nowrap',
                                ...rest
                            }: Props) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: justify,
            alignItems: align,
            flexDirection: direction,
            flexWrap: wrap,
            gap,
        }} {...rest} className={className}>
            {children}
        </div>
    );
};

