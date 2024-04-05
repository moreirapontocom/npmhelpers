import { useContext, useState } from "react";
import { useFormik } from "formik";
import { UserContext } from "../context/User.context";
import { firebaseEmailPasswordLogin } from "../services/firebase.service";
import Loading from "../components/Loading/Loading.component";
import * as yup from 'yup';

import "./FirebaseEmailPasswordLoginForm.scss";

interface FirebaseEmailPasswordLoginFormProps {
  onLogin: (values: any) => void
  onError: (error: any) => void
}

const FirebaseEmailPasswordLoginForm = (props: FirebaseEmailPasswordLoginFormProps) => {
  const {onLogin, onError} = props;
  const {setUser} = useContext(UserContext);
  const [loadingAuthentication, setLoadingAuthentication] = useState(false);

  const formikEmailPassword: any = useFormik({
    initialValues: {email: "", password: ""},
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup.string().min(6).required(),
    }),
    onSubmit: (values: any) => {
      setLoadingAuthentication(true);
      firebaseEmailPasswordLogin(values.email, values.password).then((user: any) => {
        setUser(user);
        onLogin(user);
        setLoadingAuthentication(false);
        formikEmailPassword.resetForm();
        return;
      }).catch((error: any) => {
        setUser({uid: ""});
        onError(error.code || error.message || error);
        setLoadingAuthentication(false);
      });
    },
  });

  return <>
    <form onSubmit={formikEmailPassword.handleSubmit}>
      <div className="form-group mb-3">
        <input
          type="email"
          disabled={loadingAuthentication}
          name="email"
          data-testid="login-email"
          autoComplete="off"
          onChange={formikEmailPassword.handleChange}
          value={formikEmailPassword.values.email}
          className="form-control"
          placeholder="E-mail" />
      </div>

      <div className="form-group mb-3">
        <input
          type="password"
          name="password"
          data-testid="login-password"
          autoComplete="off"
          onChange={formikEmailPassword.handleChange}
          value={formikEmailPassword.values.password}
          disabled={loadingAuthentication}
          className="form-control"
          placeholder="Password" />
      </div>

      <div className="d-grid">
        <button
          type="submit"
          data-testid="login-submit"
          disabled={loadingAuthentication || !formikEmailPassword.isValid}
          className="btn btn-primary btn-block">
            <Loading loading={loadingAuthentication} parent="inline" color="text-white" />
            {!loadingAuthentication && <i className="fas fa-sign-in-alt me-2"></i>} Sign In
        </button>
      </div>
    </form>
  </>
};

export default FirebaseEmailPasswordLoginForm;