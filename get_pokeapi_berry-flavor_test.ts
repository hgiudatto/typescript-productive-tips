try {
  const response = await fetch("https://pokeapi.co/api/v2/berry-flavor/2/", {
    method: 'GET',
    headers: {}
  });

  response.ok &&
    const result = await response.json();
    console.log(result);
} catch (err) {
  console.error(err);
}