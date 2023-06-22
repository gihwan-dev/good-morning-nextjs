import { getServerSession } from "next-auth";

const MainPage = async () => {
  const data = await getServerSession();
  return (
    <main>
      <h1>Here is Main Page.</h1>
    </main>
  );
};

export default MainPage;
