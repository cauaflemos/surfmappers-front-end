import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './style';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeHolder: string;
    label: string;
    statusInput: boolean;
}

const InputWTitle = forwardRef<HTMLInputElement, IInputProps>(({
    placeHolder,
    label,
    statusInput,
    ...props
}, ref) => {
    return (
        <S.Label>
            { label }
            <S.Input 
                type='text' 
                placeholder={placeHolder} 
                error={statusInput.toString()}
                ref={ref}
                {...props}
            />
        </S.Label>
    );
})

InputWTitle.displayName = 'InputWTitle';

export default InputWTitle;