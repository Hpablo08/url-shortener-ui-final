export const getUrls = async () => {
  return await fetch("http://localhost:3001/api/v1/urls");
};

export const postUrls = (newUrl) => {
  const requestData = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      long_url: newUrl.urlToShorten,
      title: newUrl.title,
    }),
  };
  console.log(requestData);
  return fetch("http://localhost:3001/api/v1/urls", requestData)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Not a 200 status");
      }
      alert("Information submitted");
      return response.json();
    })
    .catch((error) => {
      alert("Oops, something went wrong in the post. Try again later");
    });
};
