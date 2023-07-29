import { ButtonAddImage, CardHome, Header } from '../../components';
import { MockVitrineTelaInicial } from '../../db';
import * as S from './style';

const Home = () => {
    return (
        <S.HomeContainer>
            <Header />
            <S.ShowcaseWrapper>
                <S.Showcase>
                    {MockVitrineTelaInicial.map((e, idx) => <CardHome key={`CardHome${idx}`} post={e} />)}
                </S.Showcase>
            </S.ShowcaseWrapper>
            <ButtonAddImage />
        </S.HomeContainer>
    )
};

export default Home;