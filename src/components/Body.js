import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ArticleHtml from 'ArticleHtml';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import SourceInformation from 'SourceInformation';
import CompaniesList from 'CompaniesList';

const Body = ({ data: { loading, error, articles, locations } }) => {
    if (loading) {
        return <p>Loading ...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    return <Row className="show-grid">
        <Col xs={12} md={4}><ArticleHtml html={articles[0].html} /></Col>
        <Col xs={12} md={4}><SourceInformation
            articleSourceLocation={articles[0].source.location}
            articleSourceName={articles[0].source.name}
            articleSourceDescription={articles[0].source.description}
            articleDate={articles[0].date}
            locations={locations} /></Col>
        <Col xs={12} md={4}><CompaniesList companies={articles[0].companies} locations={locations} /></Col>
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