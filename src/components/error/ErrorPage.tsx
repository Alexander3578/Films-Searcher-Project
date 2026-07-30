import React from 'react';
import styles from './ErrorPage.module.scss'
import {useNavigate} from 'react-router';
import {Container} from '../stylesComponents/container/Container';
import {Button} from '../button';
import {FlexWrapper} from '../stylesComponents/flexWrapper/FlexWrapper';

export const ErrorPage = () => {

    const navigate = useNavigate()
    const onBackHandler = () => {
        navigate('/main')
    }

    return (
        <section className={styles.errorPage}>
            <Container className={styles.errorContainer}>
                <Button variant={'secondary'}
                        className={styles.backBtn}
                        onClick={onBackHandler}>
                    Main Page
                </Button>
                <FlexWrapper direction={'column'}
                             justify={'center'}
                             align={'center'}>
                    <h1 className={styles.title}>404</h1>
                    <h2 className={styles.subtitle}>page not found</h2>
                </FlexWrapper>
            </Container>
        </section>
    );
};

