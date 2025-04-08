import { Flame } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay for animation to start
    return () => clearTimeout(timer);
  }, []);

  const resources = [
    { text: 'Blog', link: '/blog' },
    { text: 'Rental Policies', link: '/rental-policies' },
    { text: 'FAQ', link: '/faq' },
    { text: 'Privacy Policy', link: '/privacy' },
  ];

  const company = [
    { text: 'About ThriftKicks', link: '/about' },
    { text: 'Careers', link: '/careers' },
    { text: 'Contact Us', link: '/contact' },
  ];

  return (
    <footer>
    <div className="flex flex-col mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
      {/* LOGO */}
      {/* <svg
        className="lg:hidden"
        width="207"
        height="43"
        viewBox="0 0 207 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.7843 12.6256C22.0342 12.7248 23.185 12.824 24.3358 12.9232C24.5937 12.943 24.8517 12.9827 25.0699 13.0819C25.5064 13.2605 25.7247 13.6176 25.7644 14.1137C25.804 14.7684 25.685 15.3835 25.4469 15.9787C25.1691 16.693 24.8715 17.3874 24.5342 18.062C23.7207 19.7287 22.8279 21.3556 21.8557 22.9429C19.9311 26.0381 18.0263 29.1135 16.1613 32.2484C15.2684 33.7365 14.5343 35.3039 13.701 36.8118C12.8677 38.3396 11.9947 39.8674 11.1613 41.3951C10.705 42.2483 9.93119 42.6649 9.07803 42.9229C8.08597 43.2205 7.05424 42.6253 6.73678 41.6332C6.49869 40.8792 6.47885 40.1054 6.77646 39.3912C7.31217 38.1015 7.92725 36.8515 8.54232 35.6015C8.74073 35.2047 9.05819 34.8872 9.45501 34.6492C10.0502 34.292 10.3677 34.4111 10.5264 35.0658C10.5463 35.1253 10.5463 35.1849 10.5859 35.3436C10.7248 35.1452 10.824 35.0261 10.9034 34.8872C12.2328 32.7444 13.4431 30.5222 14.5343 28.2405C16.2407 24.6691 18.1454 21.2168 20.0501 17.7446C20.3279 17.2287 20.6652 16.7525 20.9628 16.2367C21.0422 16.0978 21.1216 15.9787 21.2208 15.8001C20.5263 15.7605 19.8914 15.7208 19.2763 15.6811C19.0978 15.6613 18.9986 15.7605 18.8994 15.9192C18.6613 16.2962 18.4232 16.6732 18.1851 17.0501C17.689 17.8835 16.9549 18.2604 15.9827 18.1811C15.7049 18.1612 15.4073 18.1612 15.1296 18.0819C14.3756 17.9033 13.9986 17.2287 14.197 16.4747C14.2565 16.2565 14.3558 16.0581 14.455 15.8597C16.3399 12.4867 18.2049 9.13355 20.1097 5.78042C20.6652 4.8082 21.3001 3.87567 21.8954 2.90346C21.9747 2.76457 22.0541 2.64553 22.1533 2.46696C21.8755 2.44712 21.6771 2.44712 21.4588 2.40744C20.9628 2.32807 20.7049 2.0503 20.6454 1.61379C20.6057 1.2765 20.7247 1.05824 21.0422 0.919356C21.2406 0.839992 21.3795 0.701105 21.5382 0.582058C21.7168 0.443171 21.9747 0.304283 22.2128 0.304283C23.1652 0.24476 24.0779 0.205078 25.0104 0.205078C25.3477 0.205078 25.7048 0.264601 26.0421 0.343966C26.7366 0.502694 27.054 1.01856 26.8556 1.69316C26.7564 2.0503 26.5977 2.40744 26.3794 2.72489C25.6056 3.79631 24.931 4.94709 24.3358 6.1574C23.3239 8.20102 22.2327 10.1851 21.062 12.1296C20.9827 12.2684 20.9033 12.4073 20.7843 12.6256Z"
          fill="black"
        />
        <path
          d="M6.4882 20.3916L6.5742 20.8216C6.57487 20.8249 6.57574 20.8291 6.57676 20.834C6.58442 20.8709 6.60069 20.9493 6.60526 21.0224C6.60888 21.0804 6.60784 21.1622 6.58308 21.2526C6.57694 21.9535 6.57272 22.6558 6.5685 23.3589C6.55966 24.8291 6.55081 26.3027 6.5243 27.7738L6.5243 27.7739C6.4945 29.4032 6.4498 31.032 6.40518 32.6582L6.40515 32.6594C6.3605 34.2868 6.31592 35.9114 6.28621 37.5357L6.28618 37.5375C6.26999 38.2821 6.32187 39.0253 6.37478 39.7832C6.38471 39.9255 6.39467 40.0682 6.40423 40.2116L6.40506 40.224L6.40491 40.224C6.41867 40.5543 6.54965 40.8316 6.82161 41.0893C6.9972 41.25 7.16622 41.31 7.30058 41.3123C7.42781 41.3146 7.57547 41.2669 7.72716 41.1089L7.73423 41.1015L7.7343 41.1016C7.87565 40.9602 7.98587 40.7791 8.09699 40.5569L8.09867 40.5536C8.73996 39.2948 9.37951 38.0268 10.0202 36.7565C10.9812 34.8513 11.9447 32.9409 12.9207 31.0485C14.4892 27.9711 16.0772 24.934 17.6842 21.8787C17.9891 21.2893 18.3392 20.691 18.7353 20.1489C18.7354 20.1487 18.7355 20.1486 18.7356 20.1484L19.1393 20.4434C19.6684 19.7159 20.2152 19.006 20.7619 18.2962C21.0353 17.9412 21.3086 17.5863 21.5798 17.2292L6.4882 20.3916ZM6.4882 20.3916L6.05065 20.4207C5.98378 20.4252 5.91758 20.4296 5.85194 20.4341C5.32961 20.4691 4.84277 20.5018 4.3405 20.5191L4.33248 20.5194L4.32448 20.5199C3.43136 20.5795 2.52378 20.6387 1.63715 20.6781L1.62335 20.6787L1.6096 20.68C1.44453 20.6966 1.29948 20.6966 1.13447 20.6801C0.872502 20.6531 0.706772 20.5425 0.61402 20.4139C0.521574 20.2857 0.468648 20.0937 0.519927 19.8406M6.4882 20.3916L0.519927 19.8406M0.519927 19.8406C0.523892 19.8247 0.527096 19.8121 0.53031 19.8002C0.533771 19.7874 0.536419 19.7785 0.538473 19.7722L0.558923 19.7415L0.578931 19.6891C1.48323 17.3178 2.12403 14.8924 2.71995 12.469C3.39375 9.79366 4.08748 7.11784 4.78152 4.46065C4.84947 4.20836 4.92244 3.95532 4.99688 3.69729L4.9975 3.69511C5.07113 3.43987 5.14618 3.17969 5.21648 2.91876C5.30031 2.62693 5.41363 2.42893 5.54835 2.29881C5.67652 2.17501 5.85556 2.08177 6.13506 2.05214C6.48578 2.01703 6.83295 1.97058 7.17003 1.92547C7.22373 1.91829 7.27717 1.91114 7.33033 1.90407C7.72036 1.85223 8.0988 1.80447 8.47899 1.77584C12.0638 1.55665 15.6456 1.15855 19.1961 0.742022C20.0802 0.643813 20.9846 0.565154 21.8699 0.506119C22.1474 0.488863 22.4084 0.507502 22.6414 0.569638L22.6414 0.569828L22.655 0.573061C22.8951 0.629933 23.0329 0.76016 23.0997 0.900923C23.1678 1.04459 23.1827 1.24433 23.0865 1.47199C23.0098 1.63925 22.8996 1.79905 22.7574 2.00215L22.7518 2.01021L22.7465 2.0185C22.6483 2.17114 22.5491 2.32397 22.4496 2.47724C22.1929 2.87247 21.9343 3.27067 21.6881 3.6762L21.6881 3.67618L21.6848 3.68169C21.4288 4.11581 21.1749 4.54888 20.9217 4.98085C20.269 6.09435 19.6206 7.2005 18.9506 8.29815C18.0199 9.82291 17.0692 11.348 16.1171 12.8754C15.843 13.306 15.5686 13.7177 15.2908 14.1344C15.2249 14.2333 15.1572 14.3473 15.0808 14.4758C15.0551 14.5192 15.0283 14.5642 15.0003 14.6109L14.546 15.3681H15.429H15.4302H15.4314H15.4325H15.4337H15.4348H15.436H15.4371H15.4383H15.4394H15.4406H15.4417H15.4429H15.444H15.4451H15.4463H15.4474H15.4486H15.4497H15.4508H15.4519H15.4531H15.4542H15.4553H15.4564H15.4576H15.4587H15.4598H15.4609H15.462H15.4631H15.4642H15.4653H15.4664H15.4675H15.4686H15.4697H15.4708H15.4719H15.473H15.4741H15.4752H15.4763H15.4774H15.4785H15.4796H15.4807H15.4817H15.4828H15.4839H15.485H15.4861H15.4871H15.4882H15.4893H15.4903H15.4914H15.4925H15.4935H15.4946H15.4957H15.4967H15.4978H15.4988H15.4999H15.5009H15.502H15.503H15.5041H15.5051H15.5062H15.5072H15.5083H15.5093H15.5103H15.5114H15.5124H15.5134H15.5145H15.5155H15.5165H15.5176H15.5186H15.5196H15.5206H15.5217H15.5227H15.5237H15.5247H15.5257H15.5268H15.5278H15.5288H15.5298H15.5308H15.5318H15.5328H15.5338H15.5348H15.5358H15.5368H15.5378H15.5388H15.5398H15.5408H15.5418H15.5428H15.5438H15.5448H15.5457H15.5467H15.5477H15.5487H15.5497H15.5507H15.5516H15.5526H15.5536H15.5546H15.5555H15.5565H15.5575H15.5584H15.5594H15.5604H15.5613H15.5623H15.5633H15.5642H15.5652H15.5661H15.5671H15.568H15.569H15.5699H15.5709H15.5718H15.5728H15.5737H15.5747H15.5756H15.5766H15.5775H15.5784H15.5794H15.5803H15.5813H15.5822H15.5831H15.5841H15.585H15.5859H15.5868H15.5878H15.5887H15.5896H15.5905H15.5915H15.5924H15.5933H15.5942H15.5951H15.5961H15.597H15.5979H15.5988H15.5997H15.6006H15.6015H15.6024H15.6033H15.6042H15.6051H15.606H15.6069H15.6078H15.6087H15.6096H15.6105H15.6114H15.6123H15.6132H15.6141H15.615H15.6159H15.6168H15.6177H15.6186H15.6194H15.6203H15.6212H15.6221H15.623H15.6238H15.6247H15.6256H15.6265H15.6273H15.6282H15.6291H15.63H15.6308H15.6317H15.6326H15.6334H15.6343H15.6352H15.636H15.6369H15.6377H15.6386H15.6395H15.6403H15.6412H15.642H15.6429H15.6437H15.6446H15.6454H15.6463H15.6471H15.648H15.6488H15.6497H15.6505H15.6514H15.6522H15.6531H15.6539H15.6547H15.6556H15.6564H15.6573H15.6581H15.6589H15.6598H15.6606H15.6614H15.6623H15.6631H15.6639H15.6647H15.6656H15.6664H15.6672H15.6681H15.6689H15.6697H15.6705H15.6713H15.6722H15.673H15.6738H15.6746H15.6754H15.6762H15.6771H15.6779H15.6787H15.6795H15.6803H15.6811H15.6819H15.6827H15.6835H15.6843H15.6852H15.686H15.6868H15.6876H15.6884H15.6892H15.69H15.6908H15.6916H15.6924H15.6932H15.694H15.6947H15.6955H15.6963H15.6971H15.6979H15.6987H15.6995H15.7003H15.7011H15.7019H15.7027H15.7034H15.7042H15.705H15.7058H15.7066H15.7074H15.7081H15.7089H15.7097H15.7105H15.7113H15.712H15.7128H15.7136H15.7144H15.7151H15.7159H15.7167H15.7175H15.7182H15.719H15.7198H15.7205H15.7213H15.7221H15.7228H15.7236H15.7244H15.7251H15.7259H15.7267H15.7274H15.7282H15.729H15.7297H15.7305H15.7312H15.732H15.7328H15.7335H15.7343H15.735H15.7358H15.7365H15.7373H15.7381H15.7388H15.7396H15.7403H15.7411H15.7418H15.7426H15.7433H15.7441H15.7448H15.7456H15.7463H15.7471H15.7478H15.7485H15.7493H15.75H15.7508H15.7515H15.7523H15.753H15.7537H15.7545H15.7552H15.756H15.7567H15.7574H15.7582H15.7589H15.7597H15.7604H15.7611H15.7619H15.7626H15.7633H15.7641H15.7648H15.7655H15.7663H15.767H15.7677H15.7685H15.7692H15.7699H15.7707H15.7714H15.7721H15.7728H15.7736H15.7743H15.775H15.7758H15.7765H15.7772H15.7779H15.7787H15.7794H15.7801H15.7808H15.7815H15.7823H15.783H15.7837H15.7844H15.7852H15.7859H15.7866H15.7873H15.788H15.7888H15.7895H15.7902H15.7909H15.7916H15.7923H15.7931H15.7938H15.7945H15.7952H15.7959H15.7966H15.7973H15.7981H15.7988H15.7995H15.8002H15.8009H15.8016H15.8023H15.8031H15.8038H15.8045H15.8052H15.8059H15.8066H15.8073H15.808H15.8087H15.8094H15.8102H15.8109H15.8116H15.8123H15.813H15.8137H15.8144H15.8151H15.8158H15.8165H15.8172H15.8179H15.8186H15.8193H15.82H15.8208H15.8215H15.8222H15.8229H15.8236H15.8243H15.825H15.8257H15.8264H15.8271H15.8278H15.8285H15.8292H15.8299H15.8306H15.8313H15.832H15.8327H15.8334H15.8341H15.8348H15.8355H15.8362H15.8369H15.8376H15.8383H15.839H15.8397H15.8404H15.8411H15.8418H15.8425H15.8432H15.8439H15.8446H15.8453H15.846H15.8467H15.8474H15.8481H15.8488H15.8495H15.8502H15.8509H15.8516H15.8523H15.853H15.8537H15.8544H15.8551H15.8558H15.8565H15.8572H15.8579H15.8586H15.8593H15.86H15.8607H15.8614H15.8621H15.8625C16.6864 15.378 17.5099 15.383 18.3317 15.3879L18.3328 15.3879C19.1564 15.3929 19.9783 15.3979 20.8 15.4078V15.4078H20.806C20.8777 15.4078 20.9768 15.4203 21.0895 15.4388L0.519927 19.8406Z"
          fill="white"
          stroke="black"
        /> */}
        {/* <path
          d="M37.8916 7.62575V29.4002H42.6198V20.6593H55.7778V16.3978H42.6198V11.9184H56.431V7.62575H37.8916Z"
          fill="black"
        />
        <path
          d="M62.8807 29.4002V7.03473H58.1837V29.4002H62.8807Z"
          fill="black"
        />
        <path
          d="M74.0555 11.6385C68.7674 11.6385 64.3503 14.5314 64.3503 20.5349C64.3503 26.5696 68.7674 29.4002 74.0555 29.4002C79.3747 29.4002 83.7918 26.6629 83.7918 20.5349C83.7918 14.4692 79.3747 11.6385 74.0555 11.6385ZM74.0555 25.1075C71.1004 25.1075 68.9851 23.8011 68.9851 20.5349C68.9851 17.2376 71.1004 15.9623 74.0555 15.9623C77.0417 15.9623 79.1569 17.2998 79.1569 20.5349C79.1569 23.6767 77.0417 25.1075 74.0555 25.1075Z"
          fill="black"
        />
        <path
          d="M108.385 11.9495L104.341 24.7965L100.359 11.9495H95.7556L91.8051 24.7965L87.7613 11.9495H83.002L88.4767 29.4002H94.8846L98.0575 19.0729L101.261 29.4002H107.669L113.144 11.9495H108.385Z"
          fill="black"
        />
        <path
          d="M122.102 18.8241L121.698 18.7929C118.649 18.3264 118.121 17.8909 118.121 17.1132C118.121 16.5844 118.681 15.6201 121.325 15.6201C124.062 15.6201 125.244 16.3666 125.244 17.7353V17.8909H130.065V17.7353C130.065 15.0602 128.541 11.8562 121.325 11.8562C114.606 11.8562 113.206 14.7491 113.206 17.1754C113.206 20.6593 116.316 21.7792 121.325 22.4324C121.573 22.4635 121.822 22.4946 122.071 22.5257C123.969 22.7435 125.648 22.9923 125.648 24.2988C125.648 25.4497 123.844 25.6986 121.947 25.6986C118.805 25.6986 117.685 25.0142 117.685 23.5211V23.3656H112.833V23.7078C112.801 24.6098 112.801 26.0718 114.015 27.285C115.414 28.6848 118.121 29.4002 122.071 29.4002C127.421 29.4002 130.532 28.5604 130.532 24.2366C130.532 20.0994 126.053 19.4151 122.102 18.8241Z"
          fill="black"
        />
        <path
          d="M143.598 11.9806C140.363 11.9806 138.372 13.0072 137.19 14.5314H136.941V11.9806H132.213V36.057H136.941V27.005H137.159C138.341 28.5293 140.332 29.4625 143.598 29.4625C150.939 29.4625 151.748 23.0545 151.748 20.7215C151.748 18.1708 150.97 11.9806 143.598 11.9806ZM142.23 25.3875C138.124 25.3875 137.284 23.3656 137.284 20.7215C137.284 18.3575 138.124 16.0556 142.23 16.0556C146.74 16.0556 147.238 19.3529 147.238 20.7215C147.238 21.9658 146.74 25.3875 142.23 25.3875Z"
          fill="black"
        />
        <path
          d="M167.153 14.5314C165.971 12.9761 164.011 11.9495 160.776 11.9495C153.404 11.9495 152.626 18.1397 152.626 20.6904C152.626 23.0234 153.435 29.4002 160.745 29.4002C164.042 29.4002 166.033 28.4981 167.215 26.9739H167.371V29.4002H172.099V11.9495H167.371V14.5314H167.153ZM162.145 25.3564C157.634 25.3564 157.137 21.9347 157.137 20.6904C157.137 19.3218 157.603 16.0245 162.145 16.0245C166.22 16.0245 167.06 18.3264 167.06 20.6904C167.06 23.3345 166.22 25.3564 162.145 25.3564Z"
          fill="black"
        />
        <path
          d="M183.909 11.9495C180.891 11.9495 179.834 12.8516 178.838 14.5314H178.558V11.9495H173.83V29.4002H178.558V21.5925C178.558 19.2284 179.585 16.4911 183.1 16.4911C184.593 16.4911 185.806 16.7399 186.242 16.8644L186.988 12.4161C186.18 12.2295 185.153 11.9495 183.909 11.9495Z"
          fill="black"
        />
        <path
          d="M206.93 11.9495H200.366L192.683 19.5395V6.94141H187.986V29.3691H192.683V25.9785L196.074 22.619L200.989 29.4002H206.868L199.527 19.2595L206.93 11.9495Z"
          fill="black"
        />
      </svg> */}
      {/* MIDDLE CONTAINER */}
      <div className="lg:mt-20 mt-10 lg:flex w-full lg:flex-row lg:justify-between">
        {/* NEWSLETTER & EMAIL */}
        <div className="flex flex-col mt-10 lg:mt-0">
          <form action="" className="lg:mt-0 mt-14 max-w-md">
            <div className="relative">
              <label
                htmlFor="email"
                className="font-inter font-medium text-black"
              >
                SUBSCRIBE TO NEWSLETTER
              </label>
              <input
                type="email"
                className="font-inter relative mt-4 w-full rounded-md border border-black bg-gray-100 px-6 py-4 text-base placeholder:text-black text-bla"
                placeholder="Enter your email"
                name="email"
              />
              <button
                type="submit"
                className="font-inter absolute right-0 bottom-0 lg:w-28 rounded-tr-md rounded-br-md border border-black bg-black px-6 py-4 text-base text-white"
              >
                Join
              </button>
            </div>
          </form>
          <div>
            <h3
              htmlFor="email"
              className="font-inter mb-4 mt-8 font-medium text-black"
            >
              EMAIL US
            </h3>
            <p className="font-inter text-base">info@thrifty.co</p>
          </div>
        </div>
        {/* FOOTER LINKS */}
        <div className="flex lg:ml-10 relative mt-10 lg:mt-0">
          {/* LOGO */}
          {/* <svg
            className="lg:absolute lg:-top-28 hidden lg:block"
            width="207"
            height="43"
            viewBox="0 0 207 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7843 12.6256C22.0342 12.7248 23.185 12.824 24.3358 12.9232C24.5937 12.943 24.8517 12.9827 25.0699 13.0819C25.5064 13.2605 25.7247 13.6176 25.7644 14.1137C25.804 14.7684 25.685 15.3835 25.4469 15.9787C25.1691 16.693 24.8715 17.3874 24.5342 18.062C23.7207 19.7287 22.8279 21.3556 21.8557 22.9429C19.9311 26.0381 18.0263 29.1135 16.1613 32.2484C15.2684 33.7365 14.5343 35.3039 13.701 36.8118C12.8677 38.3396 11.9947 39.8674 11.1613 41.3951C10.705 42.2483 9.93119 42.6649 9.07803 42.9229C8.08597 43.2205 7.05424 42.6253 6.73678 41.6332C6.49869 40.8792 6.47885 40.1054 6.77646 39.3912C7.31217 38.1015 7.92725 36.8515 8.54232 35.6015C8.74073 35.2047 9.05819 34.8872 9.45501 34.6492C10.0502 34.292 10.3677 34.4111 10.5264 35.0658C10.5463 35.1253 10.5463 35.1849 10.5859 35.3436C10.7248 35.1452 10.824 35.0261 10.9034 34.8872C12.2328 32.7444 13.4431 30.5222 14.5343 28.2405C16.2407 24.6691 18.1454 21.2168 20.0501 17.7446C20.3279 17.2287 20.6652 16.7525 20.9628 16.2367C21.0422 16.0978 21.1216 15.9787 21.2208 15.8001C20.5263 15.7605 19.8914 15.7208 19.2763 15.6811C19.0978 15.6613 18.9986 15.7605 18.8994 15.9192C18.6613 16.2962 18.4232 16.6732 18.1851 17.0501C17.689 17.8835 16.9549 18.2604 15.9827 18.1811C15.7049 18.1612 15.4073 18.1612 15.1296 18.0819C14.3756 17.9033 13.9986 17.2287 14.197 16.4747C14.2565 16.2565 14.3558 16.0581 14.455 15.8597C16.3399 12.4867 18.2049 9.13355 20.1097 5.78042C20.6652 4.8082 21.3001 3.87567 21.8954 2.90346C21.9747 2.76457 22.0541 2.64553 22.1533 2.46696C21.8755 2.44712 21.6771 2.44712 21.4588 2.40744C20.9628 2.32807 20.7049 2.0503 20.6454 1.61379C20.6057 1.2765 20.7247 1.05824 21.0422 0.919356C21.2406 0.839992 21.3795 0.701105 21.5382 0.582058C21.7168 0.443171 21.9747 0.304283 22.2128 0.304283C23.1652 0.24476 24.0779 0.205078 25.0104 0.205078C25.3477 0.205078 25.7048 0.264601 26.0421 0.343966C26.7366 0.502694 27.054 1.01856 26.8556 1.69316C26.7564 2.0503 26.5977 2.40744 26.3794 2.72489C25.6056 3.79631 24.931 4.94709 24.3358 6.1574C23.3239 8.20102 22.2327 10.1851 21.062 12.1296C20.9827 12.2684 20.9033 12.4073 20.7843 12.6256Z"
              fill="black"
            />
            <path
              d="M6.4882 20.3916L6.5742 20.8216C6.57487 20.8249 6.57574 20.8291 6.57676 20.834C6.58442 20.8709 6.60069 20.9493 6.60526 21.0224C6.60888 21.0804 6.60784 21.1622 6.58308 21.2526C6.57694 21.9535 6.57272 22.6558 6.5685 23.3589C6.55966 24.8291 6.55081 26.3027 6.5243 27.7738L6.5243 27.7739C6.4945 29.4032 6.4498 31.032 6.40518 32.6582L6.40515 32.6594C6.3605 34.2868 6.31592 35.9114 6.28621 37.5357L6.28618 37.5375C6.26999 38.2821 6.32187 39.0253 6.37478 39.7832C6.38471 39.9255 6.39467 40.0682 6.40423 40.2116L6.40506 40.224L6.40491 40.224C6.41867 40.5543 6.54965 40.8316 6.82161 41.0893C6.9972 41.25 7.16622 41.31 7.30058 41.3123C7.42781 41.3146 7.57547 41.2669 7.72716 41.1089L7.73423 41.1015L7.7343 41.1016C7.87565 40.9602 7.98587 40.7791 8.09699 40.5569L8.09867 40.5536C8.73996 39.2948 9.37951 38.0268 10.0202 36.7565C10.9812 34.8513 11.9447 32.9409 12.9207 31.0485C14.4892 27.9711 16.0772 24.934 17.6842 21.8787C17.9891 21.2893 18.3392 20.691 18.7353 20.1489C18.7354 20.1487 18.7355 20.1486 18.7356 20.1484L19.1393 20.4434C19.6684 19.7159 20.2152 19.006 20.7619 18.2962C21.0353 17.9412 21.3086 17.5863 21.5798 17.2292L6.4882 20.3916ZM6.4882 20.3916L6.05065 20.4207C5.98378 20.4252 5.91758 20.4296 5.85194 20.4341C5.32961 20.4691 4.84277 20.5018 4.3405 20.5191L4.33248 20.5194L4.32448 20.5199C3.43136 20.5795 2.52378 20.6387 1.63715 20.6781L1.62335 20.6787L1.6096 20.68C1.44453 20.6966 1.29948 20.6966 1.13447 20.6801C0.872502 20.6531 0.706772 20.5425 0.61402 20.4139C0.521574 20.2857 0.468648 20.0937 0.519927 19.8406M6.4882 20.3916L0.519927 19.8406M0.519927 19.8406C0.523892 19.8247 0.527096 19.8121 0.53031 19.8002C0.533771 19.7874 0.536419 19.7785 0.538473 19.7722L0.558923 19.7415L0.578931 19.6891C1.48323 17.3178 2.12403 14.8924 2.71995 12.469C3.39375 9.79366 4.08748 7.11784 4.78152 4.46065C4.84947 4.20836 4.92244 3.95532 4.99688 3.69729L4.9975 3.69511C5.07113 3.43987 5.14618 3.17969 5.21648 2.91876C5.30031 2.62693 5.41363 2.42893 5.54835 2.29881C5.67652 2.17501 5.85556 2.08177 6.13506 2.05214C6.48578 2.01703 6.83295 1.97058 7.17003 1.92547C7.22373 1.91829 7.27717 1.91114 7.33033 1.90407C7.72036 1.85223 8.0988 1.80447 8.47899 1.77584C12.0638 1.55665 15.6456 1.15855 19.1961 0.742022C20.0802 0.643813 20.9846 0.565154 21.8699 0.506119C22.1474 0.488863 22.4084 0.507502 22.6414 0.569638L22.6414 0.569828L22.655 0.573061C22.8951 0.629933 23.0329 0.76016 23.0997 0.900923C23.1678 1.04459 23.1827 1.24433 23.0865 1.47199C23.0098 1.63925 22.8996 1.79905 22.7574 2.00215L22.7518 2.01021L22.7465 2.0185C22.6483 2.17114 22.5491 2.32397 22.4496 2.47724C22.1929 2.87247 21.9343 3.27067 21.6881 3.6762L21.6881 3.67618L21.6848 3.68169C21.4288 4.11581 21.1749 4.54888 20.9217 4.98085C20.269 6.09435 19.6206 7.2005 18.9506 8.29815C18.0199 9.82291 17.0692 11.348 16.1171 12.8754C15.843 13.306 15.5686 13.7177 15.2908 14.1344C15.2249 14.2333 15.1572 14.3473 15.0808 14.4758C15.0551 14.5192 15.0283 14.5642 15.0003 14.6109L14.546 15.3681H15.429H15.4302H15.4314H15.4325H15.4337H15.4348H15.436H15.4371H15.4383H15.4394H15.4406H15.4417H15.4429H15.444H15.4451H15.4463H15.4474H15.4486H15.4497H15.4508H15.4519H15.4531H15.4542H15.4553H15.4564H15.4576H15.4587H15.4598H15.4609H15.462H15.4631H15.4642H15.4653H15.4664H15.4675H15.4686H15.4697H15.4708H15.4719H15.473H15.4741H15.4752H15.4763H15.4774H15.4785H15.4796H15.4807H15.4817H15.4828H15.4839H15.485H15.4861H15.4871H15.4882H15.4893H15.4903H15.4914H15.4925H15.4935H15.4946H15.4957H15.4967H15.4978H15.4988H15.4999H15.5009H15.502H15.503H15.5041H15.5051H15.5062H15.5072H15.5083H15.5093H15.5103H15.5114H15.5124H15.5134H15.5145H15.5155H15.5165H15.5176H15.5186H15.5196H15.5206H15.5217H15.5227H15.5237H15.5247H15.5257H15.5268H15.5278H15.5288H15.5298H15.5308H15.5318H15.5328H15.5338H15.5348H15.5358H15.5368H15.5378H15.5388H15.5398H15.5408H15.5418H15.5428H15.5438H15.5448H15.5457H15.5467H15.5477H15.5487H15.5497H15.5507H15.5516H15.5526H15.5536H15.5546H15.5555H15.5565H15.5575H15.5584H15.5594H15.5604H15.5613H15.5623H15.5633H15.5642H15.5652H15.5661H15.5671H15.568H15.569H15.5699H15.5709H15.5718H15.5728H15.5737H15.5747H15.5756H15.5766H15.5775H15.5784H15.5794H15.5803H15.5813H15.5822H15.5831H15.5841H15.585H15.5859H15.5868H15.5878H15.5887H15.5896H15.5905H15.5915H15.5924H15.5933H15.5942H15.5951H15.5961H15.597H15.5979H15.5988H15.5997H15.6006H15.6015H15.6024H15.6033H15.6042H15.6051H15.606H15.6069H15.6078H15.6087H15.6096H15.6105H15.6114H15.6123H15.6132H15.6141H15.615H15.6159H15.6168H15.6177H15.6186H15.6194H15.6203H15.6212H15.6221H15.623H15.6238H15.6247H15.6256H15.6265H15.6273H15.6282H15.6291H15.63H15.6308H15.6317H15.6326H15.6334H15.6343H15.6352H15.636H15.6369H15.6377H15.6386H15.6395H15.6403H15.6412H15.642H15.6429H15.6437H15.6446H15.6454H15.6463H15.6471H15.648H15.6488H15.6497H15.6505H15.6514H15.6522H15.6531H15.6539H15.6547H15.6556H15.6564H15.6573H15.6581H15.6589H15.6598H15.6606H15.6614H15.6623H15.6631H15.6639H15.6647H15.6656H15.6664H15.6672H15.6681H15.6689H15.6697H15.6705H15.6713H15.6722H15.673H15.6738H15.6746H15.6754H15.6762H15.6771H15.6779H15.6787H15.6795H15.6803H15.6811H15.6819H15.6827H15.6835H15.6843H15.6852H15.686H15.6868H15.6876H15.6884H15.6892H15.69H15.6908H15.6916H15.6924H15.6932H15.694H15.6947H15.6955H15.6963H15.6971H15.6979H15.6987H15.6995H15.7003H15.7011H15.7019H15.7027H15.7034H15.7042H15.705H15.7058H15.7066H15.7074H15.7081H15.7089H15.7097H15.7105H15.7113H15.712H15.7128H15.7136H15.7144H15.7151H15.7159H15.7167H15.7175H15.7182H15.719H15.7198H15.7205H15.7213H15.7221H15.7228H15.7236H15.7244H15.7251H15.7259H15.7267H15.7274H15.7282H15.729H15.7297H15.7305H15.7312H15.732H15.7328H15.7335H15.7343H15.735H15.7358H15.7365H15.7373H15.7381H15.7388H15.7396H15.7403H15.7411H15.7418H15.7426H15.7433H15.7441H15.7448H15.7456H15.7463H15.7471H15.7478H15.7485H15.7493H15.75H15.7508H15.7515H15.7523H15.753H15.7537H15.7545H15.7552H15.756H15.7567H15.7574H15.7582H15.7589H15.7597H15.7604H15.7611H15.7619H15.7626H15.7633H15.7641H15.7648H15.7655H15.7663H15.767H15.7677H15.7685H15.7692H15.7699H15.7707H15.7714H15.7721H15.7728H15.7736H15.7743H15.775H15.7758H15.7765H15.7772H15.7779H15.7787H15.7794H15.7801H15.7808H15.7815H15.7823H15.783H15.7837H15.7844H15.7852H15.7859H15.7866H15.7873H15.788H15.7888H15.7895H15.7902H15.7909H15.7916H15.7923H15.7931H15.7938H15.7945H15.7952H15.7959H15.7966H15.7973H15.7981H15.7988H15.7995H15.8002H15.8009H15.8016H15.8023H15.8031H15.8038H15.8045H15.8052H15.8059H15.8066H15.8073H15.808H15.8087H15.8094H15.8102H15.8109H15.8116H15.8123H15.813H15.8137H15.8144H15.8151H15.8158H15.8165H15.8172H15.8179H15.8186H15.8193H15.82H15.8208H15.8215H15.8222H15.8229H15.8236H15.8243H15.825H15.8257H15.8264H15.8271H15.8278H15.8285H15.8292H15.8299H15.8306H15.8313H15.832H15.8327H15.8334H15.8341H15.8348H15.8355H15.8362H15.8369H15.8376H15.8383H15.839H15.8397H15.8404H15.8411H15.8418H15.8425H15.8432H15.8439H15.8446H15.8453H15.846H15.8467H15.8474H15.8481H15.8488H15.8495H15.8502H15.8509H15.8516H15.8523H15.853H15.8537H15.8544H15.8551H15.8558H15.8565H15.8572H15.8579H15.8586H15.8593H15.86H15.8607H15.8614H15.8621H15.8625C16.6864 15.378 17.5099 15.383 18.3317 15.3879L18.3328 15.3879C19.1564 15.3929 19.9783 15.3979 20.8 15.4078V15.4078H20.806C20.8777 15.4078 20.9768 15.4203 21.0895 15.4388L0.519927 19.8406Z"
              fill="white"
              stroke="black"
            />
            <path
              d="M37.8916 7.62575V29.4002H42.6198V20.6593H55.7778V16.3978H42.6198V11.9184H56.431V7.62575H37.8916Z"
              fill="black"
            />
            <path
              d="M62.8807 29.4002V7.03473H58.1837V29.4002H62.8807Z"
              fill="black"
            />
            <path
              d="M74.0555 11.6385C68.7674 11.6385 64.3503 14.5314 64.3503 20.5349C64.3503 26.5696 68.7674 29.4002 74.0555 29.4002C79.3747 29.4002 83.7918 26.6629 83.7918 20.5349C83.7918 14.4692 79.3747 11.6385 74.0555 11.6385ZM74.0555 25.1075C71.1004 25.1075 68.9851 23.8011 68.9851 20.5349C68.9851 17.2376 71.1004 15.9623 74.0555 15.9623C77.0417 15.9623 79.1569 17.2998 79.1569 20.5349C79.1569 23.6767 77.0417 25.1075 74.0555 25.1075Z"
              fill="black"
            />
            <path
              d="M108.385 11.9495L104.341 24.7965L100.359 11.9495H95.7556L91.8051 24.7965L87.7613 11.9495H83.002L88.4767 29.4002H94.8846L98.0575 19.0729L101.261 29.4002H107.669L113.144 11.9495H108.385Z"
              fill="black"
            />
            <path
              d="M122.102 18.8241L121.698 18.7929C118.649 18.3264 118.121 17.8909 118.121 17.1132C118.121 16.5844 118.681 15.6201 121.325 15.6201C124.062 15.6201 125.244 16.3666 125.244 17.7353V17.8909H130.065V17.7353C130.065 15.0602 128.541 11.8562 121.325 11.8562C114.606 11.8562 113.206 14.7491 113.206 17.1754C113.206 20.6593 116.316 21.7792 121.325 22.4324C121.573 22.4635 121.822 22.4946 122.071 22.5257C123.969 22.7435 125.648 22.9923 125.648 24.2988C125.648 25.4497 123.844 25.6986 121.947 25.6986C118.805 25.6986 117.685 25.0142 117.685 23.5211V23.3656H112.833V23.7078C112.801 24.6098 112.801 26.0718 114.015 27.285C115.414 28.6848 118.121 29.4002 122.071 29.4002C127.421 29.4002 130.532 28.5604 130.532 24.2366C130.532 20.0994 126.053 19.4151 122.102 18.8241Z"
              fill="black"
            />
            <path
              d="M143.598 11.9806C140.363 11.9806 138.372 13.0072 137.19 14.5314H136.941V11.9806H132.213V36.057H136.941V27.005H137.159C138.341 28.5293 140.332 29.4625 143.598 29.4625C150.939 29.4625 151.748 23.0545 151.748 20.7215C151.748 18.1708 150.97 11.9806 143.598 11.9806ZM142.23 25.3875C138.124 25.3875 137.284 23.3656 137.284 20.7215C137.284 18.3575 138.124 16.0556 142.23 16.0556C146.74 16.0556 147.238 19.3529 147.238 20.7215C147.238 21.9658 146.74 25.3875 142.23 25.3875Z"
              fill="black"
            />
            <path
              d="M167.153 14.5314C165.971 12.9761 164.011 11.9495 160.776 11.9495C153.404 11.9495 152.626 18.1397 152.626 20.6904C152.626 23.0234 153.435 29.4002 160.745 29.4002C164.042 29.4002 166.033 28.4981 167.215 26.9739H167.371V29.4002H172.099V11.9495H167.371V14.5314H167.153ZM162.145 25.3564C157.634 25.3564 157.137 21.9347 157.137 20.6904C157.137 19.3218 157.603 16.0245 162.145 16.0245C166.22 16.0245 167.06 18.3264 167.06 20.6904C167.06 23.3345 166.22 25.3564 162.145 25.3564Z"
              fill="black"
            />
            <path
              d="M183.909 11.9495C180.891 11.9495 179.834 12.8516 178.838 14.5314H178.558V11.9495H173.83V29.4002H178.558V21.5925C178.558 19.2284 179.585 16.4911 183.1 16.4911C184.593 16.4911 185.806 16.7399 186.242 16.8644L186.988 12.4161C186.18 12.2295 185.153 11.9495 183.909 11.9495Z"
              fill="black"
            />
            <path
              d="M206.93 11.9495H200.366L192.683 19.5395V6.94141H187.986V29.3691H192.683V25.9785L196.074 22.619L200.989 29.4002H206.868L199.527 19.2595L206.93 11.9495Z"
              fill="black"
            />
          </svg> */}
          <div className="flex grow flex-row flex-wrap lg:flex-nowrap lg:items-start lg:justify-end">
            {/* LINK BLOCK */}
            <div className="lg:mt-0 my-5 mr-5 flex max-w-52 grow basis-24 flex-col space-y-5">
              {/* <h2 className="font-inter font-medium text-black">SOLUTION</h2>
              <a href="" className="font-inter font-light text-gray-500">
                Marketing
              </a>
              <a href="" className="font-inter font-light text-gray-500">
                Analytics
              </a>
              <a href="" className="font-inter font-light text-gray-500">
                Commerce
              </a>
              <a href="" className="font-inter font-light text-gray-500">
                Insights
              </a> */}
            </div>
            {/* LINK BLOCK */}
            <div className="lg:mt-0 my-5  mr-5 lg:ml-32 flex max-w-52 grow basis-24 flex-col space-y-5">
              <h2 className="font-inter font-medium text-black">SUPPORT</h2>
              <Link to='/shop/doc'>
              <a href="" className="font-inter font-light text-gray-500">
                Documentation
              </a>
              </Link>
              <a href="" className="font-inter font-light text-gray-500">
                Guides
              </a>
            </div>
            {/* LINK BLOCK */}
            <div className="lg:mt-0 my-5 mr-5  lg:ml-32 flex max-w-52 grow basis-24 flex-col space-y-5">
              <h2 className="font-inter font-medium text-black">COMPANY</h2>
             <Link to="/shop/about">
             <a href="" className="font-inter font-light text-gray-500">
                About
              </a>
             </Link>
              
              <a href="" className="font-inter font-light text-gray-500">
                Partners
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* DIVIDER */}
      <div className="mx-auto my-12 w-full border border-gray-300 lg:my-20"></div>
      {/* COPYRIGHT TEXT */}
      <div className="lg:flex lg:flex-row-reverse lg:justify-between">
        {/* SOCIAL MEDIA ICONS */}
        <div className="lg:mt-0 mb-8 mt-6 flex flex-row">
          <a
            href=""
            className="mr-4 text-black transition hover:text-gray-400"
          >
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.25C9.4791 2.25005 7.05619 3.22647 5.23968 4.97439C3.42317 6.72231 2.35426 9.10586 2.25723 11.6249C2.1602 14.1439 3.0426 16.6026 4.71928 18.4851C6.39595 20.3676 8.73657 21.5275 11.25 21.7214V14.2501H9C8.80109 14.2501 8.61032 14.1711 8.46967 14.0304C8.32902 13.8898 8.25 13.699 8.25 13.5001C8.25 13.3012 8.32902 13.1104 8.46967 12.9698C8.61032 12.8291 8.80109 12.7501 9 12.7501H11.25V10.5001C11.2509 9.70472 11.5673 8.94218 12.1297 8.37977C12.6921 7.81736 13.4546 7.501 14.25 7.50009H15.75C15.9489 7.50009 16.1397 7.57911 16.2803 7.71976C16.421 7.86041 16.5 8.05118 16.5 8.25009C16.5 8.449 16.421 8.63977 16.2803 8.78042C16.1397 8.92107 15.9489 9.00009 15.75 9.00009H14.25C13.8523 9.00054 13.471 9.15872 13.1898 9.43993C12.9086 9.72114 12.7505 10.1024 12.75 10.5001V12.7501H15C15.1989 12.7501 15.3897 12.8291 15.5303 12.9698C15.671 13.1104 15.75 13.3012 15.75 13.5001C15.75 13.699 15.671 13.8898 15.5303 14.0304C15.3897 14.1711 15.1989 14.2501 15 14.2501H12.75V21.7214C15.2634 21.5275 17.604 20.3676 19.2807 18.4851C20.9574 16.6026 21.8398 14.1439 21.7427 11.6249C21.6457 9.10587 20.5768 6.72232 18.7603 4.9744C16.9438 3.22649 14.5209 2.25006 12 2.25Z"></path>
            </svg>
          </a>
          <a
            href=""
            className="mx-4 text-black transition hover:text-gray-400"
          >
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"></path>
              <path d="M16.125 2.625H7.875C6.4831 2.62658 5.14865 3.18021 4.16443 4.16443C3.18021 5.14865 2.62658 6.4831 2.625 7.875V16.125C2.62658 17.5169 3.18021 18.8513 4.16443 19.8356C5.14865 20.8198 6.4831 21.3734 7.875 21.375H16.125C17.5169 21.3734 18.8513 20.8198 19.8356 19.8356C20.8198 18.8513 21.3734 17.5169 21.375 16.125V7.875C21.3734 6.4831 20.8198 5.14865 19.8356 4.16443C18.8513 3.18021 17.5169 2.62658 16.125 2.625ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4987 13.1931 16.0241 14.3369 15.1805 15.1805C14.3369 16.0241 13.1931 16.4987 12 16.5ZM16.875 8.25C16.6525 8.25 16.435 8.18402 16.25 8.0604C16.065 7.93679 15.9208 7.76109 15.8356 7.55552C15.7505 7.34995 15.7282 7.12375 15.7716 6.90552C15.815 6.68729 15.9222 6.48684 16.0795 6.3295C16.2368 6.17217 16.4373 6.06502 16.6555 6.02162C16.8738 5.97821 17.1 6.00049 17.3055 6.08564C17.5111 6.17078 17.6868 6.31498 17.8104 6.49998C17.934 6.68499 18 6.9025 18 7.125C18 7.42337 17.8815 7.70952 17.6705 7.9205C17.4595 8.13147 17.1734 8.25 16.875 8.25Z"></path>
            </svg>
          </a>
          <a
            href=""
            className="mx-4 text-black transition hover:text-gray-400"
          >
            <svg
              className="fill-current"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.5952 12.4998C22.1776 11.988 22.5489 11.2779 22.6367 10.5076C22.7245 9.73723 22.5226 8.96177 22.0703 8.33205C21.618 7.70233 20.9476 7.2634 20.1895 7.10064C19.4315 6.93788 18.64 7.06293 17.969 7.45147V5.46854C17.9694 4.83357 17.7763 4.21356 17.4153 3.69117C17.0544 3.16878 16.5427 2.76884 15.9486 2.54466C15.3546 2.32048 14.7063 2.28271 14.0902 2.4364C13.4741 2.59009 12.9195 2.92793 12.5003 3.40487C11.9885 2.82243 11.2784 2.45118 10.5081 2.36336C9.73772 2.27555 8.96225 2.47744 8.33253 2.92976C7.70282 3.38208 7.26388 4.05249 7.10112 4.81054C6.93836 5.5686 7.06342 6.36009 7.45197 7.03104H5.46904C4.83406 7.03063 4.21405 7.22379 3.69166 7.58476C3.16927 7.94573 2.76933 8.45736 2.54515 9.05144C2.32097 9.64552 2.28321 10.2938 2.4369 10.9099C2.59059 11.526 2.92843 12.0806 3.40538 12.4998C2.82293 13.0115 2.45168 13.7217 2.36386 14.492C2.27603 15.2624 2.47792 16.0378 2.93024 16.6676C3.38257 17.2973 4.05297 17.7362 4.81103 17.899C5.56909 18.0617 6.36059 17.9367 7.03154 17.5481V19.531C7.03113 20.166 7.22428 20.786 7.58525 21.3084C7.94622 21.8308 8.45785 22.2307 9.05193 22.4549C9.64602 22.6791 10.2943 22.7169 10.9104 22.5632C11.5265 22.4095 12.0811 22.0717 12.5003 21.5947C13.012 22.1772 13.7222 22.5484 14.4925 22.6362C15.2629 22.724 16.0383 22.5221 16.668 22.0698C17.2978 21.6175 17.7367 20.9471 17.8995 20.189C18.0622 19.431 17.9372 18.6395 17.5486 17.9685H19.5315C20.1665 17.969 20.7865 17.7758 21.3089 17.4148C21.8313 17.0539 22.2312 16.5422 22.4554 15.9481C22.6796 15.3541 22.7174 14.7058 22.5637 14.0897C22.41 13.4736 22.0721 12.919 21.5952 12.4998ZM8.59404 5.46854C8.59404 5.05414 8.75866 4.65671 9.05168 4.36369C9.34471 4.07066 9.74214 3.90604 10.1565 3.90604C10.5709 3.90604 10.9684 4.07066 11.2614 4.36369C11.5544 4.65671 11.719 5.05414 11.719 5.46854V7.03104H10.1565C9.74228 7.03057 9.34513 6.8658 9.05221 6.57287C8.75928 6.27995 8.59451 5.8828 8.59404 5.46854ZM3.90654 10.156C3.90701 9.74179 4.07178 9.34463 4.36471 9.05171C4.65763 8.75879 5.05478 8.59402 5.46904 8.59354H10.1565C10.5708 8.59402 10.9679 8.75879 11.2609 9.05171C11.5538 9.34463 11.7186 9.74179 11.719 10.156V11.7185H5.46904C5.05478 11.7181 4.65763 11.5533 4.36471 11.2604C4.07178 10.9675 3.90701 10.5703 3.90654 10.156ZM16.4065 19.531C16.4065 19.9454 16.2419 20.3429 15.9489 20.6359C15.6559 20.9289 15.2584 21.0935 14.844 21.0935C14.4296 21.0935 14.0322 20.9289 13.7392 20.6359C13.4462 20.3429 13.2815 19.9454 13.2815 19.531V17.9685H14.844C15.2583 17.969 15.6554 18.1338 15.9484 18.4267C16.2413 18.7196 16.4061 19.1168 16.4065 19.531ZM19.5315 16.406H14.844C14.4298 16.4056 14.0326 16.2408 13.7397 15.9479C13.4468 15.655 13.282 15.2578 13.2815 14.8435V13.281H19.5315C19.9459 13.281 20.3434 13.4457 20.6364 13.7387C20.9294 14.0317 21.094 14.4291 21.094 14.8435C21.094 15.2579 20.9294 15.6554 20.6364 15.9484C20.3434 16.2414 19.9459 16.406 19.5315 16.406Z"></path>
            </svg>
          </a>
          <a
            href=""
            className="mx-4 text-black transition hover:text-gray-400"
          >
            <svg
              className="fill-current"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.9883 7.58391L21.0426 10.5297C20.4545 17.354 14.6994 22.6565 7.81089 22.6565C6.39249 22.6565 5.22357 22.4316 4.33651 21.9881C3.62063 21.6301 3.32738 21.246 3.25461 21.1367C3.18933 21.0388 3.14702 20.9274 3.13083 20.8108C3.11464 20.6943 3.12499 20.5755 3.16112 20.4635C3.19724 20.3515 3.2582 20.2491 3.33945 20.164C3.42069 20.0789 3.52012 20.0132 3.63031 19.9718C3.65544 19.9624 5.95923 19.0775 7.44821 17.3929C6.52206 16.7334 5.70694 15.9305 5.0335 15.0145C3.69483 13.1977 2.27901 10.0427 3.13598 5.32923C3.16148 5.18895 3.22489 5.05833 3.31932 4.95152C3.41376 4.8447 3.53562 4.76577 3.67171 4.72326C3.8078 4.68075 3.95293 4.67629 4.09137 4.71037C4.22981 4.74445 4.35629 4.81575 4.4571 4.91657C4.49153 4.9509 7.74246 8.15592 11.7166 9.19118L11.7171 8.59361C11.7256 7.34276 12.2303 6.14644 13.1204 5.26759C14.0105 4.38874 15.2132 3.89929 16.4641 3.90682C17.2766 3.91808 18.0724 4.1399 18.7737 4.55063C19.4749 4.96136 20.0576 5.54694 20.4649 6.25019L23.4359 6.25024C23.5904 6.25024 23.7414 6.29606 23.8699 6.3819C23.9984 6.46774 24.0985 6.58975 24.1577 6.73251C24.2168 6.87526 24.2323 7.03234 24.2021 7.18389C24.172 7.33543 24.0976 7.47464 23.9883 7.58391Z"></path>
            </svg>
          </a>
        </div>
        <p className="font-inter lg:mt-0 text-sm text-gray-500">
          © Copyright 2025. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
