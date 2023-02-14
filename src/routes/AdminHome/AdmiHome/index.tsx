import './styles.css'

import { useEffect, useState } from 'react';

import { userDTO } from '../../../models/user';

import * as userService from "../../../services/user-service";

export default function AdminHome() {

  const [user, setUser] = useState<userDTO>();

  useEffect(()=> {
    userService.findMe()
      .then(res => {
        setUser(res.data);
      })
  }, [])


  return (
    <main>
      <section id="admin-form-section" className="ec-container">
        <div className="ec-product-form-container-teste">
          <h2 className="ec-section-title ec-mb20">
            Bem vindo à Área Administrativa {user?.name}
          </h2>
        </div>
      </section>
    </main>
  );
}
