import React from "react";
import { Formik } from "formik";

export default function Base({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <React.Fragment>{children}</React.Fragment>}
    </Formik>
  );
}
