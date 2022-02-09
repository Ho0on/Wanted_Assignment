import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { parseISO } from 'date-fns';
import * as S from './ExpoSalesPeriodSetting.style';

const TODAY = new Date();

function ExpoSalesPeriodSetting() {
  const [expoOption, setExpoOption] = useState('unLimit');
  const [saleOption, setSaleOption] = useState('unLimit');
  const [expoStartTime, setExpoStartTime] = useState(
    parseISO('YYYY.MM.DD HH:MM')
  );
  const [expoEndTime, setExpoEndTime] = useState(parseISO('YYYY.MM.DD HH:MM'));
  const [saleStartTime, setSaleStartTime] = useState(
    useState(parseISO('YYYY.MM.DD HH:MM'))
  );
  const [saleEndTime, setSaleEndTime] = useState(parseISO('YYYY.MM.DD HH:MM'));
  const [prodQuanity, setProdQuanity] = useState(100);

  const handleExpoOption = e => {
    setExpoOption(e.currentTarget.value);
  };

  const handleSaleOption = e => {
    setSaleOption(e.currentTarget.value);
  };

  useEffect(() => {
    // 설정한 노출기간이 만료된 경우, 자동으로 미노출 상태로 변경
    TODAY.getTime() > expoEndTime.getTime() && setExpoOption('noExposure');

    // 설정한 판매기간이 만료된 경우, 자동으로 미판매 상태로 변경
    TODAY.getTime() > saleEndTime.getTime() && setSaleOption('noSale');

    // 총 재고가 0이 되는 경우, 자동으로 미판매 상태로 변경
    prodQuanity === 0 && setSaleOption('noSale');
  }, [expoEndTime, prodQuanity, saleEndTime]);

  return (
    <S.Container>
      <S.Title>노출 및 판매기간 설정</S.Title>
      <S.ExposurePeriodWrapper>
        <S.SubTitle>상품 노출 기한</S.SubTitle>
        <S.ContentWrapper>
          <S.OptionWrapper>
            <S.RadioInputWrapper>
              <S.RadioInput
                type="radio"
                name="expoOption"
                value="unLimit"
                checked={expoOption === 'unLimit'}
                onChange={handleExpoOption}
              />
              <S.InputText>제한 없음</S.InputText>
            </S.RadioInputWrapper>
            <S.RadioInputWrapper>
              <S.RadioInput
                type="radio"
                name="expoOption"
                value="noExposure"
                checked={expoOption === 'noExposure'}
                onChange={handleExpoOption}
              />
              <S.InputText>미노출</S.InputText>
            </S.RadioInputWrapper>
            <S.RadioInputWrapper>
              <S.RadioInput
                type="radio"
                name="expoOption"
                value="setPeriod"
                checked={expoOption === 'setPeriod'}
                onChange={handleExpoOption}
              />
              <S.InputText>노출 기간 설정</S.InputText>
            </S.RadioInputWrapper>
          </S.OptionWrapper>
          {expoOption === 'setPeriod' && (
            <S.DateRangePicker>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={props => <TextField {...props} />}
                  value={expoStartTime}
                  onChange={newValue => {
                    setExpoStartTime(newValue);
                  }}
                  ampm={false}
                  inputFormat="yyyy.MM.dd hh:mm"
                  mask="____.__.__ __:__"
                  disablePast={true}
                />
                <S.TilderWrapper>~</S.TilderWrapper>
                <DateTimePicker
                  renderInput={props => <TextField {...props} />}
                  value={expoEndTime}
                  onChange={newValue => {
                    setExpoEndTime(newValue);
                  }}
                  ampm={false}
                  inputFormat="yyyy.MM.dd hh:mm"
                  mask="____.__.__ __:__"
                  minDateTime={expoStartTime}
                />
              </LocalizationProvider>
            </S.DateRangePicker>
          )}
        </S.ContentWrapper>
      </S.ExposurePeriodWrapper>
      <S.SalesPeriodWrapper>
        <S.SubTitle>상품 판매 기한</S.SubTitle>
        <S.ContentWrapper>
          <S.OptionWrapper>
            <S.RadioInputWrapper>
              <S.RadioInput
                type="radio"
                name="saleOption"
                value="unLimit"
                checked={saleOption === 'unLimit'}
                onChange={handleSaleOption}
              />
              <S.InputText>제한 없음</S.InputText>
            </S.RadioInputWrapper>
            <S.RadioInputWrapper>
              <S.RadioInput
                type="radio"
                name="saleOption"
                value="noSale"
                checked={saleOption === 'noSale'}
                onChange={handleSaleOption}
              />
              <S.InputText>미판매</S.InputText>
            </S.RadioInputWrapper>
            <S.RadioInputWrapper>
              <S.RadioInput
                type="radio"
                name="saleOption"
                value="setPeriod"
                checked={saleOption === 'setPeriod'}
                onChange={handleSaleOption}
              />
              <S.InputText>판매 기간 설정</S.InputText>
            </S.RadioInputWrapper>
          </S.OptionWrapper>
          {saleOption === 'setPeriod' && (
            <S.DateRangePicker>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={props => <TextField {...props} />}
                  value={saleStartTime}
                  onChange={newValue => {
                    setSaleStartTime(newValue);
                  }}
                  ampm={false}
                  inputFormat="yyyy.MM.dd hh:mm"
                  mask="____.__.__ __:__"
                  disablePast={true}
                />
                <S.TilderWrapper>~</S.TilderWrapper>
                <DateTimePicker
                  renderInput={props => <TextField {...props} />}
                  value={saleEndTime}
                  onChange={newValue => {
                    setSaleEndTime(newValue);
                  }}
                  ampm={false}
                  inputFormat="yyyy.MM.dd hh:mm"
                  mask="____.__.__ __:__"
                  minDateTime={saleStartTime}
                />
              </LocalizationProvider>
            </S.DateRangePicker>
          )}
        </S.ContentWrapper>
      </S.SalesPeriodWrapper>
    </S.Container>
  );
}

export default ExpoSalesPeriodSetting;
