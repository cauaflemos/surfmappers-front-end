import { Header, ImgCardRevision } from '../../components';
import { MockVitrineTelaInicial } from '../../db';
import * as S from './style';

const Revision = () => {
    return (
        <S.RevisionContainer>
            <Header />
            <S.ShowcaseWrapper>
                <S.Showcase>
                    {MockVitrineTelaInicial.map((e) => <ImgCardRevision post={e} />)}
                </S.Showcase>
            </S.ShowcaseWrapper>
        </S.RevisionContainer>
    )
};

export default Revision;