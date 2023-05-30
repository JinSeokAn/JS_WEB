
const FormErrorMessage = ({ errorMessage }) => {
  return (
    <div>
      <span className='text-error text-s-size'>{`* ${errorMessage}`}</span>
    </div>
  );
};

export default FormErrorMessage;
