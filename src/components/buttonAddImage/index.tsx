import Icon from '../../assets/199-upload2.svg';
import * as S from './style';

interface IButtonAddImageProps {
    openModal: () => void;
}

const ButtonAddImage = ({ openModal }: IButtonAddImageProps) => {
    return (
        <S.ButtonContainer
            onClick={() => openModal()}
        >
            <img src={Icon} />
        </S.ButtonContainer>
    );
};

export default ButtonAddImage;