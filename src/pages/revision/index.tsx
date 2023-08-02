import { useEffect, useState } from 'react';
import { ButtonNav, Header, ImgCardRevision } from '../../components';
import { IPost } from '../../interfaces';
import { Axios } from '../../services';
import * as S from './style';

const Revision = () => {
    const [posts, setPosts] = useState<IPost[] | []>([]);
    const [refresh, setRefresh] = useState<boolean>(false);
    useEffect(() => {
        const getPosts = async () => {
            const { data } = await Axios.get("/gallery/post/list/auth");
            setPosts(data.result);
        };

        getPosts();
    }, [refresh])

    const refreshShowcase = () => {
        setRefresh(refresh ? false : true)
    }

    return (
        <S.RevisionContainer>
            <Header />
            <S.ShowcaseWrapper>
                {
                    posts.length === 0 ? 
                        <S.NoPostsText>- Sem posts pendentes de aprovação -</S.NoPostsText>
                    :
                        <S.Showcase>
                            {posts.map((e) => <ImgCardRevision post={e} refreshShowcase={refreshShowcase} />)}
                        </S.Showcase>
                }
            </S.ShowcaseWrapper>
            <ButtonNav />
        </S.RevisionContainer>
    )
};

export default Revision;