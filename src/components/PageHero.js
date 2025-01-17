import React from 'react';

import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImg = styled(Img)`
    height:300px;
`;

const PageHero = ({img}) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col" style={{padding: 0}}>
                <StyledImg fluid={img}></StyledImg>
            </div>
        </div>
    </div>
)

PageHero.propTypes= {
    img: PropTypes.object
}

export default PageHero;