import { toast } from 'react-toastify';
import { CardRevisionDesc } from '..';
import { IPost } from '../../interfaces';
import { Axios } from '../../services';
import * as S from './style';

interface ICardProps {
    post: IPost
    refreshShowcase: () => void
}

const ImgCardRevision = ({
    post,
    refreshShowcase
}: ICardProps) => {
    const deletePost = async () => {
        try {
            const { data } = await Axios.delete(`/gallery/post/${post.postId}`);
            toast.success(data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            refreshShowcase();
        } catch (error) {
            toast.success("Erro ao rejeitar o post!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const aprovePost = async () => {
        try {
            const { data } = await Axios.put(`/gallery/post/authorize/${post.postId}`);
            toast.success(data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            refreshShowcase();
        } catch (error) {
            toast.success("Erro ao aprovar o post!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <S.Teste>
            <img src={post.imgSrc} />
            <S.DescWrapper>
                <CardRevisionDesc title="Título da foto:" subtitle={post.title} />
                <CardRevisionDesc title="Descrição da foto:" subtitle={post.description} />
                <CardRevisionDesc title="Autor" subtitle={post.author} />
            </S.DescWrapper>
            <S.ButtonsContainer>
                <S.Button btnType="N" onClick={deletePost}>Rejeitar</S.Button>
                <S.Button btnType="Y" onClick={aprovePost}>Aprovar</S.Button>
            </S.ButtonsContainer>
        </S.Teste>
    );
};

export default ImgCardRevision;