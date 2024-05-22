import React from 'react'
import profile_img from './../assets/profile/teguh.jfif'
import './Section_Header.css'
import { BiLogoWhatsapp, BiLogoLinkedinSquare, BiLogoGithub, BiLogoInstagram, BiLogoGmail } from 'react-icons/bi'
import Section_Content from './Section_Content'

const Section_Header = () => {

    const wa = "https://api.whatsapp.com/send?phone=6282283775912"

    return (
        <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="">

                        {/* Profile Pict */}
                        <div className="profile-photo rounded-circle mx-auto">
                            <img src={profile_img} alt="profile-teguh" className='rounded-circle' />
                        </div>

                        {/* Name and position */}
                        <div className="mb-3 mt-3 text-center">
                            <h4 className='text-dark fw-semibold'>Teguh Kurniawan</h4>
                            <p className='text-secondary'>Fullstack Developer</p>
                        </div>

                        {/* Sociak media */}
                        <div className="socials d-flex align-items-center justify-content-center gap-4">

                            <a href="https://linkedin.com/in/teguhkrniawan" className="social-btn text-secondary fs-5">
                                <BiLogoLinkedinSquare />
                            </a>

                            <a href="https://github.com/teguhkrniawan" className="social-btn text-secondary fs-5">
                                <BiLogoGithub />
                            </a>

                            <a href="https://www.instagram.com/kodewarga/" className="social-btn text-secondary fs-5">
                                <BiLogoInstagram />
                            </a>

                        </div>

                        {/* Informasi Singkat */}
                        <div className="desc d-flex align-items-center justify-content-center">
                            <div className="text-center">
                                <h6 className="text-dark fw-bold">3</h6>
                                <p className="mb-0 text-secondary">Tahun <br /> Berkerja</p>
                            </div>

                            <div className="text-center">
                                <h6 className="text-dark fw-bold">5</h6>
                                <p className="mb-0 text-secondary">Sertifikat <br /> didapatkan</p>
                            </div>

                            <div className="text-center">
                                <h6 className="text-dark fw-bold">10+</h6>
                                <p className="mb-0 text-secondary">Project <br /> diselesaikan</p>
                            </div>
                        </div>

                        {/* Hubungi Saya */}
                        <div className="d-flex align-items-center justify-content-center gap-2 mb-5 mt-5">
                            <a href="https://drive.google.com/file/d/1_bkJnhb6HVDjH0_Ap5f7e3bIt0_P47C1/view" className='btn btn-primary py-2'>Download CV</a>
                            <a href={wa} className='btn bg-primary-subtle text-primary py-2'>
                                <BiLogoWhatsapp className='fs-5' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Section_Header