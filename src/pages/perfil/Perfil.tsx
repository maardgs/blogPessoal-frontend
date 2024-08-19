import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { User } from "@phosphor-icons/react";

import { toastAlerta } from "../../util/toastAlerta";

function Perfil() {
  let navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta(
        "Dados inconsistentes. Verifique as informações de cadastro.",
        "erro"
      );
      navigate("/login");
    }
  }, [usuario.token]);

  return (
    <div className="container mx-auto mt-4 rounded-2xl overflow-hidden">
      <User alt="" className="w-8 size-6" />
      <img
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
        className="rounded-full w-56 mx-auto border-8 border-white relative z-20 transform -translate-y-16"
      />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-blue-500 text-white text-2xl items-center justify-center z-10">
        <p>Nome: {usuario.nome} </p>
        <p>E-mail: {usuario.usuario}</p>
      </div>
    </div>
  );
}

export default Perfil;
