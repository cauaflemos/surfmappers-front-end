import { CardRevisionDesc } from '..';
import { IPosts } from '../../interfaces';
import * as S from './style';

interface ICardProps {
    post: IPosts
}

const ImgCardRevision = ({
    post
}: ICardProps) => {
    return (
        <S.Teste>
            <img src={post.imgSrc} />
            <S.DescWrapper>
                <CardRevisionDesc title="Título da foto:" subtitle={post.title} />
                <CardRevisionDesc title="Descrição da foto:" subtitle={post.description} />
                <CardRevisionDesc title="Autor" subtitle={post.author} />
            </S.DescWrapper>
            <S.ButtonsContainer>
                <S.Button btnType="N">Rejeitar</S.Button>
                <S.Button btnType="Y">Aprovar</S.Button>
            </S.ButtonsContainer>
        </S.Teste>
    );
};

export default ImgCardRevision;