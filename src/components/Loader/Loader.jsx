import { Hearts } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div>
      <Hearts
        height="100"
        width="100"
        color="broun"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
