async function getInfos() {
  try {
    const { data } = await axios.get("http://localhost:8080/");
    return [data[0][0], data[1][0]];
  } catch (error) {
    alert("Ocorreu um erro ao buscar os items");
  }
}
async function setInfos() {
  var infos = await getInfos();
  document.getElementById(
    "name"
  ).innerText = `NOME: ${infos[0].firstname} ${infos[0].name}`;
  document.getElementById(
    "passport"
  ).innerText = `PASSAPORTE: ${infos[0].registration}`;
  document.getElementById(
    "playtime"
  ).innerText = `HORAS JOGADAS: ${infos[1].playtime}`;
}
setInfos();
