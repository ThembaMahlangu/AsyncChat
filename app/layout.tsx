import SideBar from '../components/SideBar';
import '../styles/globals.css';
import { SessionProvider } from "../components/SessionProvider";
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import Login from '../components/Login';
import Clientprovider from '../components/Clientprovider';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login/>
          ) : (
            <div className='flex'>
          <div className='bg-[#232020] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
          <SideBar/>
          </div>
          <Clientprovider/>

        <div className='bg-[#2230c9] flex-1'>{children}</div>
        </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
