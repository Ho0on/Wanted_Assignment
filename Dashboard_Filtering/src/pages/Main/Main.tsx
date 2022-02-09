import React, { useEffect, useState } from 'react';

import Nav from 'components/Nav/Nav';
import ReqCard from 'components/ReqCard/ReqCard';
import FilterContent from 'components/FilterContent/FilterContent';
import { MATERIAL, PROCESS_METHOD } from 'contants';
import { Request } from 'interface';
import useFetch from 'hooks/useFetch';
import * as S from './Main.style';

const Main: React.FC = () => {
  const [isMethodOpen, setIsMethodOpen] = useState(false);
  const [isMaterialOpen, setIsMaterialOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [checkedMaterial, setCheckedMaterial] = useState([]);
  const [checkedMethod, setCheckedMethod] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const { data }: { data: any } = useFetch('http://localhost:4000/requests');

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setIsMethodOpen(false);
    setIsMaterialOpen(false);
    setCheckedMaterial([]);
    setCheckedMethod([]);
    setFilteredData([]);
  };

  const handleReset = () => {
    setIsMethodOpen(false);
    setIsMaterialOpen(false);
    setCheckedMaterial([]);
    setCheckedMethod([]);
    setFilteredData([]);
    setIsToggled(false);
  };

  const checkedBothArray = [...checkedMaterial, ...checkedMethod];

  const filteringData = () => {
    const dataWithBothFilter = data?.filter(
      (el: Request) => (el.both = [...el.method, ...el.material])
    );
    const result = dataWithBothFilter.filter((el: any) =>
      checkedBothArray.every((element: any) => el.both.includes(element))
    );
    setFilteredData(result);
  };

  const showIngData = () => {
    const result = data?.filter((el: Request) => el.status === '상담중');
    setFilteredData(result);
  };

  useEffect(() => {
    isToggled ? showIngData() : setFilteredData([]);
    if (checkedBothArray.length > 0) {
      filteringData();
    }
    if (checkedBothArray.length > 0) {
      setIsToggled(false);
    }
  }, [checkedMaterial, checkedMethod]);

  const condition =
    filteredData.length === 0 &&
    (checkedMaterial.length > 0 || checkedMethod.length > 0);

  return (
    <>
      <Nav />
      <S.Container>
        <S.HeaderTitle>들어온 요청</S.HeaderTitle>
        <S.HeaderDesc>파트너님에게 딱 맞는 요청서를 찾아보세요.</S.HeaderDesc>
        <S.FilteringContainer>
          <S.FilteringBoxWrapper>
            <FilterContent
              title="가공 방식"
              filterData={PROCESS_METHOD}
              isOpen={isMethodOpen}
              setIsOpen={setIsMethodOpen}
              checkedArray={checkedMethod}
              setCheckedArray={setCheckedMethod}
            />
            <FilterContent
              title="재료"
              filterData={MATERIAL}
              isOpen={isMaterialOpen}
              setIsOpen={setIsMaterialOpen}
              checkedArray={checkedMaterial}
              setCheckedArray={setCheckedMaterial}
            />
            <S.ResetWrapper onClick={handleReset}>
              <S.ResetIcon src="/images/refresh_icon.png" />
              <S.ResetText>필터링 리셋</S.ResetText>
            </S.ResetWrapper>
          </S.FilteringBoxWrapper>
          <S.ToggleWrapper>
            <S.InputWrapper>
              <S.InputCheck
                type="checkbox"
                checked={isToggled}
                onChange={handleToggle}
              />
              <S.Switch />
            </S.InputWrapper>
            <S.ToggleText>상담 중인 요청만 보기</S.ToggleText>
          </S.ToggleWrapper>
        </S.FilteringContainer>
        {data && (
          <S.ReqWrapper isActive={condition}>
            {condition ? (
              <S.Span>조건에 맞는 견적 요청이 없습니다.</S.Span>
            ) : (
              <S.CardContainer>
                {filteredData.length === 0
                  ? data.map((el: Request) => {
                      return <ReqCard key={el.id} item={el} />;
                    })
                  : filteredData.map((el: Request) => {
                      return <ReqCard key={el.id} item={el} />;
                    })}
              </S.CardContainer>
            )}
          </S.ReqWrapper>
        )}
      </S.Container>
    </>
  );
};

export default Main;
