import breackfast from '../../assets/icon/breakfast.png';
import dinner from '../../assets/icon/dinner.png';
import launch from '../../assets/icon/lunch.png';
import Container from '../Reusable/Container';
import MealFormLay from '../Reusable/MealFormLay';
import PageTitle from '../Reusable/PageTitle';
import Input from '../UI/Input';

const AddMeal = () => {
  return (
    <section>
      <Container>
        <PageTitle>Add your meal quantity</PageTitle>
        <MealFormLay displayName={'Add Meal'}>
          <Input
            displayName={'Breackfast'}
            id={'breackfast'}
            type={'number'}
            icon={breackfast}
            placeholder={'breackfast quentity'}
          />
          <Input
            displayName={'Launch'}
            id={'launch'}
            type={'number'}
            icon={launch}
            placeholder={'launch quentity'}
          />
          <Input
            displayName={'Dinner'}
            id={'dinner'}
            type={'number'}
            icon={dinner}
            placeholder={'dinner quentity'}
          />
        </MealFormLay>
      </Container>
    </section>
  );
};

export default AddMeal;
