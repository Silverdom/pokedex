
import Banner from '@/components/Banner'
import GlobalConfig from './app.config';
import TopFive from '@/components/TopFive';

export default function Home() {
  return (
    <>
      <Banner typeColor={GlobalConfig.color} />
      {/* <TopFive typeColor={GlobalConfig.color} /> */}
    </>
  )
}
