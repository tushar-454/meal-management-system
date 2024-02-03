import { useState } from 'react';
import Toast from '../../Utils/Toast/Toast';
import whome from '../../assets/icon/payment.png';
import dat from '../../assets/icon/timetable.png';
import money from '../../assets/icon/wallet.png';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import useGetMoney from '../../hooks/useGetMoney';
import Container from '../Reusable/Container';
import MealFormLay from '../Reusable/MealFormLay';
import PageTitle from '../Reusable/PageTitle';
import Input from '../UI/Input';
import styles from './AddMoney.module.css';

const addMoneyInit = {
  date: '',
  toWhome: '',
  money: '',
  status: 'pending',
};

const AddMoney = () => {
  const [addMoney, setAddMoney] = useState({ ...addMoneyInit });
  const axios = useAxios();
  const { user } = useAuth();
  const {
    moneyMonthlyData,
    loadmoneyMonthlyData,
    errormoneyMonthlyData,
    refetch,
  } = useGetMoney();

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddMoney((prevObj) => ({ ...prevObj, [name]: value }));
  };

  // handle meal data submit
  const handleAddMoneySubmit = (e) => {
    e.preventDefault();
    const { date, toWhome, money } = addMoney;
    if (!date || !toWhome || !money) {
      return Toast('Please fillup all require box', 'info');
    }
    if (addMoney.money <= 0) {
      return Toast('Add your money above 0.', 'info');
    }
    if (new Date(date).getTime() > new Date().getTime()) {
      return Toast("You can't use any date after today", 'info');
    }
    if (
      new Date(date).getMonth() !== new Date().getMonth() &&
      new Date(date).getFullYear() !== new Date().getFullYear()
    ) {
      return Toast("You can't add money without current month.", 'info');
    }
    const addMoneyObj = {
      ...addMoney,
      money: parseFloat(money),
      email: user?.email,
    };
    axios.post('/user/add-money', addMoneyObj).then((res) => {
      if (res.data.message === 'success') {
        Toast('Your Money added successfully', 'success');
        refetch();
        setAddMoney({ ...addMoneyInit });
      }
    });
  };

  return (
    <section>
      <Container>
        <PageTitle>Add your money</PageTitle>
        <MealFormLay
          displayName={'Add Money'}
          handleSubmit={handleAddMoneySubmit}
        >
          <Input
            displayName={'Date and time'}
            id={'dat'}
            type={'datetime-local'}
            icon={dat}
            name={'date'}
            value={addMoney.date}
            onChange={handleInputChange}
          />
          <Input
            displayName={'To Whomever'}
            id={'whome'}
            type={'text'}
            icon={whome}
            placeholder={'jhon dou'}
            name={'toWhome'}
            value={addMoney.toWhome}
            onChange={handleInputChange}
          />
          <Input
            displayName={'Money'}
            id={'money'}
            type={'number'}
            icon={money}
            placeholder={'money quentity'}
            name={'money'}
            value={addMoney.money}
            onChange={handleInputChange}
          />
        </MealFormLay>
        {/* money history table  */}
        <div className={styles.tableWrap}>
          <table border={1} className={styles.table}>
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>To Whomever</th>
                <th>Money</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {!loadmoneyMonthlyData && errormoneyMonthlyData ? (
                <>
                  <tr>
                    <td colSpan={'3'} style={{ textAlign: 'center' }}>
                      There was an error
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  {moneyMonthlyData?.getCurMonthMoneyForEmail?.map(
                    (perpay, index) => (
                      <tr
                        key={index}
                        className={
                          (index + 1) % 2 === 0 ? styles.even : styles.odd
                        }
                      >
                        <td>{new Date(perpay.date).toLocaleString()}</td>
                        <td>{perpay.toWhome}</td>
                        <td>{perpay.money}</td>
                        <td>{perpay.status}</td>
                      </tr>
                    )
                  )}
                </>
              )}
            </tbody>
            <tfoot>
              <tr>
                <th>Total</th>
                <th colSpan={3}>
                  {loadmoneyMonthlyData
                    ? '...'
                    : errormoneyMonthlyData
                    ? 0
                    : moneyMonthlyData?.totalMoney}
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default AddMoney;
