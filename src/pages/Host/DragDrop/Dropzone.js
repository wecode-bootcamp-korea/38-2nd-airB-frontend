import React, { useContext, useRef, useState } from 'react';
import HostStore, { HostContext } from '../User';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';

function DropzoneComponent() {
  const context = useContext(HostContext);
  const { img, setImg } = context;
  const [fileImage, setFileImage] = useState('');

  const onImageChange = e => {
    const imgFile = e.target.files;
    setFileImage(URL.createObjectURL(e.target.files[0]));
    if (img.length > 4) {
      img.slice(img.length - 4, img.length);
    }
    setImg([...img, imgFile]);
  };

  const inputref = useRef(null);
  const UseRef = e => {
    inputref.current.click();
  };

  return (
    <HostStore>
      <S.PhotoBoxMessage>
        <S.Thumbnail
          src={
            fileImage.length === 0
              ? 'https://user-images.githubusercontent.com/110619143/200009862-e8131cef-2c68-4f48-9142-62d5f831120b.png'
              : fileImage
          }
          onerror="this.src='https://s.pstatic.net/static/www/img/uit/2019/sp_search.svg';"
          alt="여기다 올려주세요"
        />
        <S.MessageBox onClick={UseRef} />
        {
          <S.PhotoInput
            ref={inputref}
            type="file"
            accept="image/*"
            onChange={onImageChange}
          />
        }
      </S.PhotoBoxMessage>
    </HostStore>
  );
}

export default DropzoneComponent;

const S = {
  Section: styled.section``,

  PhotoBoxMessage: styled.div``,

  PhotoForm: styled.form`
    ${variables.flex('column', 'center', 'center')};
  `,

  PhotoInput: styled.input`
    display: none;
  `,

  MessageBox: styled.div`
    position: fixed;
    width: 280px;
    height: 150px;
    cursor: pointer;
    border-radius: 10px;
    transform: translate(0, -150px);
    border: 1px dashed white;
  `,

  Thumbnail: styled.img`
    width: 280px;
    height: 145px;
    object-fit: cover;
    border-radius: 10px;
  `,
};
