import Button from 'dmf_ui/Button';
import H3 from 'dmf_ui/typography/H3';
import H4 from 'dmf_ui/typography/H4';
import H6 from 'dmf_ui/typography/H6';
import Small from 'dmf_ui/typography/Small';
import React from 'react';
type Link = {
  link: string;
  text: string;
};
const Footer = () => {
  const featureLinks: Link[] = [
    { link: '#/feature-1', text: 'Feature 1' },
    { link: '#/feature-2', text: 'Feature 2' },
  ];
  const resourceLinks: Link[] = [
    { link: '#/resource-1', text: 'Resource 1' },
    { link: '#/resource-2', text: 'Resource 2' },
    { link: '#/resource-3', text: 'Resource 3' },
  ];
  const aboutLinks: Link[] = [
    { link: '#/about-1', text: 'Team' },
    { link: '#/about-2', text: 'Location' },
    { link: '#/about-3', text: 'Privacy' },
    { link: '#/about-4', text: 'Term' },
  ];

  const helpLinks: Link[] = [
    { link: '#/help-1', text: 'Support' },
    { link: '#/help-2', text: 'Help Center' },
    { link: '#/help-3', text: 'Contact us' },
  ];

  return (
    <>
      <footer tw="py-8 bg-gray-100 sm:py-12">
        <div tw="container px-4 mx-auto">
          <div tw="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div tw="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <H4>Features</H4>
              <ul className="list-none footer-links">
                {featureLinks.map((item) => (
                  <li tw="mb-2">
                    <Button
                      tw="!pl-1"
                      buttonType="link"
                      onClick={(_) => (window.location.href = item.link)}
                    >
                      {item.text}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div tw="px-4 mt-8 sm:w-1/2 md:w-1/4 xl:w-1/6 sm:mt-0">
              <H4>Resources</H4>
              <ul className="list-none footer-links">
                {resourceLinks.map((item) => (
                  <li tw="mb-2">
                    <Button
                      tw="!pl-1"
                      buttonType="link"
                      onClick={(_) => (window.location.href = item.link)}
                    >
                      {item.text}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div tw="px-4 mt-8 sm:w-1/2 md:w-1/4 xl:w-1/6 md:mt-0">
              <H4>About</H4>
              <ul tw="list-none ">
                {aboutLinks.map((item) => (
                  <li tw="mb-2">
                    <Button
                      tw="!pl-1"
                      buttonType="link"
                      onClick={(_) => (window.location.href = item.link)}
                    >
                      {item.text}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div tw="px-4 mt-8 sm:w-1/2 md:w-1/4 xl:w-1/6 md:mt-0">
              <H4>Help</H4>
              <ul tw="list-none ">
                {helpLinks.map((item) => (
                  <li tw="mb-2">
                    <Button
                      tw="!pl-1"
                      buttonType="link"
                      onClick={(_) => (window.location.href = item.link)}
                    >
                      {item.text}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 className="mb-6 text-xl font-bold sm:text-center xl:text-left">
                Stay connected
              </h5>
              <div className="flex sm:justify-center xl:justify-start">
                <a
                  href=""
                  className="w-8 h-8 py-1 text-center text-gray-600 border border-2 border-gray-400 rounded-full hover:text-white hover:bg-blue-600 hover:border-blue-600"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href=""
                  className="w-8 h-8 py-1 ml-2 text-center text-gray-600 border border-2 border-gray-400 rounded-full hover:text-white hover:bg-blue-400 hover:border-blue-400"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href=""
                  className="w-8 h-8 py-1 ml-2 text-center text-gray-600 border border-2 border-gray-400 rounded-full hover:text-white hover:bg-red-600 hover:border-red-600"
                >
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </div>
            </div>
          </div>

          <div tw="pt-6 mt-6 border-t sm:flex sm:flex-wrap sm:-mx-4 sm:mt-12 sm:pt-12">
            <div tw="px-4 mt-4 sm:w-1/2 md:w-1/4 md:mt-0">
              <H3>DMF</H3>
              <Small>DaiNghia Micro Frontend </Small>
            </div>
            <div tw="px-4 mt-4 sm:w-1/2 md:w-1/4 md:mt-0">
              <H6>Address</H6>
              <Small>
                <address tw="mb-4 text-sm not-italic">
                  490 Hoang Dieu
                  <br />
                  Da Nang City, Viet Nam
                </address>
              </Small>
            </div>
            <div tw="px-4 mt-4 sm:w-1/2 md:w-1/4 md:mt-0">
              <H6>Free Resources</H6>

              <p tw="mb-4 text-sm">
                Use our HTML blocks for <strong>FREE</strong>.<br />
                <em>All are MIT License</em>
              </p>
            </div>
            <div tw="px-4 mt-6 md:w-1/4 md:ml-auto sm:mt-4 md:mt-0">
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
