export async function HttpClient(fetchUrl, fetchOptions) {
  return fetch(fetchUrl, fetchOptions)
    .then(async (respostaDoServidor) => {
      return {
        ok: respostaDoServidor.ok,
        body: await respostaDoServidor.json()
      }
    })
}
