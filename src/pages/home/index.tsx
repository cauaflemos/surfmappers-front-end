import { ButtonAddImage, ButtonNav, CardHome, Header, ModalAddImage } from '../../components';
import { IPost } from '../../interfaces';
import { Axios } from '../../services';
import { useEffect, useState } from 'react';
import * as S from './style';

const Home = () => {
    const [modalStatus, setModalStatus] = useState(false);
    const [posts, setPosts] = useState<IPost[] | []>([]);
    const openModal = () => setModalStatus(true); 

    const closeModal = () => setModalStatus(false); 
    
    useEffect(() => {
        const getPosts = async () => {
            const { data } = await Axios.get("/gallery/post/list/common");
            setPosts(data.result);
        };

        getPosts();
    }, [])

    return (
        <S.HomeContainer>
            <Header />
            <S.ShowcaseWrapper>
                {
                    posts.length === 0 ? 
                        <S.NoPostsText>- Não há posts disponíveis no momento. Volte em breve! -</S.NoPostsText>
                    :
                        <S.Showcase>
                            {posts.map((e, idx) => <CardHome key={`CardHome${idx}`} post={e} />)}
                        </S.Showcase>
                }
            </S.ShowcaseWrapper>
            <ButtonAddImage openModal={openModal} />
            <ButtonNav />
            {modalStatus && <ModalAddImage closeModal={closeModal} />}
        </S.HomeContainer>
    )
};

export default Home;