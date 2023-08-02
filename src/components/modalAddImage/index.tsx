import { useState, ChangeEvent ,} from 'react';
import IconSVG from '../../assets/015-images.svg';
import * as S from './style';
import { InputWTitle } from '..';
import { useForm } from 'react-hook-form';
import { Axios } from '../../services';
import { toast } from 'react-toastify';

interface IFormInput {
    title: string;
    description: string;
    author: string;
}

interface IModalProps {
    closeModal: () => void;
}

const ModalAddImage = ({ closeModal }: IModalProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const [image, setImage] = useState<string | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    }
    const onSubmit = async (data: IFormInput) => {
        try {
            await Axios.post("/gallery/post/add", {
                title: data.title,
                description: data.description,
                imgSrc: image,
                author: data.author
            });
            toast.success("Post cadastrado com sucesso!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            toast.error("Erro ao cadastrar o post!", {
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
        closeModal();
    }
    return (
        <S.ModalContainer>
            <S.ModalWrapper>
                <S.CloseModal>
                        <span onClick={closeModal}>X</span>
                </S.CloseModal>
                <S.ModalTitle>
                    <h1>Envie suas fotos para a galeria do casamento</h1>
                    <h2>Participe desta celebração conosco compartilhando seus momentos favoritos.</h2>
                </S.ModalTitle>
                <S.ModalContentWrapper>
                    {image ?
                    <S.FormWrapper>
                        <S.ImgContainer>
                            <img src={image} alt="Upload Preview" />
                        </S.ImgContainer>
                        <S.Form onSubmit={handleSubmit(onSubmit)}>
                                <InputWTitle 
                                    {...register("title", { required: true })} 
                                    label='Título da foto:' 
                                    placeHolder='Digite o título...'
                                    statusInput={errors.title ? true : false}
                                />
                                <InputWTitle 
                                    {...register("description", { required: true })}
                                    label='Descrição da foto:' 
                                    placeHolder='Digite a descrição...' 
                                    statusInput={errors.description ? true : false}
                                />
                                <InputWTitle 
                                    {...register("author", { required: true })}
                                    label='Autor:' 
                                    placeHolder='Digite o nome do autor...' 
                                    statusInput={errors.author ? true : false}
                                />
                                <S.SubmitBtn type='submit'>Publicar foto</S.SubmitBtn>
                        </S.Form>
                    </S.FormWrapper>
                        :
                    <S.InputFileContainer>
                        <img src={IconSVG} />
                        <input type="file" onChange={handleFileChange} accept="image/*" /> 
                        <h2>Arraste as fotos aqui</h2>
                        <span>Selecione dos arquivos</span>
                    </S.InputFileContainer>
                        }
                </S.ModalContentWrapper>
            </S.ModalWrapper>
        </S.ModalContainer>
    );
};

export default ModalAddImage;