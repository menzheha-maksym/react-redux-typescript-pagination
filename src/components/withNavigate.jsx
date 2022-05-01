import { useNavigate } from "react-router-dom";

const withNavigate = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();

    return <Component navigate={navigate} {...props} />;
  };

  return Wrapper;
};

export default withNavigate;
