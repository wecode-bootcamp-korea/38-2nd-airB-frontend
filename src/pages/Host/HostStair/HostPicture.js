import React, { useContext } from 'react';
import styled from 'styled-components';
import variables from '../../../styles/variables';
import DropzoneComponent from '../DragDrop/Dropzone';
import { HostContext } from '../User';

const HostPicture = () => {
  const context = useContext(HostContext);
  const { img, setImg } = context;

  return (
    <S.HostPhotoBox>
      <S.HostPhotoList>
        <S.HostPhotoMain>숙소의 사진을 올려주세요!</S.HostPhotoMain>
        <S.HostPhotoListBox>
          <S.HostPhotoListBoxCase>
            <DropzoneComponent />
          </S.HostPhotoListBoxCase>
          <S.HostPhotoListBoxCase>
            <DropzoneComponent />
          </S.HostPhotoListBoxCase>
          <S.HostPhotoListBoxCase>
            <DropzoneComponent />
          </S.HostPhotoListBoxCase>
          <S.HostPhotoListBoxCase>
            <DropzoneComponent />
          </S.HostPhotoListBoxCase>
          <S.HostPhotoListBoxCase>
            <DropzoneComponent />
          </S.HostPhotoListBoxCase>
        </S.HostPhotoListBox>
      </S.HostPhotoList>
    </S.HostPhotoBox>
  );
};
export default HostPicture;

const S = {
  HostPhotoBox: styled.div`
    ${variables.flex('column', 'center', 'center')};
    height: 78%;
    width: 700px;
    animation-name: fadeOut;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-direction: alternate;

    @keyframes fadeOut {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,

  HostPhotoMain: styled.div`
    width: 440px;
    color: white;
    font-size: 30px;
    text-align: center;
  `,

  HostPhotoList: styled.div`
    ${variables.flex('column', 'center', 'center')};
    width: 700px;
    height: 550px;
  `,

  HostPhotoListBoxCase: styled.div`
    ${variables.flex()};
    flex-wrap: wrap;
    width: 300px;
    height: 160px;
    color: white;
    margin-top: 30px;
  `,

  HostPhotoListBox: styled.div`
    ${variables.flex()};
    flex-wrap: wrap;
    align-content: flex-start;
    width: 700px;
    height: 600px;
    color: white;
  `,

  HostPhotoListBoxPhotoMain: styled.div`
    ${variables.flex()};
    width: 400px;
    height: 180px;
    border: 1px dashed gray;
    color: white;
    cursor: pointer;
  `,

  HostPhotoListBoxPhoto: styled.div`
    ${variables.flex()};
    width: 150px;
    height: 150px;
    cursor: pointer;
  `,

  ResultNone: styled.div`
    display: none;
  `,
};
