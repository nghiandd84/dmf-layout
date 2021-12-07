import React from 'react';
import ReactDOM from 'react-dom';
import tw from 'twin.macro';

import './index.scss';
import H1 from 'dmf_ui/typography/H1';
import NotAuthLayout from './components/layout/NotAuthLayout';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <>
    <NotAuthLayout header={<Header />} footer={<Footer />} className="ly-demo">
      <div>
        <p>Add Login Page</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <br />
        <p>Add Login Page</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Add Login Page</p> */}
      </div>
    </NotAuthLayout>
  </>
);
ReactDOM.render(<App />, document.body);
