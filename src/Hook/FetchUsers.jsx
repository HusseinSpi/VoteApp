export const FetchUsers = async () => {
  const url = "https://666461e9932baf9032aae117.mockapi.io/users";

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
