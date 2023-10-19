import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import styles from './text-field.module.scss';

export interface ITextField {
  fieldProps: ControllerRenderProps<FieldValues, any>;
  placeholder?: string;
  password?: boolean;
  email?: boolean;
  className?: string;
  textArea?: boolean;
}

export default function TextField(props: ITextField) {
  if (props?.textArea) {
    return (
      <textarea
        className={`${styles.textField} ${props?.className || ''}`}
        {...props.fieldProps}
        {...(props.placeholder && { placeholder: props.placeholder })}
      />
    );
  }

  return (
    <input
      className={`${styles.textField} ${props?.className || ''}`}
      {...props.fieldProps}
      {...(props.placeholder && { placeholder: props.placeholder })}
      type={
        (props.password && 'password') || (props.email && 'email') || 'text'
      }
    />
  );
}
