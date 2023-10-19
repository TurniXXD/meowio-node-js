import {
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import styles from './button.module.scss';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import Badge, { BadgeType } from '../Badge';
import { Icons } from '../Icons';

export enum ButtonType {
  Primary = 'primary',
  Upload = 'upload',
}

export enum UploadTarget {
  Image = 'image/*',
  ImagePng = 'image/png',
}

interface UploadButtonProps {
  // I didn't want to bind this upload button to specific purpose
  uploadTarget?: UploadTarget;
  registerOptions?: RegisterOptions;
  name: string;
  fieldProps: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  selectedFileBadge: File | null;
  setSelectedFileBadge: Dispatch<SetStateAction<File | null>>;
}

const Button = ({
  type,
  onClick,
  children,
  textOnly,
  submit,
  uploadButtonProps,
}: {
  type: ButtonType;
  onClick?: () => void;
  children: ReactNode;
  textOnly?: boolean;
  submit?: boolean;
  uploadButtonProps?: UploadButtonProps;
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    file ? uploadButtonProps?.setSelectedFileBadge(file) : uploadButtonProps?.setSelectedFileBadge(null);
  };

  const fieldName = uploadButtonProps ? uploadButtonProps.name : 'file';

  const handleFileClear = () => {
    uploadButtonProps?.setSelectedFileBadge(null);
    uploadButtonProps?.setValue && uploadButtonProps.setValue(fieldName, null);
  };

  return (
    <div className={styles.buttonContainer}>
      <div className={styles.fileInputWrapper}>
        {type === ButtonType.Upload && uploadButtonProps?.fieldProps && (
          <input
            {...uploadButtonProps.fieldProps(
              fieldName,
              uploadButtonProps?.registerOptions
            )}
            {...(uploadButtonProps?.uploadTarget && {
              accept: uploadButtonProps.uploadTarget,
            })}
            type="file"
            onChange={handleFileChange}
          />
        )}
        <button
          className={`${styles.button} ${
            textOnly ? styles.textOnlyButton : styles[type]
          }`}
          {...(onClick && { onClick })}
          {...(submit && { type: 'submit' })}
        >
          {children}
        </button>
      </div>
      {uploadButtonProps?.selectedFileBadge && (
        <div className={styles.badgeWrapper}>
          <Badge
            type={BadgeType.Secondary}
            onClick={handleFileClear}
            icon={Icons.Cancel}
            text={uploadButtonProps.selectedFileBadge.name}
          />
        </div>
      )}
    </div>
  );
};

export default Button;
