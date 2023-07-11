import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { AddCommentActions, AddCommentReducer } from '@/features/add-comment/model/slice/add-comment';
import { DynamicModuleLoader, Reducers } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import * as model from '../model/selectors';

import cl from './add-comment-form.module.scss';

interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const INITIAL_REDUCER: Reducers = {
    addComment: AddCommentReducer,
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const dispatch = useAppDispatch();

    const text = useSelector(model.getAddCommentFormText);
    const error = useSelector(model.getAddCommentFormError);

    const handleChangeText = useCallback((value: string) => {
        dispatch(AddCommentActions.setText(value));
    }, [dispatch]);

    const commentSendHandler = useCallback(() => {
        onSendComment(text ?? '');
        handleChangeText('');
    }, [handleChangeText, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={INITIAL_REDUCER} removeAfterUnmount>
            <div className={clsx({ cls: cl.AddCommentForm, additional: [className] })}>
                <Input className={cl.input} value={text} onChange={handleChangeText} placeholder="Введите текст" />
                <Button onClick={commentSendHandler}>
                    Оставить комментарий
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
