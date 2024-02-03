import { useState } from 'react';
import Toast from '../../Utils/Toast/Toast';
import breackfast from '../../assets/icon/breakfast.png';
import dinner from '../../assets/icon/dinner.png';
import launch from '../../assets/icon/lunch.png';
import updated from '../../assets/icon/updated.png';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Container from '../Reusable/Container';
import MealFormLay from '../Reusable/MealFormLay';
import PageTitle from '../Reusable/PageTitle';
import Input from '../UI/Input';
import LinkButton from '../UI/LinkButton';

const mealInfoInit = {
  date: '',
  breackfast: '',
  launch: '',
  dinner: '',
};

const AddMeal = () => {
  const [mealInfo, setMealInfo] = useState({ ...mealInfoInit });
  const [isUpdate, setIsUpdate] = useState(false);
  const [curMealId, setCurMealId] = useState(null);
  const [updatePending, setUpdatePending] = useState(false);
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
      name: user?.displayName,
      email: user?.email,
      date: `${date.getMonth() + 1}/${
        date.getDate() + 1
      }/${date.getFullYear()}`,
      breackfast: parseFloat(breackfast),
      launch: parseFloat(launch),
      dinner: parseFloat(dinner),
      perDayTotal:
        parseFloat(breackfast) + parseFloat(launch) + parseFloat(dinner),
    };
    // add new for next day meal
    if (breackfast && launch && dinner) {
      axios
        .post('/user/add-meal', mealInfoDate)
        .then((res) => {
          if (res.data.message === 'success') {
            return Toast('Successfully add meal data.', 'success');
          }
        })
        .catch((error) => {
          return Toast(error.response.data.message, 'error');
        });
    }
  };

  // handle submit action change -> it update or add meal
  const handleSubmitActionChange = () => {
    setIsUpdate(!isUpdate);
    const curDate = new Date();
    if (!isUpdate) {
      axios
        .get(
          `/user/all-meal?email=${user.email}&date=${
            curDate.getHours() > 19
              ? `${curDate.getMonth() + 1}/${
                  curDate.getDate() + 1
                }/${curDate.getFullYear()}`
              : curDate.toLocaleDateString()
          }`
        )
        .then((res) => {
          if (!res.data.oneMealByEmailDate[0]?._id) {
            setIsUpdate(false);
            if (curDate.getHours() > 19 && curDate.getHours() <= 23) {
              return Toast('Add next day meal first.', 'info');
            }
            return Toast(
              'Please Contact with Manager Or Admin for add your todays meal.',
              'info'
            );
          }
          setCurMealId(res.data.oneMealByEmailDate[0]?._id);
          setMealInfo({ ...res.data.oneMealByEmailDate[0] });
        });
    }
  };

  //handle update meal
  const handleUpdateMeal = (e) => {
    e.preventDefault();
    setUpdatePending(true);
    const { breackfast, launch, dinner } = mealInfo;
    const updatedMealInfo = {
      breackfast: parseFloat(breackfast),
      launch: parseFloat(launch),
      dinner: parseFloat(dinner),
      perDayTotal:
        parseFloat(breackfast) + parseFloat(launch) + parseFloat(dinner),
    };
    axios
      .put(`/user/update-meal?id=${curMealId}`, updatedMealInfo)
      .then((res) => {
        if (res.data.message) {
          return Toast('Update successfully', 'success');
        }
      })
      .catch((error) => {
        return Toast(error.response.data.message, 'error');
      })
      .finally(() => {
        setUpdatePending(false);
      });
  };

  return (
    <section>
      <Container>
        <PageTitle>Add your meal quantity</PageTitle>
        {!isUpdate && (
          <div onClick={handleSubmitActionChange}>
            <LinkButton
              displayName={'Update Meal'}
              icon={updated}
              style={{
                background: isUpdate && '#FDD9D9',
              }}
            />
          </div>
        )}
        <MealFormLay
          displayName={
            isUpdate
              ? updatePending
                ? 'Updating...'
                : 'Update Todays Meal'
              : 'Add Meal'
          }
          handleSubmit={isUpdate ? handleUpdateMeal : handleAddMealSubmit}
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
            // disabled={new Date().getHours() > 5 && new Date().getHours() < 20}
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
            // disabled={new Date().getHours() > 5 && new Date().getHours() < 20}
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
            // disabled={new Date().getHours() > 14 && new Date().getHours() < 20}
          />
        </MealFormLay>
      </Container>
    </section>
  );
};

export default AddMeal;
