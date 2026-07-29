import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {ActorCardSkeleton} from './actorCard/ActorCardSkeleton';

export const CastLineSkeleton = () => {
    return (
        <div>

            <Skeleton
                variant="text"
                width={120}
                height={55}
                sx={{
                    mt: 5,
                    mb: 2,
                }}
            />

            <FlexWrapper gap="24px">
                {Array.from({ length: 6 }).map((_, index) => (
                    <ActorCardSkeleton key={index}/>
                ))}
            </FlexWrapper>

        </div>
    );
};