import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

function UserFromwithFormikContext() {
  return (
    <div>
      <div>User Form</div>
      <Formik
        initialValues={{
          name: '',
          age: 0,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Name field is required')
            .max(15, 'name should not be greater than 15 characters'),

          age: Yup.number()
            .max(60, 'age should not be greater than 60')
            .min(10, 'age should not be less than 10'),
        })}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="name">Name: </label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage
                name="name"
                render={(msg) => <span style={{ color: 'blue' }}>{msg} </span>}
              />
            </div>
            <div>
              <label htmlFor="age ">Age: </label>
              <Field type="number" name="age" id="age" />
              <ErrorMessage name="age" />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserFromwithFormikContext;
