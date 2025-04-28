import React from 'react'
import Link from 'next/link';

function Landing() {
    return (
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
<Link href="/login" className="thm-btn">Login</Link>
<Link href="/signup" className="thm-btn">Signup</Link>
                    <button type="button" class="btn bg-white">Default</button>

<button type="button" class="btn btn-primary">Primary</button>

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
    )
}

export default Landing
