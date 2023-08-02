import * as S from "./style";
import IconLock from "../../assets/lock.svg"
import IconGoBack from "../../assets/arrow-left-alt2.svg"
import { useLocation, useNavigate } from "react-router";

const ButtonNav = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navigateToRevision = () => {
        if (location.pathname === '/') return navigate("/revision");
        return navigate("/");
    };

    return (
        <S.ButtonContainer
            onClick={() => navigateToRevision()}
        >
            {
                location.pathname === '/' ? 
                    <img src={IconLock} />
                    :
                    <img src={IconGoBack} />
            }
        </S.ButtonContainer>
    );
};

export default ButtonNav;