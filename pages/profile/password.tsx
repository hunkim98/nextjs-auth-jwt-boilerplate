import { NextPage } from "next";
import React, { useState } from "react";
import AuthWrapper from "../../components/AuthWrapper/AuthWrapper";

type PageProps = {};

const Password: NextPage<PageProps> = () => {
  const [passwordInfo, setPasswordInfo] = useState<{
    oldPassword: string;
    newPassword1: string;
    newPassword2: string;
  }>({ oldPassword: "", newPassword1: "", newPassword2: "" });

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  const handleOldPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordInfo({ ...passwordInfo, oldPassword: event.target.value });
  };
  const handleNewPassword1Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordInfo({ ...passwordInfo, newPassword1: event.target.value });
  };
  const handleNewPassword2Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordInfo({ ...passwordInfo, newPassword2: event.target.value });
  };
  return (
    <AuthWrapper>
      <div>
        <div>Change Password</div>
        <form onSubmit={onSubmit}>
          <label>
            현재 비밀번호
            <input
              type="password"
              name="oldPassword"
              value={passwordInfo.oldPassword}
              onChange={handleOldPasswordChange}
            />
          </label>
          <label>
            변경할 비밀번호
            <input
              type="password"
              name="newPassword1"
              onChange={handleNewPassword1Change}
            />
          </label>
          <label>
            비밀번호 확인
            <input
              type="password"
              name="newPassword2"
              onChange={handleNewPassword2Change}
            />
          </label>
          <div>
            <input type="submit" value="변경하기" />
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Password;
