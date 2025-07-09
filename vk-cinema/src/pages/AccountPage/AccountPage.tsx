import React from "react";
import "./AccountPage.scss";
import { AccountProps } from "./AccountPage.types";
import Section from "../../layouts/Section";
import ListCard from "../../components/ListCard";
import Tabs, { Tab } from "../../components/Tabs";
import AccountContent from "../../components/AccountContent";
import AccountItem from "../../components/AccountItem";
import { useUserLogout, useUserProfile } from "../../hooks/User/useUser";
import { createUser, login } from "../../api/User/User";
import {
  addToFavorites,
  deleteFavorites,
  getFavorites,
} from "../../api/favorites/favorites";
import {
  useDeleteFavorites,
  useGetFavorites,
} from "../../hooks/favorites/useFavorites";
import { useNavigate } from "react-router";

// TODO сделать модель фаворите

//Todo доделать избранное хуки добавить в избранное

const Account: React.FC<AccountProps> = () => {
  // !должна быть проверка на логин

  // console.log(createUser("mrt9","1","MyName","MySurname"))

  // console.log(login("mrt9","1"))

  // console.log(getFavorites())

  // console.log(addToFavorites("100"))

  // console.log(deleteFavorites("100"))

  const navigate = useNavigate();

  const { data: profileData } = useUserProfile();
  const { mutate: logout } = useUserLogout();

  //  const{listFavorites: { data: favorites }, deleteByIdFavorites } = useFavorites();
  const { data: favorites } = useGetFavorites();
  const { mutate: delFavorite } = useDeleteFavorites();

  //  console.log( mutate("98"))
  //
  const bio = profileData && `${profileData?.name} ${profileData?.surname}`;



  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Section heading="Мой аккаунт" childrenInContainer={false}>
      {/* табы */}

      <Tabs>
        <Tab
          btnBuild={{
            title: "Избранные фильмы",
            mobileTitle: "Избранное",
            icon: "like",
          }}
        >
          {favorites && (
            <ListCard mode="btnClose" listCard={favorites} onClose={delFavorite} />
          )}
        </Tab>

        <Tab
          btnBuild={{
            title: "Настройка аккаунта",
            mobileTitle: "Настройки",
            icon: "login",
          }}
        >
          <AccountContent className="container" handleLogout={handleLogout}>
            {bio && (
              <AccountItem iconText="KK" label="Имя Фамилия" value={bio} />
            )}
            {profileData?.email && (
              <AccountItem
                icon="mail"
                label="Электронная почта"
                value={profileData?.email}
              />
            )}
          </AccountContent>
        </Tab>
      </Tabs>
    </Section>
  );
};

export default Account;
