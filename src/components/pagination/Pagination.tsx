import {clsx} from 'clsx'

import s from './pagination.module.scss'
import {usePagination} from './usePagination';
import {Icon} from '../icon';


type PaginationConditionals =
    | {
    onPerPageChange: (itemPerPage: string) => void
    perPage: string
    perPageOptions: string[]
}
    | {
    onPerPageChange?: never
    perPage?: null
    perPageOptions?: never
}

export type PaginationProps = {
    count: number
    onChange: (page: number) => void
    onPerPageChange?: (itemPerPage: string) => void
    page: number
    perPage?: null | string
    perPageOptions?: string[]
    siblings?: number
} & PaginationConditionals

const classNames = {
    container: s.container,
    dots: s.dots,
    icon: s.icon,
    item: s.item,
    pageButton(selected?: boolean) {
        return clsx(this.item, selected && s.selected)
    },
    root: s.root,
    select: s.select,
    selectBox: s.selectBox,
}

export const Pagination = ({
                               count,
                               onChange,
                               page,
                               siblings,
                           }: PaginationProps) => {
    const {
        handleMainPageClicked,
        handleNextPageClicked,
        handlePreviousPageClicked,
        isFirstPage,
        isLastPage,
        paginationRange,
    } = usePagination({
        count,
        onChange,
        page,
        siblings,
    })

    return (
        <div className={classNames.root}>
            <div className={classNames.container}>
                <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />

                <MainPaginationButtons
                    currentPage={page}
                    onClick={handleMainPageClicked}
                    paginationRange={paginationRange}
                />

                <NextButton disabled={isLastPage} onClick={handleNextPageClicked} />
            </div>
        </div>
    )
}

type NavigationButtonProps = {
    disabled?: boolean
    onClick: () => void
}

type PageButtonProps = NavigationButtonProps & {
    page: number
    selected: boolean
}

const Dots = () => {
    return <span className={classNames.dots}>&#8230;</span>
}
const PageButton = ({ disabled, onClick, page, selected }: PageButtonProps) => {
    return (
        <button
            className={classNames.pageButton(selected)}
            disabled={selected || disabled}
            onClick={onClick}
        >
            {page}
        </button>
    )
}
const PrevButton = ({ disabled, onClick }: NavigationButtonProps) => {
    return (
        <button className={classNames.item} disabled={disabled} onClick={onClick}>
            <Icon height={'20'} iconId={'arrow-left'} width={'20'} />
        </button>
    )
}

const NextButton = ({ disabled, onClick }: NavigationButtonProps) => {
    return (
        <button className={classNames.item} disabled={disabled} onClick={onClick}>
            <Icon height={'20'} iconId={'arrow-right'} width={'20'} />
        </button>
    )
}

type MainPaginationButtonsProps = {
    currentPage: number
    onClick: (pageNumber: number) => () => void
    paginationRange: (number | string)[]
}

const MainPaginationButtons = ({
                                   currentPage,
                                   onClick,
                                   paginationRange,
                               }: MainPaginationButtonsProps) => {
    return (
        <>
            {paginationRange.map((page: number | string, index) => {
                const isSelected = page === currentPage

                if (typeof page !== 'number') {
                    return <Dots key={index} />
                }

                return <PageButton key={index} onClick={onClick(page)} page={page} selected={isSelected} />
            })}
        </>
    )
}


