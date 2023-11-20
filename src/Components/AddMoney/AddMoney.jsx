import { useState } from 'react';
import Toast from '../../Utils/Toast/Toast';
import whome from '../../assets/icon/payment.png';
import dat from '../../assets/icon/timetable.png';
import money from '../../assets/icon/wallet.png';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
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
  const moneyMonthlyData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

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
    const addMoneyObj = {
      ...addMoney,
      money: parseFloat(money),
      email: user?.email,
    };
    axios.post('/user/add-money', addMoneyObj).then((res) => {
      if (res.data.insertedId) {
        Toast('Your Money added successfully', 'success');
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
              {moneyMonthlyData.map((perpay, index) => (
                <tr
                  key={index}
                  className={(index + 1) % 2 === 0 ? styles.even : styles.odd}
                >
                  <td>01/01/2023 , 10:00:00 PM</td>
                  <td>Helal Munshi</td>
                  <td>1200</td>
                  <td>Pending</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Total</th>
                <th colSpan={3}>0.5</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default AddMoney;
