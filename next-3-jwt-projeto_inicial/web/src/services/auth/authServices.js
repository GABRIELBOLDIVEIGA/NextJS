
import { HttpClient } from "../../infra/HttpClient/HttpClient.js";

export const authServices = {
  async login({ username, password }) {
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(async (resposta) => {
        console.log(resposta);
        if (!resposta.ok) {
          alert("ERROR")
        }
        const body = await resposta.json();
        console.log(body)
      })
      .catch((erro) => {
        console.log(erro)
      })
  }
}
