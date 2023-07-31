import { ButtonAddImage, CardHome, Header, ModalAddImage } from '../../components';
import { MockVitrineTelaInicial } from '../../db';
import * as S from './style';
import { useState } from 'react';

const Home = () => {
    const [modalStatus, setModalStatus] = useState(true);

    const openModal = () => setModalStatus(true); 

    return (
        <S.HomeContainer>
            <Header />
            <S.ShowcaseWrapper>
                <S.Showcase>
                    {MockVitrineTelaInicial.map((e, idx) => <CardHome key={`CardHome${idx}`} post={e} />)}
                </S.Showcase>
            </S.ShowcaseWrapper>
            <ButtonAddImage openModal={openModal} />
            {/* {modalStatus && <ModalAddImage />} */}
            <ModalAddImage />
        </S.HomeContainer>
    )
};

export default Home;