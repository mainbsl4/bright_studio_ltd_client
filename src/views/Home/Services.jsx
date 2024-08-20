import Tabs from '../../components/tabs/Tabs'
import Tab from '../../components/tabs/Tab'

export default function Services() {
  return (
    <div className=' mt-5'>
      <div className='lg:flex justify-center items-center'>
        <div className=' lg:w-4/12 lg:pr-10'>
          <p>WHAT WE DO</p>
          <h2 className=''>Driving a better way of doing marketing</h2>
        </div>
        <div className=' lg:w-5/12 lg:pl-10'>
          <p>We deliver business impact through PR & marketing with a combination of intellectual curiosity, industry experience, urgency, and precision.</p>
          <br />
          <br />
          <a href="#" className=' text-red-400 border-b-2 border-black'>VIEW ALL SOLUTIONS</a>
        </div>
      </div>
      <div>
        


      <div className=' mt-10 lg:px-10'>
      <Tabs>
        <Tab title="Tab 1">
          <div  className=" bg-slate-500 h-[100%] flex">
            <div className=' lg:w-7/12 bg-blue-300'>
              <p>Increase your organic traffic by ranking high on search engines and AI discovery tools like ChatGPT</p>
            </div>
            <div className=' lg:w-5/12 bg-red-200'>
              <p>Image</p>
            </div>
          </div>
        </Tab>
        <Tab title="Tab 2">
          <div  className="  bg-blue-500 h-[100%]">Content of Tab 2</div>
        </Tab>
        <Tab title="Tab 3" >
          <div className=" bg-red-400 h-[100%]">Content of Tab 3</div>
        </Tab>
      </Tabs>
    </div>



      </div>
    </div>
  )
}
