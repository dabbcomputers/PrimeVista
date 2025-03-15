import Link from 'next/link'
import React from 'react'

const ContactSection = () => {
  return (
    <>
     <div className="home2-calculate-section mb-120">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between mb-70">
            <div className="col-lg-5 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="section-title two">
                <span>Calculate Your Interest</span>
                <h2>Calculate Your Mortgage.</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 d-flex justify-content-md-end btn_wrapper">
              <Link href="/contact" className="contact-btn">
                <svg width={36} height={38} viewBox="0 0 36 38" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.8419 20.5252H26.8422C26.7366 18.4078 25.8771 16.3213 24.2635 14.7076C20.8101 11.2541 15.191 11.2541 11.7375 14.7076C10.1238 16.3212 9.26439 18.4078 9.15877 20.5252H2.15898C2.04088 20.5252 1.92761 20.5722 1.8441 20.6557C1.76059 20.7392 1.71367 20.8524 1.71367 20.9706C1.71383 21.9878 1.80864 23.0029 1.99689 24.0026C2.01424 24.0946 2.06013 24.1787 2.12804 24.2431C2.19595 24.3075 2.28242 24.3489 2.37518 24.3614L5.2522 24.748C5.51512 25.6386 5.87106 26.4991 6.31412 27.3152L4.55343 29.6225C4.49663 29.6969 4.46473 29.7873 4.46226 29.8808C4.4598 29.9744 4.48689 30.0664 4.5397 30.1437C5.11362 30.9835 5.76435 31.7681 6.48349 32.4875C7.20283 33.2067 7.98748 33.8575 8.82731 34.4314C8.90463 34.4842 8.99662 34.5112 9.0902 34.5088C9.18379 34.5063 9.27421 34.4744 9.34863 34.4176L11.6558 32.6568C12.4719 33.0999 13.3324 33.456 14.2231 33.719L14.6096 36.5958C14.6221 36.6886 14.6635 36.7751 14.7279 36.843C14.7923 36.9109 14.8765 36.9568 14.9685 36.9742C15.9747 37.1639 16.9879 37.2587 18.001 37.2587C19.0141 37.2587 20.0269 37.1639 21.0326 36.9742C21.1246 36.9568 21.2087 36.9109 21.2732 36.843C21.3376 36.7751 21.3789 36.6886 21.3914 36.5958L21.7779 33.7191C22.6687 33.4562 23.5292 33.1002 24.3454 32.657L26.6524 34.4175C26.7268 34.4743 26.8172 34.5062 26.9108 34.5087C27.0044 34.5112 27.0964 34.4841 27.1737 34.4312C28.0134 33.8573 28.7981 33.2066 29.5175 32.4875C30.2367 31.7682 30.8875 30.9835 31.4614 30.1436C31.5142 30.0663 31.5412 29.9743 31.5388 29.8808C31.5363 29.7872 31.5044 29.6968 31.4476 29.6224L29.6874 27.3159C30.1307 26.4995 30.4869 25.6387 30.7499 24.7478L33.6257 24.3614C33.7185 24.3489 33.805 24.3075 33.8729 24.2431C33.9408 24.1787 33.9867 24.0945 34.0041 24.0025C34.1922 23.0028 34.2869 21.9878 34.2872 20.9706C34.2872 20.8524 34.2402 20.7392 34.1567 20.6557C34.0732 20.5722 33.96 20.5252 33.8419 20.5252H33.8419ZM12.3673 15.3373C13.9204 13.7843 15.9604 13.0078 18.0005 13.0078C20.0405 13.0078 22.0806 13.7843 23.6337 15.3373C26.5516 18.2553 26.7282 22.8922 24.1638 26.0185C23.2114 24.5332 21.7721 23.4598 20.1171 22.962C21.3456 22.2353 22.1718 20.8975 22.1718 19.3697C22.1718 17.0695 20.3006 15.1983 18.0005 15.1983C15.7003 15.1983 13.8291 17.0695 13.8291 19.3697C13.8291 20.8974 14.6553 22.2353 15.8838 22.962C14.2289 23.4598 12.7896 24.5332 11.8371 26.0185C9.27277 22.8921 9.44934 18.2553 12.3673 15.3373ZM14.7197 19.3697C14.7197 17.5606 16.1914 16.0889 18.0005 16.0889C19.8095 16.0889 21.2812 17.5606 21.2812 19.3697C21.2812 21.1787 19.8095 22.6503 18.0005 22.6503C16.1914 22.6503 14.7197 21.1787 14.7197 19.3697ZM23.5368 26.6982C20.4557 29.6777 15.5451 29.6777 12.464 26.6982C13.6212 24.7431 15.7131 23.5411 18.0004 23.5411C20.2877 23.5411 22.3797 24.743 23.5368 26.6982ZM33.1849 23.522L30.3418 23.904C30.2549 23.9156 30.1734 23.9527 30.1075 24.0105C30.0416 24.0683 29.9942 24.1442 29.9713 24.2288C29.6962 25.244 29.2924 26.2198 28.7698 27.1326C28.7262 27.2086 28.7061 27.2958 28.7119 27.3832C28.7176 27.4706 28.7491 27.5544 28.8023 27.624L30.5422 29.9042C30.0454 30.5998 29.492 31.2533 28.8877 31.8578C28.2831 32.4621 27.6297 33.0155 26.9341 33.5123L24.6536 31.772C24.5839 31.7189 24.5001 31.6874 24.4127 31.6817C24.3253 31.6759 24.2381 31.696 24.162 31.7395C23.2495 32.262 22.2738 32.6656 21.2589 32.9405C21.1743 32.9635 21.0983 33.0109 21.0405 33.0768C20.9827 33.1427 20.9457 33.2242 20.934 33.3111L20.5519 36.1552C18.8628 36.439 17.1382 36.439 15.449 36.1552L15.067 33.311C15.0553 33.2241 15.0182 33.1426 14.9605 33.0767C14.9027 33.0108 14.8268 32.9634 14.7422 32.9405C13.7273 32.6655 12.7517 32.2619 11.8392 31.7395C11.7631 31.6959 11.6759 31.6758 11.5885 31.6816C11.5011 31.6873 11.4173 31.7188 11.3476 31.7719L9.06682 33.5125C8.37118 33.0157 7.71777 32.4622 7.11323 31.8578C6.50891 31.2533 5.95551 30.5999 5.45867 29.9043L7.19925 27.6235C7.2524 27.5539 7.28382 27.4701 7.28959 27.3827C7.29536 27.2953 7.27522 27.2081 7.23168 27.132C6.70936 26.2195 6.30578 25.2439 6.03075 24.229C6.0078 24.1445 5.9604 24.0686 5.89449 24.0108C5.82859 23.953 5.74711 23.916 5.66025 23.9043L2.81597 23.5222C2.69971 22.8256 2.63115 22.122 2.61075 21.4161H9.15877C9.26112 23.4682 10.0717 25.4912 11.5906 27.083C11.5933 27.0859 11.596 27.0888 11.5989 27.0915C11.6446 27.1392 11.6906 27.1867 11.7375 27.2337C13.4642 28.9604 15.7323 29.8237 18.0005 29.8237C20.2686 29.8237 22.5367 28.9603 24.2634 27.2337C24.3102 27.187 24.356 27.1395 24.4016 27.092C24.4048 27.0889 24.4078 27.0857 24.4109 27.0825C25.9294 25.4909 26.7398 23.4681 26.8422 21.4162H33.3902C33.3698 22.122 33.3012 22.8257 33.185 23.5223L33.1849 23.522ZM13.5804 4.56939L15.8948 6.24421L15.0068 8.95951C14.9775 9.04903 14.9774 9.14551 15.0064 9.2351C15.0355 9.32469 15.0921 9.40277 15.1683 9.45813C15.2445 9.51348 15.3363 9.54327 15.4305 9.5432C15.5246 9.54313 15.6164 9.51321 15.6925 9.45774L18.0005 7.77401L20.3084 9.45774C20.3866 9.51474 20.4788 9.54324 20.5709 9.54324C20.663 9.54324 20.7546 9.51489 20.8326 9.45818C20.9088 9.4028 20.9655 9.32469 20.9945 9.23508C21.0235 9.14547 21.0234 9.04896 20.9941 8.95943L20.1061 6.24414L22.4206 4.56932C22.4969 4.51417 22.5537 4.43626 22.583 4.34677C22.6122 4.25728 22.6123 4.16083 22.5833 4.07127C22.5543 3.98171 22.4976 3.90364 22.4215 3.8483C22.3453 3.79295 22.2536 3.76317 22.1594 3.76323H22.1586L19.3017 3.76872L18.4242 1.05009C18.3953 0.960375 18.3387 0.882132 18.2626 0.826625C18.1864 0.771118 18.0946 0.741211 18.0004 0.741211C17.9061 0.741211 17.8143 0.771118 17.7382 0.826625C17.662 0.882132 17.6054 0.960375 17.5766 1.05009L16.699 3.76872L13.8423 3.76323H13.8414C13.7473 3.76322 13.6556 3.79303 13.5794 3.84838C13.5033 3.90373 13.4467 3.98178 13.4177 4.07132C13.3887 4.16086 13.3888 4.25729 13.418 4.34676C13.4472 4.43623 13.504 4.51415 13.5803 4.56932L13.5804 4.56939ZM17.0222 4.66016H17.0231C17.1173 4.66016 17.209 4.6303 17.2852 4.57486C17.3613 4.51943 17.4179 4.44127 17.4469 4.35164L18.0005 2.63666L18.5541 4.35164C18.583 4.44128 18.6396 4.51945 18.7157 4.57489C18.7919 4.63033 18.8836 4.66019 18.9778 4.66016H18.9787L20.7808 4.65667L19.3208 5.71318C19.2444 5.76848 19.1875 5.84663 19.1584 5.93634C19.1292 6.02606 19.1293 6.12272 19.1586 6.21237L19.7188 7.92519L18.2629 6.86305C18.1847 6.80598 18.0926 6.77755 18.0005 6.77755C17.9083 6.77755 17.8162 6.80605 17.738 6.86305L16.2821 7.92519L16.8423 6.21237C16.8716 6.12272 16.8717 6.02606 16.8426 5.93634C16.8134 5.84663 16.7565 5.76848 16.6801 5.71318L15.2201 4.65667L17.0223 4.66016H17.0222ZM1.80013 16.7348C1.77089 16.8243 1.77078 16.9208 1.7998 17.0104C1.82883 17.1 1.88551 17.1781 1.9617 17.2334C2.03789 17.2888 2.12966 17.3186 2.22383 17.3185C2.31801 17.3184 2.40974 17.2885 2.48584 17.233L4.7939 15.5493L7.10188 17.233C7.17796 17.2886 7.26971 17.3186 7.36391 17.3186C7.45811 17.3187 7.54991 17.2889 7.62608 17.2335C7.70228 17.1781 7.75895 17.1 7.78797 17.0104C7.81699 16.9208 7.81685 16.8243 7.78758 16.7347L6.89956 14.0194L9.21399 12.3446C9.29025 12.2895 9.34706 12.2115 9.37627 12.1221C9.40548 12.0326 9.4056 11.9362 9.37659 11.8466C9.34759 11.7571 9.29096 11.679 9.21484 11.6237C9.13872 11.5683 9.04701 11.5385 8.95289 11.5385H8.95208L6.09525 11.544L5.21768 8.82539C5.18883 8.73568 5.13226 8.65744 5.0561 8.60193C4.97994 8.54642 4.88813 8.51652 4.7939 8.51652C4.69966 8.51652 4.60785 8.54642 4.53169 8.60193C4.45553 8.65744 4.39896 8.73568 4.37011 8.82539L3.49254 11.544L0.635716 11.5385H0.634825C0.540705 11.5385 0.449001 11.5683 0.372877 11.6237C0.296754 11.679 0.240126 11.7571 0.211123 11.8466C0.18212 11.9362 0.182233 12.0326 0.211446 12.1221C0.240659 12.2115 0.29747 12.2895 0.373724 12.3446L2.68816 14.0194L1.80013 16.7347V16.7348ZM2.01351 12.4318L3.81562 12.4353H3.81651C3.9107 12.4353 4.00246 12.4055 4.07861 12.35C4.15476 12.2946 4.21137 12.2164 4.2403 12.1268L4.7939 10.4119L5.34749 12.1268C5.37643 12.2164 5.43303 12.2946 5.50918 12.35C5.58533 12.4055 5.67709 12.4353 5.77128 12.4353H5.77217L7.57428 12.4318L6.11432 13.4883C6.03789 13.5436 5.98099 13.6218 5.95183 13.7115C5.92267 13.8012 5.92276 13.8979 5.95208 13.9875L6.51228 15.7004L5.05641 14.6383C4.9802 14.5827 4.8883 14.5527 4.79397 14.5527C4.69964 14.5527 4.60774 14.5827 4.53153 14.6383L3.07558 15.7004L3.63579 13.9875C3.66511 13.8979 3.66521 13.8012 3.63607 13.7115C3.60692 13.6218 3.55004 13.5436 3.47362 13.4883L2.01366 12.4318H2.01351ZM35.7896 11.8462C35.7606 11.7568 35.704 11.6789 35.6279 11.6236C35.5518 11.5683 35.4602 11.5385 35.3662 11.5385H35.3653L32.5085 11.544L31.631 8.82532C31.6021 8.73561 31.5455 8.65736 31.4694 8.60185C31.3932 8.54635 31.3014 8.51644 31.2072 8.51644C31.1129 8.51644 31.0211 8.54635 30.945 8.60185C30.8688 8.65736 30.8122 8.73561 30.7834 8.82532L29.9058 11.544L27.0489 11.5385H27.0481C26.954 11.5385 26.8623 11.5683 26.7861 11.6237C26.71 11.679 26.6534 11.7571 26.6244 11.8466C26.5954 11.9362 26.5955 12.0326 26.6247 12.1221C26.6539 12.2115 26.7107 12.2895 26.787 12.3446L29.1014 14.0194L28.2134 16.7347C28.1841 16.8243 28.184 16.9208 28.213 17.0104C28.242 17.1 28.2987 17.1781 28.3749 17.2334C28.4511 17.2888 28.5429 17.3186 28.6371 17.3185C28.7313 17.3185 28.823 17.2885 28.8991 17.233L31.2072 15.5493L33.5151 17.233C33.5912 17.2885 33.683 17.3184 33.7771 17.3185C33.8713 17.3186 33.9631 17.2889 34.0393 17.2336C34.1155 17.1782 34.1721 17.1001 34.2012 17.0105C34.2302 16.9209 34.2301 16.8244 34.2008 16.7348L33.3127 14.0194L35.6273 12.3448C35.7036 12.2895 35.7604 12.2115 35.7896 12.122C35.8188 12.0324 35.8188 11.9358 35.7896 11.8462ZM32.5274 13.4883C32.451 13.5436 32.3941 13.6217 32.365 13.7115C32.3358 13.8012 32.3359 13.8979 32.3652 13.9875L32.9255 15.7004L31.4696 14.6383C31.3934 14.5827 31.3015 14.5528 31.2072 14.5528C31.1128 14.5528 31.0209 14.5827 30.9447 14.6383L29.4888 15.7005L30.049 13.9875C30.0783 13.8979 30.0784 13.8012 30.0492 13.7115C30.0201 13.6218 29.9632 13.5436 29.8867 13.4883L28.4267 12.4318L30.2289 12.4353H30.2298C30.324 12.4353 30.4157 12.4055 30.4919 12.35C30.568 12.2946 30.6246 12.2164 30.6536 12.1268L31.2072 10.4118L31.7608 12.1268C31.7897 12.2164 31.8463 12.2946 31.9224 12.35C31.9986 12.4055 32.0904 12.4353 32.1845 12.4353H32.1854L33.9875 12.4318L32.5274 13.4883Z" />
                </svg>
                <span>TALK WITH <br /> EXPERT</span>
              </Link>
            </div>
          </div>
          <div className="row gy-5">
            <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ul className="progress-bar-area">
                <li className="single-progress">
                  <div className="title-area">
                    <h6>Property Price</h6>
                    <span>$45967.56</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '86%' }} aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
                <li className="single-progress">
                  <div className="title-area">
                    <h6>Down Payment</h6>
                    <span>$18969.32</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
                <li className="single-progress">
                  <div className="title-area">
                    <h6>Length Of Loan</h6>
                    <span>1 Year</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
                <li className="single-progress">
                  <div className="title-area">
                    <h6>Interest Rate</h6>
                    <span>3.5%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="mini-statement-area">
                <div className="logo">
                  <img src="assets/img/home2/bank-logo.png" alt="" />
                </div>
                <div className="content">
                  <div className="price-area">
                    <h4>$1585.24</h4>
                    <span>Monthly Installment</span>
                  </div>
                  <p>*Sed nisl eros, condimentum nec risu siami finibus conguese.Fusen fringi est libero sed tempus urna feugiat eu.</p>
                </div>
                <a href="#" className="primary-btn2">
                  <span>
                    Register Interest
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="home2-contact-section mb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title two text-center mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                <h2>Get In Touch!</h2>
                <p>Sed nisl eros, condimentum nec risus sit amet, finibus conguese.Fusen fringilla est libero, sed tempus urna feugiat eu. Curabitur eu feugiat ligu Suspendisse nectoraba porttitor velit.
                </p>
              </div>
              <form className="contact-form wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="form-inner">
                      <input type="text" placeholder="Full Name" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-inner">
                      <input type="email" placeholder="Enter Your Email..." />
                    </div>
                  </div>
                  <div className="col-sm-12 d-flex justify-content-center">
                    <button type="submit" className="primary-btn2">
                      <span>
                        Submit Now
                        <svg viewBox="0 0 13 20">
                          <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img src="assets/img/home2/home2-contact-vector1.png" alt="" className="vector1" />
        <img src="assets/img/home2/home2-contact-vector2.png" alt="" className="vector2" />
      </div>   
    </>
  )
}

export default ContactSection