import React from 'react'
import Link from 'next/link';

function Landing() {
    return (
        <>
            <header className="site-header pb-3 pt-3 header--transparent ico-header">
                <div className="header__main-wrap">
                    <div className="container mxw_1640">
                        <div className="header__main ul_li_between">
                            <div className="header__left ul_li">
                                <div className="header__logo">
                                    <a href="/">
                                        <img src="assets/img/logo/logo.svg" alt="" srcSet="" />
                                    </a>
                                </div>
                            </div>
                            <div className="header__action ul_li">
                                <Link href="/login" className="thm-btn">Login</Link> &nbsp; &nbsp;
                                <Link href="/signup" className="thm-btn bg-white text-dark">Signup</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="hero hero__ico pos-rel">
                <div className="hero__bg" data-background="assets/img/bg/hero_bg.png" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="hero__content">
                                <h1 className="title mb-45">
                                    Participate in the <span>ongoing ICO Token</span>sale
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero__shape">
                    <div className="shape shape--1">
                        <img src="assets/img/shape/h_shape.png" alt="" srcSet="" />
                    </div>

                    <div className="shape shape--2">
                        <img src="assets/img/shape/h_shape2.png" alt="" srcSet="" />
                    </div>

                    <div className="shape shape--3">
                        <img src="assets/img/shape/h_shape3.png" alt="" srcSet="" />
                    </div>
                </div>

                <div className="hero__coin">
                    <div className="coin coin--1">
                        <img src="assets/img/icon/coin1.png" alt="" srcSet="" />
                    </div>

                    <div className="coin coin--2">
                        <img src="assets/img/icon/coin2.png" alt="" srcSet="" />
                    </div>

                    <div className="coin coin--3">
                        <img src="assets/img/icon/coin3.png" alt="" srcSet="" />
                    </div>

                    <div className="coin coin--4">
                        <img src="assets/img/icon/coin4.png" alt="" srcSet="" />
                    </div>
                    <div className="coin coin--5">
                        <img src="assets/img/icon/coin5.png" alt="" srcSet="" />
                    </div>
                    <div className="coin coin--6">
                        <img src="assets/img/icon/coin6.png" alt="" srcSet="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing
