import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { parseISO } from 'date-fns';
import { ToggleBtn } from '../ToggleSwitch/ToggleBtn';
import * as S from './ProdDeliverySetting.style';

function ProdDeliverySetting() {
  const [isDeliveryStartDateToggleOn, setIsDeliveryStartDateToggleOn] =
    useState(false);
  const [isPickupToggleOn, setIsPickupToggleOn] = useState(false);
  const [isReserveToggleOn, setIsReserveToggleOn] = useState(false);
  const [reserveStartTime, setReserveStartTime] = useState(
    useState(parseISO('YYYY.MM.DD HH:MM'))
  );
  const [reserveEndTime, setReserveEndTime] = useState(
    parseISO('YYYY.MM.DD HH:MM')
  );
  const [dawnDeliveryDate, setDawnDeliveryDate] = useState(
    parseISO('YYYY.MM.DD')
  );
  const [normalDeliveryDate, setNormalDeliveryDate] = useState(
    parseISO('YYYY.MM.DD')
  );

  const handleDeliveryStartDateToggle = isActive => {
    setIsDeliveryStartDateToggleOn(isActive);
    setIsReserveToggleOn(false);
  };

  const handlePickupToggle = isActive => {
    setIsPickupToggleOn(isActive);
    setIsReserveToggleOn(false);
  };

  const handleReserveToggle = isActive => {
    setIsReserveToggleOn(isActive);
    setIsDeliveryStartDateToggleOn(false);
    setIsPickupToggleOn(false);
  };

  const disableDate = date => {
    return (
      date.getTime() > reserveStartTime.getTime() &&
      date.getTime() < reserveEndTime.getTime()
    );
  };

  return (
    <S.Container>
      <S.Title>상품 배송 설정</S.Title>
      <S.DeliveryStartDateWrapper>
        <S.SubTitle>사용자 배송일 출발일 지정</S.SubTitle>
        <S.ContentWrapper>
          <ToggleBtn
            value={isDeliveryStartDateToggleOn}
            checked={isDeliveryStartDateToggleOn === true}
            onChange={handleDeliveryStartDateToggle}
          />
        </S.ContentWrapper>
      </S.DeliveryStartDateWrapper>
      <S.PickupWrapper>
        <S.SubTitle>방문 수령</S.SubTitle>
        <S.ContentWrapper>
          <ToggleBtn
            value={isPickupToggleOn}
            checked={isPickupToggleOn === true}
            onChange={handlePickupToggle}
          />
        </S.ContentWrapper>
      </S.PickupWrapper>
      <S.ReserveDelivWrapper>
        <S.SubTitle>
          선 주문
          <br />
          예약 배송
        </S.SubTitle>
        <S.ContentWrapper>
          <ToggleBtn
            value={isReserveToggleOn}
            checked={isReserveToggleOn === true}
            onChange={handleReserveToggle}
          />
          {isReserveToggleOn === true && (
            <S.DateRangePickerWrapper>
              <S.OrderTimeWrapper>
                <S.Text>주문 시간</S.Text>
                <S.DateRangePicker>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={props => <TextField {...props} />}
                      value={reserveStartTime}
                      onChange={newValue => {
                        setReserveStartTime(newValue);
                      }}
                      ampm={true}
                      ampmInClock={true}
                      inputFormat="yyyy.MM.dd hh:mm"
                      mask="____.__.__ __:__"
                      disablePast={true}
                    />
                    <S.TilderWrapper>~</S.TilderWrapper>
                    <DateTimePicker
                      renderInput={props => <TextField {...props} />}
                      value={reserveEndTime}
                      onChange={newValue => {
                        setReserveEndTime(newValue);
                      }}
                      ampm={false}
                      inputFormat="yyyy.MM.dd hh:mm"
                      mask="____.__.__ __:__"
                      minDateTime={reserveStartTime}
                    />
                  </LocalizationProvider>
                </S.DateRangePicker>
              </S.OrderTimeWrapper>
              <S.DeliveryDateWrapper>
                <S.DawnDeliveryWrapper>
                  <S.Text>새벽 배송</S.Text>
                  <S.DateRangePicker>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        inputFormat="yyyy.MM.dd"
                        mask="____.__.__"
                        value={dawnDeliveryDate}
                        shouldDisableDate={disableDate}
                        onChange={newValue => {
                          setDawnDeliveryDate(newValue);
                        }}
                        renderInput={params => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </S.DateRangePicker>
                </S.DawnDeliveryWrapper>
                <S.NormalDeliveryWrapper>
                  <S.Text>일반 배송</S.Text>
                  <S.DateRangePicker>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        inputFormat="yyyy.MM.dd"
                        mask="____.__.__"
                        value={normalDeliveryDate}
                        shouldDisableDate={disableDate}
                        onChange={newValue => {
                          setNormalDeliveryDate(newValue);
                        }}
                        renderInput={params => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </S.DateRangePicker>
                </S.NormalDeliveryWrapper>
              </S.DeliveryDateWrapper>
            </S.DateRangePickerWrapper>
          )}
        </S.ContentWrapper>
      </S.ReserveDelivWrapper>
    </S.Container>
  );
}

export default ProdDeliverySetting;
