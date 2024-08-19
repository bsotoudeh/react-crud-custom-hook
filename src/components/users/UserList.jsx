import useFetch from "../../composable/fetch/useFetch";

const UserList = () => {
  const { isLoading, serverError, apiData } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h2>API data</h2>
      {isLoading && <span>Loading ...</span>}
      {!isLoading && serverError ? (
        <span>Error in fetching data ...</span>
      ) : (
        <span>{JSON.stringify(apiData)}</span>
      )}
    </div>
  );
};

export default UserList;
