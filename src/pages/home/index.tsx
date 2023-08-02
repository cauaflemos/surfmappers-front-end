import { ButtonAddImage, CardHome, Header, ModalAddImage } from '../../components';
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
                <S.Showcase>
                    {posts.map((e, idx) => <CardHome key={`CardHome${idx}`} post={e} />)}
                </S.Showcase>
            </S.ShowcaseWrapper>
            <ButtonAddImage openModal={openModal} />
            {modalStatus && <ModalAddImage closeModal={closeModal} />}
        </S.HomeContainer>
    )
};

export default Home;