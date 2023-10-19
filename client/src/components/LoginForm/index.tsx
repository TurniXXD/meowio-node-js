import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../auth';
import TextField from '../TextField';
import Button, { ButtonType } from '../Button';
import Card from '../Card';
import { useTranslation } from 'react-i18next';
import styles from './login.module.scss';
import Popup, { PopupType } from '../Popup';
import { useState } from 'react';

const LoginForm = () => {
  const { login } = useAuth();
  const { t } = useTranslation('common');
  const [triggerPopup, setTriggerPopup] = useState<{
    type: PopupType;
    text: string;
  } | null>(null);

  const {
    handleSubmit,
    control,
  } = useForm();

  const onSubmit = (data: any) => {
    try {
      login({
        // There was email field in figma but username in openapi docs, so i just used username
        username: data.email,
        password: data.password,
      });
    } catch (e) {
      setTriggerPopup({
        type: PopupType.Error,
        text: e as string,
      })
    }
  };

  return (
    <>
      <Card className={styles.card}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
          <h1>{t('login')}</h1>
          <div>
            <label>{t('email')}</label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: t('validations.emailRequired'),
                // I would use this to check if the email is valid
                // pattern: {
                //   value: /^\S+@\S+$/i,
                //   message: t('validations.emailInvalid'),
                // },
              }}
              render={({ field }) => (
                <TextField
                  fieldProps={field}
                  placeholder={t('emailPlaceholder')}
                  // And I would set text field as email type
                  // email
                />
              )}
            />
            {/* {errors.email && <span>{errors.email.message}</span>} */}
          </div>

          <div>
            <label>{t('password')}</label>
            <Controller
              name="password"
              control={control}
              rules={{ required: t('validations.passwordRequired') }}
              render={({ field }) => (
                <TextField
                  fieldProps={field}
                  placeholder={t('passwordPlaceholder')}
                  password
                />
              )}
            />
            {/* {errors.password && <span>{errors.password.message}</span>} */}
          </div>

          <Button type={ButtonType.Primary} children={t('login')} submit />
        </form>
      </Card>
      {triggerPopup && (
        <Popup type={triggerPopup.type} text={triggerPopup.text} />
      )}
    </>
  );
};

export default LoginForm;
