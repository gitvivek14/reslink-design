import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Navlinks } from '../Data/Navlinks';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const url = "https://s3-alpha-sig.figma.com/img/9cdc/e782/0063f23913849866e1697f42104f9268?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VcLf5pje99uJcR~zGMmd5jEBoLjANsRnt-dRdFDxlR-U2vuxA4dEE2Kfym5hMK78Df6r4a4tMF-M~IJCB5kUHXpk2rngQdgERnlRe1rzdyYqM2s9b~8pKZAcREw~E02UXnfEcKjTl3D-LIk74Kg0ZXDdWElGQtGp75-S~ZFn91AC8anZ5ubgB0i5Iio5XDi2REQ9c~Z2x76hffYzxynWEvQLaxUnuYGGX1eYzcVp8gdD4xn1ipbNa-yYmsRvkxPnSoYT9UciX6sYITCjkt4pVCfjfxk1sLkf~tumVS~lRp0fCD579x~~kgieKDvMtaAjZs66caYVtQ7W5nfSYiWiPg__"
    return (
        <div className='flex lg:h-[97px] items-center justify-center w-full flex-row h-[96px] fixed'>
            <div className='w-11/12 flex flex-row items-center justify-between h-[57px]'>
                <div className='flex flex-row items-center justify-center relative'>
                    <div>
                        <Link to='/'>
                            <img src={url} width={84} height={44} loading='lazy' alt='Logo'>
                            </img>
                        </Link>


                    </div>
                    <div className='absolute left-20'>
                        <p className='text-[#FEFEFE] tracking-[0.4em]'>
                            RESLINK
                        </p>

                    </div>
                </div>
                <nav className='lg:flex hidden'>
                    <ul className=' text-[#FEFEFE] flex gap-x-6 flex-row items-center justify-center mx-auto'>
                        {
                            Navlinks.map((link, idx) => (
                                <Link key={idx} to={link.path}>
                                    <li>
                                        <p>
                                            {link.title}
                                        </p>

                                    </li></Link>

                            ))
                        }
                    </ul>
                </nav>
                {/* buttons */}
                <div className='lg:flex items-center justify-center hidden '>
                    <Stack direction='row' spacing={2}>
                        <div className='flex flex-row items-center justify-center'>
                            <p className='text-[#FEFEFE]' style={{ fontWeight: 400 }}>
                                Login
                            </p>
                        </div>
                        <Button variant='contained' color='success'>
                            Get Started
                        </Button>
                    </Stack>

                </div>
                <div className='lg:hidden'>
                    <MenuIcon color='primary' fontSize='medium' sx={{ color: "white" }}></MenuIcon>

                </div>
            </div>

        </div>
    )
}

export default Navbar