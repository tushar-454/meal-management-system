import Container from '../Reusable/Container';
import PageTitle from '../Reusable/PageTitle';
import styles from './MonthlyAllDetails.module.css';

const MonthlyAllDetails = () => {
  const allStudentMonthyData = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  const exisingStudents = [
    'Kalam',
    'Sajib',
    'Helal',
    'Tushar',
    'Julhas',
    'Asif',
    'Shuzzol',
    'Chandan',
    'Shishir',
  ];
  return (
    <section>
      <Container>
        <PageTitle>
          <abbr title={'Manager was Helel Munshi'}>Octobar</abbr> Month Full
          Details
        </PageTitle>
        {/* indivisual current month list  */}
        <div className={styles.tableWrap}>
          <table border={'1'} className={styles.table}>
            <thead>
              <tr className={styles.studentNameRow}>
                <th>Date</th>
                {exisingStudents.map((student, index) => (
                  <th key={index}>{student}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allStudentMonthyData.map((perday, index) => (
                <tr
                  key={index}
                  className={(index + 1) % 2 === 0 ? styles.even : styles.odd}
                >
                  <td>01/01/2023</td>
                  <td>{(Math.random() * 10).toFixed(1)}</td>
                  <td>{(Math.random() * 10).toFixed(1)}</td>
                  <td>{(Math.random() * 10).toFixed(1)}</td>
                  <td>{(Math.random() * 10).toFixed(1)}</td>
                  <td>{(Math.random() * 10).toFixed(1)}</td>
                  <td>{(Math.random() * 10).toFixed(1)}</td>
                  <td>{(Math.random() * 10).toFixed(1)}</td>
                  <td>{(Math.random() * 10).toFixed(1)}</td>
                  <td>{(Math.random() * 10).toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Per Student Total</th>
                <th>60</th>
                <th>60</th>
                <th>60</th>
                <th>60</th>
                <th>60</th>
                <th>60</th>
                <th>60</th>
                <th>60</th>
                <th>60</th>
              </tr>
              <tr>
                <th>Total Money</th>
                <th colSpan={2}>20000</th>
                <th colSpan={2}>Additional Cost</th>
                <th colSpan={2}>600</th>
                <th colSpan={2}>Total Meal</th>
                <th>302</th>
              </tr>
              <tr>
                <th>Meal Rate</th>
                <th colSpan={2}>43.3</th>
                <th colSpan={3}>Additional Cost per student</th>
                <th>120</th>
                <th colSpan={2}>Cooking Bill</th>
                <th>500</th>
              </tr>
              <tr>
                <th>Per Student Total Cost</th>
                <th>{(Math.random() * 10000).toFixed(1)}</th>
                <th>{(Math.random() * 10000).toFixed(1)}</th>
                <th>{(Math.random() * 10000).toFixed(1)}</th>
                <th>{(Math.random() * 10000).toFixed(1)}</th>
                <th>{(Math.random() * 10000).toFixed(1)}</th>
                <th>{(Math.random() * 10000).toFixed(1)}</th>
                <th>{(Math.random() * 10000).toFixed(1)}</th>
                <th>{(Math.random() * 10000).toFixed(1)}</th>
                <th>{(Math.random() * 10000).toFixed(1)}</th>
              </tr>
              <tr>
                <th>Per Student Should Pay</th>
                <th>{(Math.random() * 1000).toFixed(1)}</th>
                <th>{(Math.random() * 1000).toFixed(1)}</th>
                <th>{(Math.random() * 1000).toFixed(1)}</th>
                <th>{(Math.random() * 1000).toFixed(1)}</th>
                <th>{(Math.random() * 1000).toFixed(1)}</th>
                <th>{(Math.random() * 1000).toFixed(1)}</th>
                <th>{(Math.random() * 1000).toFixed(1)}</th>
                <th>{(Math.random() * 1000).toFixed(1)}</th>
                <th>{(Math.random() * 1000).toFixed(1)}</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default MonthlyAllDetails;
