import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText?: string;
  type: 'text' | 'number' | 'search';
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/* {labelText ? <label htmlFor={id}>{labelText}</label> : ''} */}
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
