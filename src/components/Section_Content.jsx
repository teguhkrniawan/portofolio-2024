import React, { useState } from 'react'
import { Tabs, Tab, Modal } from 'react-bootstrap'
import Mes from './../assets/projects/mes.jpeg'
import Hrm from './../assets/projects/hrm.jpeg'
import Api from './../assets/projects/api-satnusa.png'
import MesC from './../assets/projects/mes_capture.jpeg'
import eOffice from './../assets/projects/e-office.png'
import siMatrik from './../assets/projects/siMatrik.png'
import eAbsen from './../assets/projects/e-absen.png'
import skrd from './../assets/projects/skrd.png'
import sialang from './../assets/projects/sialang.png'
import sisulam from './../assets/projects/sisulam.png'
import siap from './../assets/projects/siap.png'
import sibestie from './../assets/projects/sibestie.png'
import { BiCheckCircle, BiMedal } from "react-icons/bi";
import Modal_Img from './Modal_Img'


const Section_Content = (props) => {

    const showModal = (img) => {
        props.changeImage(img)
        props.changeModal()
    }
    
    return (
        <Tabs justify defaultActiveKey="tab-1" className="nav nav-pills mb-5 bg-body-secondary py-2 px-4 rounded mx-auto gap-3" style={{ width: 'max-content' }}>
            {/* Tab Projects */}
            <Tab eventKey='tab-1' title='Projects'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card border-1 mb-3 shadow">
                            <img src={Mes} alt="project" className='card-img-top' style={{ height: '300px', cursor: 'pointer' }}  onClick={(e) => showModal(Mes) }/>
                            <div className="pt-4 ps-3 pe-3">
                                <h4 className='text-dark'>MES Dashboard</h4>
                                <h6 className='text-secondary'>Tech : ReactJS, CRA, Bootstrap</h6>

                                <p style={{ textAlign: 'justify' }} className='mt-4'>
                                    Merupakan sebuah dashboard interaktif yang berguna untuk menampilkan
                                    informasi pencapaian mesin produksi, dimana data ini didapatkan dari
                                    PLC mesin. Data pada halaman interaktif ini diperbarui dalam interval
                                    waktu tertentu sebagai bentuk optimasi pada aplikasi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card border-1 mb-3 shadow">
                            <img src={Hrm} alt="project" className='card-img-top' style={{ height: '300px', cursor: 'pointer' }}  onClick={(e) => showModal(Hrm)}  />
                            <div className="pt-4 ps-3 pe-3">
                                <h4 className='text-dark'>Human Resource Management (ERP)</h4>
                                <h6 className='text-secondary'>Tech : Laravel, jQuery, PostgreeSQL</h6>

                                <p style={{ textAlign: 'justify' }} className='mt-4'>
                                    Aplikasi ini berguna dalam manajemen kepegawaian, dan manajemen pengendalian
                                    monitoring smartphone kepegawaian dalam lalu lintas keluar masuk perusahaan.
                                    Tujuannya mempermudah monitoring aset perusahaan agar tidak diambil oleh karyawan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card border-1 mb-3 shadow">
                            <img src={Api} alt="project" className='card-img-top' style={{ height: '300px', cursor: 'pointer' }}  onClick={(e) => showModal(Api)} />
                            <div className="pt-4 ps-3 pe-3">
                                <h4 className='text-dark'>API - My Satnusa Super App</h4>
                                <h6 className='text-secondary'>Tech : Laravel, JWT, Nginx</h6>

                                <p style={{ textAlign: 'justify' }} className='mt-4'>
                                    Menyediakan service pada fitur yang ada di mobile app My Satnusa.
                                    seperti mobile management system, laptop management system, leave remaining,
                                    meeting schedule, notification service, announcement. Ini merupakan
                                    aplikasi cukup kompleks yang berhasil saya kembangkan.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card border-1 mb-3 shadow">
                            <img src={MesC} alt="project" className='card-img-top' style={{ height: '300px', cursor: 'pointer' }}  onClick={(e) => showModal(MesC)} />
                            <div className="pt-4 ps-3 pe-3">
                                <h4 className='text-dark'>MES Machine Production</h4>
                                <h6 className='text-secondary'>Tech : Laravel, React, IOT, MQTT</h6>

                                <p style={{ textAlign: 'justify' }} className='mt-4'>
                                    Dalam implementasinya menggunakan IOT, dengan microcontroller ESP Wemos, dengan memanfaatkan protokol
                                    MQTT, antara service API dan juga sisi front end (React.JS) dalam pengiriman data signal
                                    ke sensor/module atas sebuah aktifitas produksi yang ada pada mesin.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card border-1 mb-3 shadow">
                            <img src={siMatrik} alt="project" className='card-img-top' style={{ height: '300px', cursor: 'pointer' }}  onClick={(e) => showModal(siMatrik)} />
                            <div className="pt-4 ps-3 pe-3">
                                <h4 className='text-dark'>Aplikasi Kerjasama Media Secara Elektronik</h4>
                                <h6 className='text-secondary'>Tech : Laravel, jQuery, MySQL</h6>

                                <p style={{ textAlign: 'justify' }} className='mt-4'>
                                    Dalam rangka memberikan informasi kepada masyarakat terkait kinerja
                                    dan pencapaian pemerintah, media pers diajak berkolaborasi, aplikasi ini
                                    adalah jembatan penghubung antara pemerintah dan media pers. Layanan yang tersedia
                                    terkait kerjasama, pembayaran, dan dokumentasi digital.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card border-1 mb-3 shadow">
                            <img src={eOffice} alt="project" className='card-img-top' style={{ height: '300px', cursor: 'pointer' }}  onClick={(e) => showModal(eOffice)}/>
                            <div className="pt-4 ps-3 pe-3">
                                <h4 className='text-dark'>E-Office Provinsi Riau</h4>
                                <h6 className='text-secondary'>Tech : Laravel, jQuery, MySQL</h6>

                                <p style={{ textAlign: 'justify' }} className='mt-4'>
                                    Layanan aplikasi surat menyurat yang dikembangkan oleh Provinsi Riau. Dan saya adalah salah satu
                                    pengembang yang ikut memberikan kontribusi terhadap aplikasi ini dilingkungan Pemkab Rokan Hilir.
                                    aplikasi ini berfokus pada pembuatan dokumen surat terintegrasi dengan Tanda Tangan Elektronik BSrE.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card border-1 mb-3 shadow">
                            <img src={eAbsen} alt="project" className='card-img-top' style={{ height: '300px', cursor: 'pointer' }}  onClick={(e) => showModal(eAbsen)}/>
                            <div className="pt-4 ps-3 pe-3">
                                <h4 className='text-dark'>App Presensi Pegawai</h4>
                                <h6 className='text-secondary'>Tech : Laravel, jQuery, MySQL</h6>

                                <p style={{ textAlign: 'justify' }} className='mt-4'>
                                    Sebuah aplikasi berbasis web yang melakukan manajemen presensi kehadiran pegawai.
                                    Menggunakan aplikasi yang telah diinstal pada aplikasi mobile, pengguna dapat melakukan presensi
                                    dengan melakukan scan QR Code, fitur yang ada pada aplikasi ini meliputi laporan presensi, pengajuan cuti,
                                    pengajuan sakit, dan statisik dalam bentuk grafik.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card border-1 mb-3 shadow">
                            <img src={skrd} alt="project" className='card-img-top' style={{ height: '300px', cursor: 'pointer' }}  onClick={(e) => showModal(skrd)} />
                            <div className="pt-4 ps-3 pe-3">
                                <h4 className='text-dark'>Sistem Informasi Retribusi Menara</h4>
                                <h6 className='text-secondary'>Tech : Laravel, jQuery, MySQL</h6>

                                <p style={{ textAlign: 'justify' }} className='mt-4'>
                                    Layanan aplikasi dalam pengawasan dan pemungutan retribusi menara telekomunikasi
                                    di lingkungan Pemerintah Kabupaten Rokan Hilir, dimana pada layanan ini dapat mencetak
                                    surat tagihan retribusi, rekapitulasi retribusi, statistik penyebaran menara telekomunikasi, 
                                    dan statistik informasi menara dalam bentuk dashboard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card border-1 mb-3 shadow">
                            <img src={sialang} alt="project" className='card-img-top' style={{ height: '300px', cursor: 'pointer' }}  onClick={(e) => showModal(sialang)} />
                            <div className="pt-4 ps-3 pe-3">
                                <h4 className='text-dark'>Aplikasi Laporan Realisasi Fisik Keuangan</h4>
                                <h6 className='text-secondary'>Tech : Laravel, jQuery, MySQL</h6>

                                <p style={{ textAlign: 'justify' }} className='mt-4'>
                                    Aplikasi monitoring realisasi fisik keuangan, aplikasi ini membantu memecahkan masalah bagaimana mengatur dan mengawasi pagu anggaran
                                    yang telah ditetapkan. Dalam aplikasi ini terdapat fitur monitoring keuangan dan rekapitulasi keuangan. Juga ada statistik dalam bentuk
                                    grafik yang ditampilkan dalam satu dashboard.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card border-1 mb-3 shadow">
                            <img src={sisulam} alt="project" className='card-img-top' style={{ height: '300px', cursor: 'pointer' }}  onClick={(e) => showModal(sisulam)}  />
                            <div className="pt-4 ps-3 pe-3">
                                <h4 className='text-dark'>Aplikasi Usulan Masyarakat</h4>
                                <h6 className='text-secondary'>Tech : Laravel, jQuery, MySQL</h6>

                                <p style={{ textAlign: 'justify' }} className='mt-4'>
                                    Layanan masyarakat dalam mengajukan usulan pembangunan daerah. Seperti pembangunan
                                    sekolah, fasilitas kesehatan, dan jalan. Aplikasi ini digunakan sebagai acuan musrengbang.
                                    Fitur yang digunakan pada aplikasi ini seperti rekapitulasi, pengajuan individu, dan tanggapan realtime
                                    oleh organisasi perangkat daerah terkait
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card border-1 mb-3 shadow">
                            <img src={siap} alt="project" className='card-img-top' style={{ height: '300px', cursor: 'pointer' }}  onClick={(e) => showModal(siap)}  />
                            <div className="pt-4 ps-3 pe-3">
                                <h4 className='text-dark'>Sistem Informasi Anggaran Pegawai</h4>
                                <h6 className='text-secondary'>Tech : Laravel, jQuery, MySQL</h6>

                                <p style={{ textAlign: 'justify' }} className='mt-4'>
                                    Aplikasi monitoring keuangan pegawai, aplikasi ini membantu memecahkan masalah bagaimana mengatur dan mengawasi pagu anggaran
                                    yang telah ditetapkan untuk pegawai.terdapat fitur monitoring keuangan dan rekapitulasi keuangan. Juga ada statistik dalam bentuk
                                    grafik yang ditampilkan dalam satu dashboard.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card border-1 mb-3 shadow">
                            <img src={sibestie} alt="project" className='card-img-top' style={{ height: '300px', cursor: 'pointer' }}  onClick={(e) => showModal(sibestie)}  />
                            <div className="pt-4 ps-3 pe-3">
                                <h4 className='text-dark'>Aplikasi Bebas Temuan</h4>
                                <h6 className='text-secondary'>Tech : Laravel, jQuery, MySQL</h6>

                                <p style={{ textAlign: 'justify' }} className='mt-4'>
                                    Layanan yang membantu pegawai dalam mengusulkan surat keterangan bebas temuan.
                                    Guna sebagai salah satu syarat kenaikan pangkat, ataupun pindah instansi. Dalam aplikasi ini
                                    sudah terimplementasi tanda tangan elektornik BSrE, menggunakan bantuan libreoffice sebagai engine
                                    dalam pembuatan surat
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Tab>

            {/* Tab Skills */}
            <Tab eventKey='tab-2' title='Skills'>
                <div className="row">
                    <div className="col-md-4">
                        <div className="d-flex gap-2">
                            <BiCheckCircle className='fs-5' />
                            <div>
                                <h6 className='fw-semibold'>HTML, CSS, JS</h6>
                                <p className='text-secondary'>ReactJS, Node.JS, SASS, jQuery</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex gap-2">
                            <BiCheckCircle className='fs-5' />
                            <div>
                                <h6 className='fw-semibold'>PHP</h6>
                                <p className='text-secondary'>Native, Laravel, and CI</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex gap-2">
                            <BiCheckCircle className='fs-5' />
                            <div>
                                <h6 className='fw-semibold'>SQL</h6>
                                <p className='text-secondary'>Events, Store Prod, Functions, DDL, DML</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="d-flex gap-2">
                            <BiCheckCircle className='fs-5' />
                            <div>
                                <h6 className='fw-semibold'>Git Version Control</h6>
                                <p className='text-secondary'>Github, Gitlab, Bitbucket</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex gap-2">
                            <BiCheckCircle className='fs-5' />
                            <div>
                                <h6 className='fw-semibold'>Ubuntu</h6>
                                <p className='text-secondary'>Nginx, Cron Jobs, PM2, Basic Linux</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex gap-2">
                            <BiCheckCircle className='fs-5' />
                            <div>
                                <h6 className='fw-semibold'>No SQL</h6>
                                <p className='text-secondary'>Firebase</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="d-flex gap-2">
                            <BiCheckCircle className='fs-5' />
                            <div>
                                <h6 className='fw-semibold'>Kotlin</h6>
                                <p className='text-secondary'>MVP Pattern, Native Android App</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex gap-2">
                            <BiCheckCircle className='fs-5' />
                            <div>
                                <h6 className='fw-semibold'>Dart</h6>
                                <p className='text-secondary'>Flutter</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex gap-2">
                            <BiCheckCircle className='fs-5' />
                            <div>
                                <h6 className='fw-semibold'>Tools</h6>
                                <p className='text-secondary'>Figma, Jira, Trello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Tab>

            {/* Tab Certificate */}
            <Tab eventKey='tab-3' title='Certificate'>
                <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                    <div className="row mx-auto">
                        <div className="card p-3">
                            <div className="d-flex gap-2">
                                <BiMedal style={{ fontSize: '60px' }} className='icon-medal'/>
                                <div>
                                    <h5 className='fw-bold'>BNSP Junior Web Developer</h5>
                                    <p>
                                        Sebuah sertifikat kompetensi kelayakan sebagai junior web developer, dari Balai Sertifikasi Nasional.
                                        Sertifikasi ini mewajibkan menyelasaikan beberapa poin yang harus diselesaikan.
                                    </p>
                                    <a href='https://drive.google.com/file/d/1_CeT9kFk_bF-vWlL1VaaCo75rLeA_itv/view' className='btn btn-sm rounded btn-primary'>Download</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mx-auto mt-3">
                        <div className="card p-3">
                            <div className="d-flex gap-2">
                                <BiMedal style={{ fontSize: '60px' }} className='icon-medal'/>
                                <div>
                                    <h5 className='fw-bold'>React JS (IT Perbankan)- Rakamin Academy</h5>
                                    <p>
                                        Sebagai langkah pemgembangan diri, saya mengikuti program pelatihan digitalent kominfo.
                                        menggunakan React JS saya mengikuti pelatihan ini dan mendapatkan banyak ilmu
                                    </p>
                                    <a href='https://drive.google.com/file/d/1fseiYjsWznX0uqfgMGtThysMZfXpDnFe/view' className='btn btn-sm rounded btn-primary'>Download</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mx-auto mt-3">
                        <div className="card p-3">
                            <div className="d-flex gap-2">
                                <BiMedal style={{ fontSize: '60px' }} className='icon-medal'/>
                                <div>
                                    <h5 className='fw-bold'>React JS (Professional Career)- Techready</h5>
                                    <p>
                                        Sebagai langkah pemgembangan diri, saya mengikuti program pelatihan digitalent kominfo.
                                        menggunakan React JS saya mengikuti pelatihan ini dan mendapatkan banyak ilmu
                                    </p>
                                    <a href='https://drive.google.com/file/d/1zbbndolRDRNr7S_VlMp6qa7g0Pi5qkTR/view' className='btn btn-sm rounded btn-primary'>Download</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mx-auto mt-3">
                        <div className="card p-3">
                            <div className="d-flex gap-2">
                                <BiMedal style={{ fontSize: '60px' }} className='icon-medal'/>
                                <div>
                                    <h5 className='fw-bold'>React JS (Course)- Dicoding Academy</h5>
                                    <p>
                                        Sebagai langkah pemgembangan diri, saya mengikuti program pelatihan Beasiswa Dicoding Academy.
                                        menggunakan React JS saya mengikuti pelatihan ini dan mendapatkan banyak ilmu
                                    </p>
                                    <a href='https://drive.google.com/file/d/1OliPoMDIpc1drXzyG4Qzs_04gkL1SfeV/view' className='btn btn-sm rounded btn-primary'>Download</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mx-auto mt-3">
                        <div className="card p-3">
                            <div className="d-flex gap-2">
                                <BiMedal style={{ fontSize: '60px' }} className='icon-medal'/>
                                <div>
                                    <h5 className='fw-bold'>Android Jectpack Pro- Dicoding Academy</h5>
                                    <p>
                                        Sebagai langkah pemgembangan diri, saya mengikuti program pelatihan Beasiswa Dicoding Academy.
                                        menggunakan Android Kotlin saya mengikuti pelatihan ini dan mendapatkan banyak ilmu
                                    </p>
                                    <a href='https://www.dicoding.com/certificates/JMZVMK3DJZN9' className='btn btn-sm rounded btn-primary'>Download</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Tab>
        </Tabs>
    )
}

export default Section_Content