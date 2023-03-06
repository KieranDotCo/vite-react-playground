import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Field, Formik, Form } from "formik";
import { TextField } from "formik-mui";
import * as Yup from "yup";

const ValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Email is required"),
  website: Yup.string().url("Please enter a valid URL."),
});

const Contact: React.FC = () => {
  return (
    <Container className="Contact">
      <Typography variant="h3">Contact</Typography>
      <hr />

      <Formik
        initialValues={{
          name: "",
          email: "",
          website: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {() => (
          <Form noValidate>
            <br />
            <Field
              component={TextField}
              name="name"
              label="Name"
              required={true}
              disabled={false}
            />
            <br />
            <br />
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
              required={true}
              disabled={false}
            />
            <br />
            <br />
            <Field
              component={TextField}
              name="website"
              label="Website"
              disabled={false}
            />
            <br />
            <hr />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Contact;
