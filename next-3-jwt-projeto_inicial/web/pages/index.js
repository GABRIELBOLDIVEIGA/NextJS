import { useState } from "react";
import { useRouter } from "next/router";

export default function HomeScreen() {
  const router = useRouter();

  const [values, setValues] = useState({
    usuario: "gbv",
    senha: "123"
  })

  function handleChange(ev) {
    const fieldValue = ev.target.value;
    const fieldName = ev.target.name;

    setValues((current) => {
      return {
        ...current,
        [fieldName]: fieldValue
      }
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(ev) => {
        ev.preventDefault();
        

        authService.login({
          username: values.usuario,
          password: values.senha
        })
        .then(() => {
          console.log("deu bom")
        })
        .catch(() => {
          alert("Usuario ou senhas estao errados")
        })
        // router.push("/auth-page-static");
        router.push("/auth-page-ssr");
      }}>
        <input
          placeholder="Usuário" name="usuario"
          defaultValue="omariosouto"
          value={values.usuario}
          onChange={(ev) => handleChange(ev)}
        />
        <input
          placeholder="Senha" name="senha" type="password"
          defaultValue="safepassword"
          value={values.senha}
          onChange={(ev) => handleChange(ev)}
        />
        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
