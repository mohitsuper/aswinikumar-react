import React from 'react'

export default function Footer() {
  return (
<section className="footer container-2xl mt-[5rem] mx-auto">
  <footer className="f-main container grid grid-cols-2 gap-4 sm:grid-cols-4 px-4 mx-auto">
    <div className="f-col flex flex-col gap-3 mx-auto gap-3 ">
      <div className="log w-[5rem] h-[5rem]">
        <img src="./img/logo.png" alt="" className="w-[100%]" />
      </div>
      <div className="contect flex flex-col gap-5">
        <h2 className="font-bold text-[1.5rem]">Contect</h2>
        <div className="flex">
          <h3>address:</h3>
          <p>New Manndi Rood Dausa ,Raj</p>
        </div>
        <div className="flex">
          <h3>Email:</h3>
          <p>vijaymohit265@gmail.com</p>
        </div>
        <div className="flex">
          <h3>phone:</h3>
          <p>+91-7375829664</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-[1.5rem]">follow us</h2>
          <div className="icon flex gap-2 text-[1.6rem] mt-3">
            <ion-icon name="logo-facebook" role="img" className="md hydrated" />
            <ion-icon name="logo-github" role="img" className="md hydrated" />
            <ion-icon name="logo-google" role="img" className="md hydrated" />
            <ion-icon name="logo-youtube" role="img" className="md hydrated" />
            <ion-icon
              name="logo-instagram"
              role="img"
              className="md hydrated"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="f-col flex flex-col gap-3 mx-auto ">
      <div className="contect flex flex-col gap-5">
        <h2 className="font-bold text-[1.5rem]">About</h2>
        <a href="#">about as</a>
        <a href="#">Delivery Infomation</a>
        <a href="#">Terms &amp; Condition</a>
        <a href="#">Contect us</a>
      </div>
    </div>
    <div className="f-col flex flex-col gap-5 ">
      <h4 className="font-bold text-[1.5rem]">account</h4>
      <a href="#">sing in</a>
      <a href="#">view cart</a>
      <a href="#">track my order </a>
      <a href="#">help</a>
      <a href="#">my wishlist</a>
    </div>
    <div className="f-col flex flex-col gap-3 mx-auto">
      <h4 className="font-bold text-[1.5rem]">install app</h4>
      <p>from app stroe or goole play</p>
      <div className="row flex h-[5rem] w-[4rem] gap-2">
        <img src="images/s/f1.png" alt="" />
        <img src="images/s/f2.png" alt="" />
      </div>
      <p>online payment is avlabile use upi ,bank , crad</p>
      <div className="row">
        <img src="img/payment.png" alt="" />
      </div>
    </div>
    <div className="f-col col-span-full text-center p-5 mt-5">
      <h4>
        ©copyright <span className="text-orange-700">mr mohit vijay</span> wed
        devloper
      </h4>
    </div>
  </footer>
</section>
  )
}
