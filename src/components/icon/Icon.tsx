interface IconPropsType {
    height?: string
    iconId: string
    className?: string
    width?: string
}

export const Icon = ({ height, iconId, className, width }: IconPropsType) => {
    return (
        <svg
            className={className}
            height={height || '24'}
            width={width || '24'}
        >
            <use href={`#icon-${iconId}`} />
        </svg>
    )
}


