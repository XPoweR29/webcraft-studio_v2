import React from 'react'
import styles from './DirectQuery.module.scss';
import { Wrapper } from '../Wrapper/Wrapper';

export const DirectQuery = ({ heading, children }: {heading: string; children: React.ReactNode}) => {
  return (
    <section className={styles.section}>
        <Wrapper className={styles.wrapper}>
            <h2>{heading}</h2>
            <p>{children}</p>
        </Wrapper>
    </section>
  )
}
