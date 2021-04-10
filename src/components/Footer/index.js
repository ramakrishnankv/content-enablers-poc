import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Logo from '../Logo';

import './Footer.css';

const footerLinks = [
  {
    title: 'QUICK LINKS',
    links: [
      {
        label: 'Our Partners',
        link: '/',
      },
      {
        label: 'About Content Enablers',
        link: '/',
      },
      {
        label: 'FAQs',
        link: '/',
      },
      {
        label: 'Customer Login',
        link: '/',
      },
    ]
  },
  {
    title: 'SUPPORT',
    links: [
      {
        label: 'Contact Us',
        link: '/',
      },
      {
        label: 'Customer Support',
        link: '/',
      },
    ]
  },
  {
    title: 'LEGAL',
    links: [
      {
        label: 'Terms & Conditions',
        link: '/',
      },
      {
        label: 'Privacy Policy',
        link: '/',
      },
    ]
  },
];

const payments = [
  'am', 'discover', 'master', 'pay', 'visa'
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerInner">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4}>
            <p>Powered By</p>
            <div className="logoWrap">
              <Logo className="logo" />
            </div>
            <p><strong>About Content Enablers</strong></p>
            <p>
              Recognized as the most comprehensive online global trade compliance training solution, our platform is used by leading
              companies around the world, ranging from the Fortune 500 to small businesses that create the products and services that
              drive business forward and affect our everyday lives. Whether you’re looking for a solution to train your professional
              staff, trade compliance practitioners, or suppliers, you can rely on Content Enablers to help you move global trade forward
              efficiently and compliantly.
          </p>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Grid container spacing={4}>
              {
                footerLinks.map((item) => {
                  return (
                    <Grid item xs={12} sm={3} md={3} className="linkSection">
                      <p><strong>{item.title}</strong></p>
                      {
                        item.links.map((link) => (
                          <p className="linkItem">
                            <Link to={link.link}>{link.label}</Link>
                          </p>
                        ))
                      }
                    </Grid>
                  )
                })
              }
              <Grid item xs={12} sm={3} md={3}>
                <p><strong>PAYMENT</strong></p>
                <div className="pay">
                  {
                    payments.map((card) => <img src={`/images/payment/${card}.png`} alt="" />)
                  }
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <p className="copy">&copy; 2020, Content Enablers 2020. All rights reserved.</p>
    </footer>
  )
};

export { Footer };