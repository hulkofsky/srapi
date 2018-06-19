import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import {
  fetchLocations,
} from '../actions'
import Link from 'next/link'

class LocationsList extends React.Component {
	state = {
		regionSelectorOpened: false,
		selectedRegion: 'All of'
	}

	static async getInitialProps ({store, pathname, query}) {
	  await store.dispatch(fetchLocations())
	}

	toggleRegionSelector() {
	  this.setState({regionSelectorOpened: !this.state.regionSelectorOpened})
	}

	setSelectedRegion(region) {
	  this.setState({selectedRegion: region})
	  this.toggleRegionSelector()
	}

	render() {
		return(
			<div className="locations-block">
			  <div className="caption-region-selector">
			    <div className="row">
			      <div className="paragraph col-md-6 col-lg-4">
			        With over 30 locations across the country, we want there to be a location especially for you. Once you’ve found the best fit, view it’s bespoke page full of local trivia, recommendations and flat details to get you going in your new city.
			      </div>
			      <div className="region-selector-container col-md-6 col-lg-4 offset-lg-4 justify-content-md-end justify-content-center d-flex">
			        <div className="region-selector-prefix">Region:</div>
			        <div className={['region-selector', (this.state.regionSelectorOpened ? 'opened' : '')].join(' ')} onClick={() => this.toggleRegionSelector()}>
			          <div className="selected-region"><span className="region-name">{this.state.selectedRegion}</span></div>
			          <div className="other-regions">
			            <div className="region-item" onClick={() => this.setSelectedRegion('Northern')}>Northern</div>
			            <div className="region-item" onClick={() => this.setSelectedRegion('Middle')}>Middle</div>
			            <div className="region-item" onClick={() => this.setSelectedRegion('Southern')}>Southern</div>
			            <div className="region-item" onClick={() => this.setSelectedRegion('South West')}>South West</div>
			            <div className="region-item" onClick={() => this.setSelectedRegion('South East')}>South East</div>
			            <div className="region-item" onClick={() => this.setSelectedRegion('All of')}>All of</div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>

			  <div className="locations-list">
			    <Link href={{ pathname: '/location', query: { id: 1 } }}>
			      <a className="location-item d-flex align-items-center justify-content-center type-1">
			        <div className="left">
			          <div className="image">
			            <img src="/static/images/FG_UI01_assets_home_location 1 main.jpg" className="img-fluid" alt="" />
			          </div>
			          <div className="caption">featuring the UKs first LED cinema on site</div>
			        </div>
			        <div className="right">
			          <div className="image">
			            <img src="/static/images/FG_UI01_assets_home_location 1 detail.jpg" className="img-fluid" alt="" />
			          </div>
			        </div>
			        <div className="center-block">
			          <span className="location-name">
			            Guildford
			          </span>
			          <div className="caption">featuring the UKs first LED cinema on site</div>
			        </div>
			      </a>
			    </Link>
			    <Link href={{ pathname: '/location', query: { id: 1 } }}>
			      <a className="location-item d-flex align-items-center justify-content-center type-2">
			        <div className="left">
			          <div className="image">
			            <img src="/static/images/FG_UI01_assets_home_location 2 detail.jpg" className="img-fluid" alt="" />
			          </div>
			        </div>
			        <div className="right">
			          <div className="image">
			            <img src="/static/images/FG_UI01_assets_home_location 2 main.jpg" className="img-fluid" alt="" />
			          </div>
			          <div className="caption">featuring the UKs first LED cinema on site</div>
			        </div>
			        <div className="center-block">
			          <span className="location-name">
			            colechester
			          </span>
			          <div className="caption">featuring the UKs first LED cinema on site</div>
			        </div>
			      </a>
			    </Link>
			    <Link href={{ pathname: '/location', query: { id: 1 } }}>
			      <a className="location-item d-flex align-items-center justify-content-center type-1">
			        <div className="left">
			          <div className="image">
			            <img src="/static/images/FG_UI01_assets_home_location 1 main.jpg" className="img-fluid" alt="" />
			          </div>
			          <div className="caption">featuring the UKs first LED cinema on site</div>
			        </div>
			        <div className="right">
			          <div className="image">
			            <img src="/static/images/FG_UI01_assets_home_location 1 detail.jpg" className="img-fluid" alt="" />
			          </div>
			        </div>
			        <div className="center-block">
			          <span className="location-name">
			            Guildford
			          </span>
			          <div className="caption">featuring the UKs first LED cinema on site</div>
			        </div>
			      </a>
			    </Link>
			  </div>
			</div>
		)
	}
}

LocationsList.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      url: PropTypes.string,
    })
  )
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: bindActionCreators(fetchLocations, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsList)