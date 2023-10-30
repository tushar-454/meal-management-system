import whome from '../../assets/icon/payment.png';
import dat from '../../assets/icon/timetable.png';
import money from '../../assets/icon/wallet.png';
import Container from '../Reusable/Container';
import MealFormLay from '../Reusable/MealFormLay';
import PageTitle from '../Reusable/PageTitle';
import Input from '../UI/Input';
import styles from './AddMoney.module.css';

const AddMoney = () => {
  const moneyMonthlyData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <section>
      <Container>
        <PageTitle>Add your money</PageTitle>
        <MealFormLay displayName={'Add Money'}>
          <Input
            displayName={'Date and time'}
            id={'dat'}
            type={'datetime-local'}
            icon={dat}
          />
          <Input
            displayName={'To Whomever'}
            id={'whome'}
            type={'text'}
            icon={whome}
            placeholder={'jhon dou'}
          />
          <Input
            displayName={'Money'}
            id={'money'}
            type={'number'}
            icon={money}
            placeholder={'money quentity'}
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
