import React, { useState } from 'react';
import { Grid, Hidden } from '@material-ui/core';

import Breadcrumbs from '../../components/Breadcrumbs';
import { TwoColumnLayout, LeftPane, RightPane } from '../Layouts';
import MenuCourses from '../../components/MenuCourses';
import MenuScrollable from '../../components/MenuScrollable';
import ProductViewStyleButton from '../../components/ProductViewStyleButton';
import ToggleButton from '../../components/ToggleButton';
import ProductSection from '../../components/ProductSection';
import TrustedBrands from '../../components/TrustedBrands';

import courses from '../../content';

import './Home.css';

const Home = () => {
  const tabList = courses.map((item) => item.name);
  const [productViewStyle, setProductViewStyle] = useState('grid');
  const [selectedTab, setSelectedTab] = useState(tabList[0]);
  const toggleLables = [{ name: 'Pay Annually' }, { name: 'Pay Monthly' }];
  const productList = courses.filter((tab) => selectedTab === tab.name)[0];

  const handleProductViewChange = (event, style) => {
    setProductViewStyle(style)
  };

  const tabChange = (event, value) => {
    setSelectedTab(value);
  };

  return (
    <div className="productPage">
      <Breadcrumbs />
      <TwoColumnLayout>
        <Grid item sm={12} md={3} lg={3} className="leftColumn">
          <LeftPane className="productLeft">
            <Hidden only={['xs', 'sm']}>
              <MenuCourses />
            </Hidden>
          </LeftPane>
        </Grid>
        <Grid item sm={12} md={9} lg={9} className="RightColumn">
          <RightPane className="productRight">
            <ToggleButton labels={toggleLables} />
            <Grid container spacing={2} alignItems="center" className="row" classes={{ root: 'viewListRow' }}>
              <Grid item className="subsNote" xs={7} sm={8} md={8}>
                The annual subscription can be paid one time or choose monthly subscription with <strong>NO EXTRA CHARGES</strong>
              </Grid>
              <Grid item xs={5} sm={4} md={4}>
                <div className="gridListButtons">
                  <ProductViewStyleButton type="grid" onChange={handleProductViewChange} selected={productViewStyle === 'grid'} />
                  <ProductViewStyleButton type="list" onChange={handleProductViewChange} selected={productViewStyle === 'list'} />
                </div>
              </Grid>
            </Grid>
            <MenuScrollable className="productScrollMenu" selectedTab={selectedTab} tabList={tabList} onChange={tabChange} />
            <div className="productsSection">
              <ProductSection title={productList.name} Component="h3" selectedTab={selectedTab}
                product={productList} viewStyle={productViewStyle} />
            </div>
          </RightPane>
        </Grid>
      </TwoColumnLayout>
      <TrustedBrands />
    </div>
  )
};

export default Home;