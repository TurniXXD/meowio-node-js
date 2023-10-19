import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import Button, { ButtonType, UploadTarget } from '../Button';
import styles from './create-article.module.scss';
import TextField from '../TextField';
import { useState } from 'react';
import Popup, { PopupType } from '../Popup';
import { useAxios } from '../../api/config';
import { GlobalService } from '../../api';

const CreateArticleForm = () => {
  const { t } = useTranslation('articles');
  const { t: tCommon } = useTranslation('common');
  const axios = useAxios();

  const [triggerPopup, setTriggerPopup] = useState<{
    type: PopupType;
    text: string;
  } | null>(null);
  // Hook in parent for the ability to set the badge to null
  const [selectedFileBadge, setSelectedFileBadge] = useState<File | null>(null);

  const {
    handleSubmit,
    register,
    control,
    setValue,
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      if (!data.image[0]) {
        throw new Error();
      }

      const formData = new FormData();
      formData.append('image', data.image[0]);

      // I was constantly getting error about formData parsing, it turned out to be some problem with generated axios code. I believe that it could be solved in a longer period of time and futher digging in, but I didn't had the time so I used new instance
      const image = await axios.post('/images', formData);
      if (!image?.data?.imageId) {
        throw new Error();
      }

      const article = await GlobalService.articles({
        body: {
          title: data.title,
          imageId: image.data.imageId,
          perex: data.perex,
          content: data.content,
        },
      });
      if (!article) {
        throw new Error();
      }

      setTriggerPopup({
        type: PopupType.Success,
        text: 'Article created successfully',
      });

      setSelectedFileBadge(null);
      reset();
    } catch (e) {
      setTriggerPopup({
        type: PopupType.Error,
        text: 'Something went wrong',
      });
    }
  };

  return (
    <>
      {triggerPopup && (
        <Popup type={triggerPopup.type} text={triggerPopup.text} />
      )}
      <div className={styles.mainWrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.header}>
            <h1>{t('createNewArticleTitle')}</h1>
            <Button
              type={ButtonType.Primary}
              children={t('publishArticle')}
              submit
            />
          </div>
          <div>
            <label>{t('articleTitle')}</label>
            <Controller
              name="title"
              control={control}
              rules={{
                required: t('validations.titleRequired'),
              }}
              render={({ field }) => (
                <TextField
                  fieldProps={field}
                  placeholder={t('placeholders.title')}
                />
              )}
            />
          </div>

          <div>
            <label>{tCommon('featuredImage')}</label>
            <Button
              uploadButtonProps={{
                name: 'image',
                fieldProps: register,
                uploadTarget: UploadTarget.ImagePng,
                registerOptions: {
                  required: tCommon('validations.imageRequired'),
                },
                setValue,
                selectedFileBadge,
                setSelectedFileBadge,
              }}
              type={ButtonType.Upload}
              children={tCommon('uploadImage')}
            />
          </div>

          <div>
            <label>{t('perex')}</label>
            <Controller
              name="perex"
              control={control}
              rules={{
                required: t('validations.perexRequired'),
              }}
              render={({ field }) => (
                <TextField
                  fieldProps={field}
                  placeholder={t('placeholders.perex')}
                />
              )}
            />
          </div>

          <div>
            <label>{t('content')}</label>
            <Controller
              name="content"
              control={control}
              rules={{
                required: t('validations.contentRequired'),
              }}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  fieldProps={field}
                  placeholder={t('placeholders.content')}
                  className={styles.content}
                  textArea
                />
              )}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateArticleForm;
