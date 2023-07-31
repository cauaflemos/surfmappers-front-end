import * as S from "./style";

interface ICardRevisionDescProps {
    title: string;
    subtitle: string;
}

const CardRevisionDesc = ({ title, subtitle }: ICardRevisionDescProps) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Subtitle>{subtitle}</S.Subtitle>
        </S.Container>
    );
}

export default CardRevisionDesc;