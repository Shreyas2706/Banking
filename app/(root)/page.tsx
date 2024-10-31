import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import  TotalBalanceBox  from '@/components/TotalBalanceBox'
import exp from 'constants'

const Home = () => {
  const loggedIn = {firstName: 'Shreyas Singh'}
  return (
    <section className="home">
      <div className="home-content">
        <header className='home-header'>
        <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
            <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.25}
          />
        </header>
      
      RECENT TRANSACTION
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:1250.25}, {currentBalance:1240.24}]}
      />
    </section>
  )
}

export default Home