import styles from './Heading.module.css';

type HeadingProps = {
  //   children: string;
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  //   const children = props.children;
  //   const { children } = props;
  return <h1 className={styles.heading}>{children}</h1>;
}
