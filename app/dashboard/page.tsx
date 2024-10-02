import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession(); 

  if (!session) {
    redirect("/"); 
  }

  return <div className="px-40 h-[30vh]">Dashboard</div>;
};

export default Dashboard;
