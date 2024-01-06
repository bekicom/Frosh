import { ReactComponent as Search } from 'assets/svgs/search.svg';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Intro = () => {
  const { handleSubmit, register, reset } = useForm({ defaultValues: { search: '' } });

  const onSubmit = (values) => {
    toast.info(values.search);
    reset();
  };

  const searchBar = (
    <div className="search-bar">
      <input type="text" placeholder="Qidirish" {...register('search', { required: true })} />
      <button type="submit">
        <Search />
      </button>
    </div>
  );

  return (
    <div className="intro">
      <div className="content">
        <h2 className="title"> {'Keling sizning orzuyingizdagi\nuyni topaylik!'} </h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {searchBar}
        </form>
      </div>
    </div>
  );
};

export default Intro;
