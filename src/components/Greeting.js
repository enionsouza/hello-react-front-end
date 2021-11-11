import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadGreeting } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const loadGreetingAction = bindActionCreators(loadGreeting, dispatch);
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    loadGreetingAction();
    return () => null;
  }, []);

  return <h1 className="centralize">{greeting.message}</h1>;
};

export default Greeting;
