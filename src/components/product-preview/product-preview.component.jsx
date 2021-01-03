import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

import { selectCollection, selectInterests } from '../../redux/product/product.selectors';
import InterestButton from '../../components/interest-button/interest-button.component';

import './product-preview.styles.scss';

const ProductPreview = ({ collection, interests }) => {
  const [calculate, setCalculate] = useState({});
  const [activeSelect, setActiveSelect] = useState(0);
  const { name, price, imageUrl } = collection;
  console.log(`Checking Collection`, collection);
  console.log(`Checking Interests`, interests);
  console.log(`Checking Calculate`, calculate);

  const toggle = (tab) => {
    console.log(`Checking Toggle, ${tab}`);
    if (activeSelect !== tab) {
      setActiveSelect(tab);
      calculateInterest(tab);
    }
  };

  const calculateInterest = (index) => {
    const rate = interests[index].rate;
    const month = interests[index].month;
    const interestPerYear = (price * rate) / 100;
    const interestPerMonth = interestPerYear / 12;
    const totalInterest = interestPerMonth * month;
    const totalPayment = price + totalInterest;
    const totalPaymentPerMonth = totalPayment / month;
    console.log(`Checking Interest: ${interestPerYear}`);
    setCalculate({
      rate,
      month,
      interestPerYear,
      interestPerMonth,
      totalInterest,
      totalPayment,
      totalPaymentPerMonth
    });
  };

  useEffect(() => {
    calculateInterest(activeSelect);
  }, []);

  return (
    <>
      <div className='product-preview'>
        <div>
          <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
        </div>
        <div>
          <div>
            <span className='name'>{name}</span>
            <NumberFormat className='price' value={price} displayType={'text'} thousandSeparator={true} prefix={'฿'} />
          </div>
          <div>
            {interests.map((item, index) => (
              <InterestButton key={index} current={index} selected={activeSelect} onClick={() => toggle(index)}>
                {`${item.rate}% Interest`}
              </InterestButton>
            ))}
          </div>
          <div>
            <div>
              <label>Period in months: {calculate.month}</label>
            </div>
            <div>
              <label>Interest per year: </label>
              <NumberFormat className='price' value={calculate.interestPerYear} displayType={'text'} thousandSeparator={true} prefix={'฿'} />
            </div>
            <div>
              <label>Interest per month: </label>
              <NumberFormat className='price' value={calculate.interestPerMonth} displayType={'text'} thousandSeparator={true} prefix={'฿'} />
            </div>
            <div>
              <label>Total interest during mortgage: </label>
              <NumberFormat className='price' value={calculate.totalInterest} displayType={'text'} thousandSeparator={true} prefix={'฿'} />
            </div>
            <div>
              <label>Total payment: </label>
              <NumberFormat className='price' value={calculate.totalPayment} displayType={'text'} thousandSeparator={true} prefix={'฿'} />
            </div>
            <div>
              <label>Total payment / month: </label>
              <NumberFormat className='price' value={calculate.totalPaymentPerMonth} displayType={'text'} thousandSeparator={true} prefix={'฿'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.productId)(state),
  interests: selectInterests(state)
});

export default connect(mapStateToProps)(ProductPreview);
