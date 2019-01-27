import React from 'react'
import elasticsearch from 'elasticsearch'

import InputHints from 'react-input-hints'

import presets from '../../utils/presets'
import ResultTable from './ResultTable'
import { connectionString, _index, _type } from './ElasticParam'

const placeholderText = [
  "Welcome to the INSTAR Wiki 2.0!",
  "I am your Search Assistant.",
  "Ask me anything IP camera related...",
  "Youtube Tutorials",
  "Portforwarding Speeport?",
  "Wireless Connection?",
  "8015 Technical Specifications?",
  "SD Card Access?",
  "Fritzbox as FTP Server?",
  "CGI Commands 1080p?",
  "P2P Remote Access?",
  "INSTAR Cloud?",
  "InstarVision iPhone?",
  "Camera Lenses?",
  "Power over Ethernet ?",
  "VPN Connection?"
]

const inputStyle = {
  width: '50%',
  padding: '0.23rem',
  boxShadow: 'inset 0 0 1px rgba(0,0,0,0.1), 0 0 2px rgba(0,0,0,0.1)',
  backgroundColor: presets.brandLight,
  outline: 'none',
  borderRadius: 5,
  borderBottom: '1px solid #44444',
  marginTop: 150,
  marginBottom: 20
}

const client = new elasticsearch.Client({
  host: connectionString,
  log: "trace"
})

const wrapperStyle = {
  margin: '0 auto',
  maxWidth: 960,
  padding: '0px 1.0875rem 1.45rem',
  paddingTop: 20,
}

const center = {
  display: 'flex',
  justifyContent: 'center'
}

const tableWrap = {
  flexGrow: 1,
  padding: '0px 1.0875rem 1.45rem',
}

export class SearchTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { results: [] };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const search_query = event.target.value;

    client.search({
      index: _index,
      type: _type,
      body: {
        query: {
          multi_match: {
            query: search_query,
            fields: ['title^100', 'tags^100', 'abstract^20', 'description^10', 'chapter^5', 'title2^10', 'description2^10'],
            fuzziness: 1,
          },
        },
      },
    }).then(function (body) {
      this.setState({ results: body.hits.hits });
    }.bind(this),
      function (error) {
        console.trace(error.message);
      }
    );
  }

  render() {

    return (
      <div style={wrapperStyle}>
        <div style={center}>
          <InputHints
            onChange={this.handleChange}
            writeSpeedMs={120}
            deleteSpeedMs={20}
            waitBeforeDeleteMs={2000}
            placeholders={placeholderText}
            style={inputStyle} />
        </div>
        <br />
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}

const SearchResults = ({ results }) => (
  <div style={center}>
    <div style={tableWrap}>
      {results.map((result, i) =>
        <ResultTable key={i}
          image={result._source.image}
          title={result._source.title}
          badge={result._source.badge}
          imagesquare={result._source.imagesquare}
          sublink1={result._source.sublink1}
          sublink2={result._source.sublink2}
          sublink3={result._source.sublink3}
          sublink4={result._source.sublink4}
          subtitle1={result._source.subtitle1}
          subtitle2={result._source.subtitle2}
          subtitle3={result._source.subtitle3}
          subtitle4={result._source.subtitle4}
          abstract={result._source.abstract}
        />
      )}
    </div>
  </div>
)

export default SearchTable