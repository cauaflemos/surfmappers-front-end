import { useLocation } from 'react-router-dom';
import * as S from './style';

const Header = () => {
    const location = useLocation();

    return (
        <S.HeaderContainer>
            <S.HeaderTitle>{
                location.pathname === '/' ? 
                    'Galeria do Casamento de Paula e Ricardo' 
                : 
                    'Aprovação de Fotos para a Galeria'
            }</S.HeaderTitle>
            {
                location.pathname === '/revision' &&
                    <S.HeaderSubTitle>
                        Revise e aprove as fotos enviadas para a galeria do casamento de Paula e Ricardo.
                    </S.HeaderSubTitle>
            }
        </S.HeaderContainer>
    );
};

export default Header;