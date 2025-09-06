import React from 'react'
import styles from './DirectQuery.module.scss';
import { Wrapper } from '../Wrapper/Wrapper';

interface Props {
  heading: string | React.ReactNode;
  children: React.ReactNode;
  alignLeft?: boolean;
}

export const DirectQuery = ({ heading, children, alignLeft }: Props) => {
  return (
    <section className={`${styles.section} ${alignLeft?styles['section--alignLeft']:''}`}>
        <Wrapper className={styles.wrapper}>
            <h2>{heading}</h2>
            <p>{children}</p>
        </Wrapper>
    </section>
  )
}
