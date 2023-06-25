import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UserProvider";
import useHandleUsers from "../hooks/useHandleUsers";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import editUserSchema from "../models/Joi/editUserSchema";
import Container from "@mui/material/Container";
import UserForm from "../components/UserForm";
import mapUserToModel from "../helpers/normalization/mapUserToModel";

const EditUserPage = () => {
  const Navigate = useNavigate();
  const { user } = useUser();
  const { hendleEditUser, hendleGetUser } = useHandleUsers();
  const { value, ...rest } = useForm(
    initialSignupForm,
    editUserSchema,
    hendleEditUser
  );
  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, setData, validateForm } =
    rest;
  useEffect(() => {
    if (user?._id)
      hendleGetUser(user._id).then((userFromServer) => {
        if (user?._id !== userFromServer!._id) return Navigate(ROUTES.ROOT);
        const modeledUSer = mapUserToModel(userFromServer!);
        setData(modeledUSer);
      });
  }, []);

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm
        title="edit profile"
        onSubmit={onSubmit}
        onReset={handleReset}
        onFormChange={validateForm}
        onInputChange={handleInputChange}
        data={data}
        errors={errors}
        setData={() => {}}
      />
    </Container>
  );
};

export default EditUserPage;
