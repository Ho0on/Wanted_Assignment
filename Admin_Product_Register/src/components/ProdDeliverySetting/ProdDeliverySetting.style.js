import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.borderGray};
  margin-bottom: 40px;
`;

export const Title = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.borderGray};
  padding: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const DeliveryStartDateWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.borderGray};
  display: flex;
`;

export const SubTitle = styled.div`
  border-right: 1px solid ${({ theme }) => theme.color.borderGray};
  padding: 20px;
  width: 150px;
  background: ${({ theme }) => theme.color.backgroundLightGray};
  line-height: 22px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const PickupWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.borderGray};
  display: flex;
`;

export const ReserveDelivWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.borderGray};
  display: flex;
`;

export const OrderTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-top: -10px;
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.gray};
  margin-right: 20px;
`;

export const DeliveryDateWrapper = styled.div`
  padding: 20px;
  display: flex;
`;

export const DawnDeliveryWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  margin-top: -20px;
`;

export const NormalDeliveryWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  margin-top: -20px;
`;

export const TilderWrapper = styled.div`
  margin: 0 10px;
`;

export const DateRangePicker = styled.div`
  display: flex;
  align-items: center;
`;

export const DateRangePickerWrapper = styled.div``;
