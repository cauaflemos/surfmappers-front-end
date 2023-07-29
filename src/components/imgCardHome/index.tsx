import { IPosts } from '../../interfaces';
import * as S from './style'
interface ICardProps {
    post: IPosts
}
const CardHome = ({ post }: ICardProps) => {
    return (
        <S.CardContainer>
            <S.CardDescription>
                <h1>{post.title}</h1>
                <h3>{post.description}</h3>
                <h3>{post.author}</h3>
            </S.CardDescription>
            <img src={post.imgSrc} />
        </S.CardContainer>
    );
};

export default CardHome;