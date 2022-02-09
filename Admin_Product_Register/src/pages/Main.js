import React from 'react';

import ExpoSalesPeriodSetting from '../components/ExpoSalesPeriodSetting/ExpoSalesPeriodSetting.js';
import ProdBasicInfo from '../components/ProdBasicInfo/ProdBasicInfo';
import ProdOption from '../components/ProdOption/ProdOption.js';
import ProdInfoNotice from '../components/ProdInfoNotice/ProdInfoNotice.js';
import { ImageUploadSection } from '../components/ImageUploadSection/ImageUploadSection.js';
import ProdDeliverySetting from '../components/ProdDeliverySetting/ProdDeliverySetting.js';
import { ToggleSetting } from '../components/ToggleSetting/ToggleSetting.js';
import * as S from './Main.style';

const MENU_LIST = [
  { name: '기본설정' },
  { name: '회원' },
  { name: '진열' },
  { name: '상품' },
  { name: '주문' },
  { name: '배송' },
  { name: '프로모션' },
  { name: '고객 센터 관리' },
  { name: '알림' },
];

function Main() {
  const onClickSubmit = () => {
    alert('상품정보가 저장되었습니다.');
  };

  return (
    <S.Wrapper>
      <S.SideBar>
        <S.LogoWrap>
          <S.LogoImg src="/images/logo.png" />
        </S.LogoWrap>
        <S.MenuList>
          {MENU_LIST.map((el, idx) => {
            return (
              <S.MenuListItem key={idx} isActive={el.name === '상품'}>
                {el.name}
              </S.MenuListItem>
            );
          })}
        </S.MenuList>
      </S.SideBar>
      <S.MainWrap>
        <S.Header>
          <S.Blank />
          <S.HeaderContent>
            <S.HeaderTitle>상품등록</S.HeaderTitle>
            <S.SaveBtn onClick={onClickSubmit}>저장하기</S.SaveBtn>
          </S.HeaderContent>
        </S.Header>
        <S.ContentWrap>
          <ExpoSalesPeriodSetting />
          <ProdBasicInfo />
          <ProdOption />
          <ProdInfoNotice />
          <ImageUploadSection title="상품 소개 이미지" />
          <ImageUploadSection title="구매자 추천 이미지" />
          <ProdDeliverySetting />
          <ToggleSetting title="상품 혜택 허용 설정" content="마일리지 적립" />
          <ToggleSetting title="기타 설정" content="감사카드 제공" />
        </S.ContentWrap>
      </S.MainWrap>
    </S.Wrapper>
  );
}

export default Main;
