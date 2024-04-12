import React,{useState} from 'react'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Homedata } from '../Data/HomeData';
import { imglinks } from '../Data/ImageLinks';
import { Homedata1 } from '../Data/HomeData';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
       const [checkk, setcheckk] = useState(false)
       const isMobile = useMediaQuery({ maxWidth: 500 });
       const isDesktop = useMediaQuery({ minWidth: 1400 });
    const CustomSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible"
         disableRipple {...props} checked={checkk} onChange={()=>setcheckk(!checkk)} />
      ))(({ theme }) => ({
        width: 74,
        height: 33,
        padding: 0,
        borderRadius:20,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 4,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(40px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#3FA268' : '#3FA268',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity:100,
                color:'#3FA268'
            //   opacity: 0.5,
            //   color: '#3FA268',
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#3FA268',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:'#fff',
            //   theme.palette.mode === 'light'
            //     ? theme.palette.grey[100]
            //     : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            // opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 25,
          height: 25,
        },
        '& .MuiSwitch-track': {
            opacity:1,
          borderRadius: 26 / 2,
          backgroundColor:'#3FA268',
        },
      }));
  return (
    <div className='relative flex flex-col items-center justify-between max-w-max mx-auto' style={{fontFamily:"Gilroy"}}>
        {/* Section1 */}
        <section className='absolute lg:top-[199px] top-[100px]'>
            <div className='flex flex-col items-center justify-center flex-wrap
            lg:w-[668px] w-[382px] h-[279px] mx-auto'>
                <div className='mt-[20px]'>
                    <p className='font-bold text-[#3FA268]'>
                        PRICING
                    </p>
                </div>

                <div className='h-[62px] lg:text-[50px] text-[35px] lg:leading-[62px] leading-[43.33px] font-[400] mt-10 '>
                    <h2 className='font-bold text-[#FEFEFE]'>
                        Our Pricing Plans
                    </h2>
                </div>
                <div className='mt-[2px]'>
                    <p className='text-[#FEFEFE] lg:text-[18px] text-[14px] 
                    lg:leading-[30px] leading-[16.88px] text-center'>
                    Choose the pricing plan that best meets your needs and budget, 
                    and start accelerating your R&D today.
                    </p>
                </div>
                <div className='w-full flex items-center mt-[33px] 
                justify-center mx-auto rounded-[20px] gap-5 transition-all ease-in'>
                     <div className={`${!checkk? "text-white font-bold" : "text-white"} transition-all ease-in text-[#FEFEFE] text-[18px] 
                    leading-[30px] lg:flex hidden`}>
                        Billed Monthly
                    </div>
                    <div className={`${!checkk? "text-white font-bold" : "text-white"} transition-all ease-in text-[#FEFEFE] text-[18px] 
                    leading-[30px] lg:hidden`}>
                      Monthly
                    </div>
                    <div>
                        <CustomSwitch></CustomSwitch>
                    </div>
                    <div className={`${checkk? "text-white font-bold" : "text-white"} transition-all ease-in text-[#FEFEFE] text-[18px] 
                    leading-[30px]`}>
                        <div className='lg:flex hidden'>
                            Billed Anually
                            <span className='text-green-500'>(Save 20%)</span>
                        </div>
                        <div className='lg:hidden'>
                            Anually
                            <div className='text-green-500'>(Save 20%)</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* section-2new */}
        <section className='lg:p-16 absolute lg:top-[510px] top-[412px]'>
            <div className='lg:w-[937px] lg:h-[500px] mx-auto flex lg:flex-row flex-col items-center 
            justify-center border-[1px] rounded-[18px] border-gray-400 bg-gray-400 bg-clip-padding 
            backdrop-filter backdrop-blur-xl bg-opacity-10  gap-x-10 p-6 gap-y-16 lg:gap-y-0'>
                {
                    checkk && Homedata.map((item,idx) => {
                        return (
                            <div className='flex flex-col items-start justify-center text-white w-[232px] h-full gap-2
                             hover:bg-green-400 hover:scale-125 hover:p-4 hover:rounded-2xl 
                             transition-all hover:w-[250px] ease-in-out z-20 ' key={idx}>
                                <div className='relative'>
                                    <p className='font-bold text-[36px] leading-[46px]'>{`$${item.amount}`}</p>
                                    <div className='absolute bottom-3 top-5 left-[5rem]'>
                                    <p>/month</p>
                                </div>
                                </div>
                                
                                <div>
                                    <p className='font-medium text-[28px] leading-[42px]'>{item.title}</p>
                                </div>
                              <div className='flex items-start justify-center flex-col'>
                                <ul className='flex flex-col items-start justify-center gap-4'>
                                    {
                                        item.points.map((point,idx)=>(
                                            <li key={idx}>
                                                <div className='flex items-center justify-center gap-x-3'>
                                                    <div>
                                                        <CheckCircleIcon color='success'></CheckCircleIcon>
                                                    </div>
                                                    <div>
                                                        <p>
                                                            {point.p}
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                                </div>
                            <div>
                            <Button color='success' size='large'
                            variant='contained'sx={{borderRadius:"32px",width:"207px",height:"45px",color:"#3FA268",opacity:0.5}}>
                            <p className='font-bold text-white hover:text-[#3FA268]'>
                                Contact Us
                                </p>
                            </Button>
                            </div>
                            </div>
                        )
                    })
                    
                }
                {
                    !checkk && Homedata1.map((item,idx) => {
                        return (
                            <div className='flex flex-col items-start justify-center text-white w-[232px] h-full gap-2
                             hover:bg-green-400 hover:scale-125 hover:p-4 hover:rounded-2xl 
                             transition-all hover:w-[250px] ease-in-out z-20 ' key={idx}>
                                <div className='relative'>
                                    <p className='font-bold text-[36px] leading-[46px]'>{`$${item.amount}`}</p>
                                    <div className='absolute bottom-3 top-5 left-[5rem]'>
                                    <p>/month</p>
                                </div>
                                </div>
                                
                                <div>
                                    <p className='font-medium text-[28px] leading-[42px]'>{item.title}</p>
                                </div>
                              <div className='flex items-start justify-center flex-col'>
                                <ul className='flex flex-col items-start justify-center gap-4'>
                                    {
                                        item.points.map((point,idx)=>(
                                            <li key={idx}>
                                                <div className='flex items-center justify-center gap-x-3'>
                                                    <div>
                                                        <CheckCircleIcon color='success'></CheckCircleIcon>
                                                    </div>
                                                    <div>
                                                        <p>
                                                            {point.p}
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                                </div>
                            <div>
                            <Button color='success' size='large'
                            variant='contained'sx={{borderRadius:"32px",width:"207px",height:"45px",color:"#3FA268",opacity:0.5}}>
                            <p className='font-bold text-white hover:text-[#3FA268]'>
                                Contact Us
                                </p>
                            </Button>
                            </div>
                            </div>
                        )
                    })
                }


            </div>
        </section>
        {/* section2 */}
        <section className='mt-10 absolute lg:top-[1070px] top-[1900px]'>
            <div className='lg:w-[937px] lg:h-[189px] rounded-[18px] border-[1px] 
             border-gray-400 bg-gray-400 bg-clip-padding 
             backdrop-filter backdrop-blur-xl bg-opacity-10  lg:gap-x-10
            lg:p-[44px 70px 44px 70px] p-[22px, 25px, 22px, 25px] px-[25px] py-[25px] flex items-center justify-center lg:flex-row flex-col'>
                <div className='flex flex-col items-start justify-center  lg:w-[559px] w-[292px] lg:h-[101px] h-[73px]'>
                   <div>
                   <p className='text-[#FEFEFE] font-[600] lg:text-[35px]  text-[26px] leading-[39px] lg:leading-[52.5px]'>
                        Custom Plan
                    </p>
                   </div>
                   <div>
                        <p className='text-left lg:text-[20px] text-[14px]  lg:leading-[24px] leading-[16px] text-[#BBBBBB]'>
                    Contact us today to create a custom plan that meets your specific needs.
                    </p>
                   </div>
                </div>
                <div className='mt-6'>
                    <Button color='success' size='large' variant='contained' sx={{borderRadius:"32px",width:"191px",height:"59px",color:"#3FA268"}}>
                       <p className='font-bold text-white'>
                        Contact Us
                       </p>
                    </Button>
                </div>



            </div>
        </section>

        {/* section3 */}
        <section className='p-14 absolute lg:top-[1343px] top-[2200px]'>
            <div className='flex items-center justify-center flex-col lg:w-[1131px] lg:h-[109.94px] p-[5.14px, 15px, 0.01px,15px]'>
                <div className='w-[103px] h-[15px] '>
                    <p className='text-[14px] leading-[15px] text-[#F2F2F2] space-[0.4px] font-[400]'>
                        OUR PARTNERS
                    </p>
                </div>
                <div className='lg:w-[1029px] w-[909px] h-[74px] lg:h-[86px] lg:p-[32px, 20.02px, 0px, 20px] flex lg:flex-row  items-center justify-center mt-10 gap-[55px] mx-auto'>
                    {
                        imglinks.map((img,idx)=>{
                            return (
                                <div className='w-[105px] h-[54px]'>
                                    <img src={img.link} loading='lazy' alt='logo' className='filter sepia-[100%] 
                                    brightness-[105%] 
                                    invert-[88%] 
                                    hue-rotate-180 
                                    saturate-[0%] 
                                    contrast-[76%]
                                    max-w-full'>
                                    </img>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
        {/* section4 */}
        <section className='absolute lg:top-[1548px] top-[2442px]'>
            <div className='w-11/12 flex lg:flex-row flex-col items-center justify-center mx-auto'>
                <div className='flex flex-col items-start justify-center mx-auto'>
                    <div>
                       <p className='text-[#3FA268] font-normal text-[14px] leading-[17.33px]'>TESTIMONIALS</p> 
                    </div>
                    <div className='w-[344px] h-[96px] text-[#FEFEFE] mt-11'>
                        <p className='lg:text-[40px] text-[28px] lg:leading-[48px] leading-[34px] font-normal'>
                        Check what our clients are saying
                        </p>
                    </div>

                </div>
                <div className='flex flex-col items-start justify-center lg:gap-7 gap-5 mx-auto'>
                    <div className='w-[31px] h-[27px]'>
                        <FormatQuoteIcon color='success'sx={{rotate:"180deg",fontSize:"50px"}} 
                        className='w-full h-full'></FormatQuoteIcon>
                    </div>
                    <div className='lg:w-[799px] w-[357px] lg:h-[123px] h-[105px]'>
                        <p className='lg:text-[25px] text-[16px] lg:leading-[41px] leading-[21px] text-[#FEFEFE]'>
                            Since using this platform, our research has completely transformed. 
                            we would highly recommend this platform to any business looking to 
                            simplify their research process and drive more innovation.</p>
                    </div>
                    <div className='text-[#FEFEFE]'>
                    <p className='text-[20px] leading-[30px]'>Adrian Cal</p>
                    <p className='text[16px] leading-[24px]'>
                        CEO GetNextDesignz
                        </p>
                    </div>
                </div>

            </div>
        </section>
        

    </div>
  )
}

export default Home