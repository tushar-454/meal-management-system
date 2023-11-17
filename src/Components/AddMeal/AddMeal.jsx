import { useState } from 'react';
import Toast from '../../Utils/Toast/Toast';
import breackfast from '../../assets/icon/breakfast.png';
import dinner from '../../assets/icon/dinner.png';
import launch from '../../assets/icon/lunch.png';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Container from '../Reusable/Container';
import MealFormLay from '../Reusable/MealFormLay';
import PageTitle from '../Reusable/PageTitle';
import Input from '../UI/Input';

const mealInfoInit = {
  date: '',
  breackfast: '',
  launch: '',
  dinner: '',
};

const AddMeal = () => {
  const [mealInfo, setMealInfo] = useState({ ...mealInfoInit });
  const axios = useAxios();
  const { user } = useAuth();

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMealInfo((prevObj) => ({ ...prevObj, [name]: value }));
  };

  //handler add meal submit
  const handleAddMealSubmit = (e) => {
    e.preventDefault();
    const { breackfast, launch, dinner } = mealInfo;
    const date = new Date();
    const mealInfoDate = {
      uid: user.uid,
      date: date.toLocaleDateString(),
      breackfast,
      launch,
      dinner,
    };
    if (breackfast && launch && dinner) {
      axios.post('/user/add-meal', mealInfoDate).then((res) => {
        if (res.data.insertedId) {
          Toast('Successfully add meal data.', 'success');
        }
        console.log(res.data);
      });
    } else {
      Toast('Fillup all meal input box', 'info');
    }
  };

  return (
    <section>
      <Container>
        <PageTitle>Add your meal quantity</PageTitle>
        <MealFormLay
          displayName={'Add Meal'}
          handleSubmit={handleAddMealSubmit}
        >
          <Input
            displayName={'Breackfast'}
            id={'breackfast'}
            type={'number'}
            min={0}
            step={0.5}
            max={10}
            icon={breackfast}
            placeholder={'breackfast quentity'}
            name={'breackfast'}
            onChange={handleInputChange}
            value={mealInfo.breackfast}
          />
          <Input
            displayName={'Launch'}
            id={'launch'}
            type={'number'}
            min={0}
            step={0.5}
            max={10}
            icon={launch}
            placeholder={'launch quentity'}
            name={'launch'}
            onChange={handleInputChange}
            value={mealInfo.launch}
          />
          <Input
            displayName={'Dinner'}
            id={'dinner'}
            type={'number'}
            min={0}
            step={0.5}
            max={10}
            icon={dinner}
            placeholder={'dinner quentity'}
            name={'dinner'}
            onChange={handleInputChange}
            value={mealInfo.dinner}
          />
        </MealFormLay>
      </Container>
    </section>
  );
};

export default AddMeal;
