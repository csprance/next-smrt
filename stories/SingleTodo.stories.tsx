import { action } from '@storybook/addon-actions';
import * as React from 'react';
import SingleTodo from '../components/SingleTodo';

export default {
  title: 'Single Todo',
  component: SingleTodo,
};

export const SingleTodoNotCompleted = () => (
  <SingleTodo
    handleCheckBoxTick={action('Check Box Tick')}
    handleDelete={action('Deleting')}
    todo={{
      id: -1,
      todoText: 'Test Todo',
      completed: false,
    }}
  />
);

export const SingleTodoCompleted = () => (
  <SingleTodo
    handleCheckBoxTick={action('Check Box Tick')}
    handleDelete={action('Deleting')}
    todo={{
      id: -1,
      todoText: 'Completed Todo',
      completed: true,
    }}
  />
);
