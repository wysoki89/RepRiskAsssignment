import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ArticleHtml from 'ArticleHtml';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import SourceInformation from 'SourceInformation';
import CompaniesList from 'CompaniesList';
import * as _ from 'lodash';


const Body = ({ data: { loading, error, articles, locations } }) => {
    if (loading) {
        return <p>Loading ...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }

    const article = _.first(articles)

    return <Row className="show-grid">
        <Col xs={12} md={4}><ArticleHtml html={article.html} /></Col>
        <Col xs={12} md={4}><SourceInformation
            articleSourceLocation={article.source.location}
            articleSourceName={article.source.name}
            articleSourceDescription={article.source.description}
            articleDate={article.date}
            locations={locations} /></Col>
        <Col xs={12} md={4}><CompaniesList companies={article.companies} locations={locations} /></Col>
    </Row>
};

const articlesAndLocationsQuery = gql`
  query ArticlesAndLocationsQuery {
    articles{
        title
        html
        date
        source{
            name
            description
            location
        }
        companies{
            id
            name
            website
            location
        }
    }
    locations{
        name
        code
    }
  }
  `;

export default graphql(articlesAndLocationsQuery)(Body);